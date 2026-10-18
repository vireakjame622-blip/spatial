import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import KitOrder from '@/models/KitOrder';
import { mockStore } from '@/lib/mockStore';
import { verifyToken } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, institution, role, kitType, quantity, shippingAddress, notes } = body;

    if (!fullName || !email || !phone || !shippingAddress) {
      return NextResponse.json(
        { error: 'Please provide full name, email, phone, and delivery address.' },
        { status: 400 }
      );
    }

    // Check optional auth token to link user account
    let userId = null;
    const authHeader = request.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const decoded = verifyToken(authHeader.split(' ')[1]);
      if (decoded) userId = decoded.id;
    }

    const { isMock } = await connectToDatabase();

    if (isMock) {
      const newOrder = {
        id: 'ord_' + Date.now(),
        fullName,
        email,
        phone,
        institution: institution || 'CADT',
        role: role || 'student',
        kitType: kitType || 'full_kit',
        quantity: Number(quantity) || 1,
        shippingAddress,
        notes: notes || '',
        status: 'pending',
        userId,
        createdAt: new Date().toISOString()
      };

      mockStore.addOrder(newOrder);

      return NextResponse.json({
        success: true,
        order: newOrder,
        message: 'Spatial Kit request submitted successfully!',
        storage: 'local'
      });
    }

    // MongoDB storage
    const order = await KitOrder.create({
      fullName,
      email,
      phone,
      institution: institution || 'CADT',
      role: role || 'student',
      kitType: kitType || 'full_kit',
      quantity: Number(quantity) || 1,
      shippingAddress,
      notes: notes || '',
      status: 'pending',
      userId,
    });

    return NextResponse.json({
      success: true,
      order,
      message: 'Spatial Kit request registered in database!',
      storage: 'mongodb'
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to process kit order: ' + error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { isMock } = await connectToDatabase();

    if (isMock) {
      return NextResponse.json({
        orders: mockStore.getOrders(),
        total: mockStore.getOrders().length
      });
    }

    const orders = await KitOrder.find().sort({ createdAt: -1 });
    return NextResponse.json({
      orders,
      total: orders.length
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
