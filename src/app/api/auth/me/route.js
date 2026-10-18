import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { mockStore } from '@/lib/mockStore';

export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized, no token provided' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    const { isMock } = await connectToDatabase();

    if (isMock) {
      const user = mockStore.findUserById(decoded.id) || mockStore.findUserByEmail(decoded.email);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          institution: user.institution,
          avatar: user.avatar,
          kitProgress: user.kitProgress || {},
          completedSimulations: user.completedSimulations || [],
          bookmarkedSimulations: user.bookmarkedSimulations || [],
        },
      });
    }

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return NextResponse.json({ error: 'User not found in database' }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        institution: user.institution,
        avatar: user.avatar,
        kitProgress: user.kitProgress || {},
        completedSimulations: user.completedSimulations || [],
        bookmarkedSimulations: user.bookmarkedSimulations || [],
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Server error: ' + error.message }, { status: 500 });
  }
}
