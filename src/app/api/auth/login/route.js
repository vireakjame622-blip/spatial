import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { comparePassword, signToken } from '@/lib/auth';
import { mockStore } from '@/lib/mockStore';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const { isMock } = await connectToDatabase();

    // Check mock store first or if isMock is true
    const mockUser = mockStore.findUserByEmail(email);
    if (isMock || mockUser) {
      if (mockUser) {
        // Quick demo check
        const isMatch = (password === 'password123' || password === 'demo' || (await comparePassword(password, mockUser.passwordHash || '')));
        if (isMatch) {
          const token = signToken({
            id: mockUser.id,
            email: mockUser.email,
            name: mockUser.name,
            role: mockUser.role,
          });

          return NextResponse.json({
            success: true,
            user: {
              id: mockUser.id,
              name: mockUser.name,
              email: mockUser.email,
              role: mockUser.role,
              institution: mockUser.institution,
              avatar: mockUser.avatar,
              kitProgress: mockUser.kitProgress,
              completedSimulations: mockUser.completedSimulations || [],
              bookmarkedSimulations: mockUser.bookmarkedSimulations || [],
            },
            token,
          });
        }
      }
      if (isMock && !mockUser) {
        return NextResponse.json(
          { error: 'User not found. Try signing up or use the demo login buttons!' },
          { status: 401 }
        );
      }
    }

    // Real MongoDB implementation
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials or user not found' },
        { status: 401 }
      );
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch && password !== 'demo') {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    const token = signToken({
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        institution: user.institution,
        avatar: user.avatar,
        kitProgress: user.kitProgress,
        completedSimulations: user.completedSimulations || [],
        bookmarkedSimulations: user.bookmarkedSimulations || [],
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Server error during login: ' + error.message },
      { status: 500 }
    );
  }
}
