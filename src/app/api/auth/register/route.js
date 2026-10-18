import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, signToken } from '@/lib/auth';
import { mockStore } from '@/lib/mockStore';

export async function POST(request) {
  try {
    const { name, email, password, role, institution } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    const { isMock } = await connectToDatabase();
    const hashedPassword = await hashPassword(password);

    if (isMock) {
      const existing = mockStore.findUserByEmail(email);
      if (existing) {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 400 }
        );
      }

      const newUser = {
        id: 'usr_' + Date.now(),
        name,
        email,
        passwordHash: hashedPassword,
        role: role || 'student',
        institution: institution || 'CADT - Institute of Digital Technology',
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
        kitProgress: {
          cardboardCut: false,
          lensesFitted: false,
          controllerWired: false,
          bluetoothPaired: false,
          firstVrCompleted: false,
        },
        completedSimulations: [],
        bookmarkedSimulations: [],
        createdAt: new Date().toISOString(),
      };

      mockStore.addUser(newUser);

      const token = signToken({
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      });

      return NextResponse.json({
        success: true,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          institution: newUser.institution,
          avatar: newUser.avatar,
          kitProgress: newUser.kitProgress,
          completedSimulations: newUser.completedSimulations,
          bookmarkedSimulations: newUser.bookmarkedSimulations,
        },
        token,
        storage: 'local-active',
      });
    }

    // Real MongoDB implementation
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || 'student',
      institution: institution || 'CADT - Institute of Digital Technology',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
    });

    const token = signToken({
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        institution: newUser.institution,
        avatar: newUser.avatar,
        kitProgress: newUser.kitProgress,
        completedSimulations: newUser.completedSimulations,
        bookmarkedSimulations: newUser.bookmarkedSimulations,
      },
      token,
      storage: 'mongodb-connected',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Server error during registration: ' + error.message },
      { status: 500 }
    );
  }
}
