import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { mockStore } from '@/lib/mockStore';

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { action, simulationId, kitStep, kitStepValue } = await request.json();
    const { isMock } = await connectToDatabase();

    if (isMock) {
      const user = mockStore.findUserById(decoded.id) || mockStore.findUserByEmail(decoded.email);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      if (action === 'toggle_bookmark' && simulationId) {
        if (!user.bookmarkedSimulations) user.bookmarkedSimulations = [];
        const idx = user.bookmarkedSimulations.indexOf(simulationId);
        if (idx > -1) {
          user.bookmarkedSimulations.splice(idx, 1);
        } else {
          user.bookmarkedSimulations.push(simulationId);
        }
      } else if (action === 'complete_sim' && simulationId) {
        if (!user.completedSimulations) user.completedSimulations = [];
        if (!user.completedSimulations.includes(simulationId)) {
          user.completedSimulations.push(simulationId);
        }
      } else if (action === 'update_kit_step' && kitStep) {
        if (!user.kitProgress) user.kitProgress = {};
        user.kitProgress[kitStep] = !!kitStepValue;
      }

      mockStore.updateUser(user.id, user);
      return NextResponse.json({ success: true, user });
    }

    // Real MongoDB implementation
    const user = await User.findById(decoded.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (action === 'toggle_bookmark' && simulationId) {
      const idx = user.bookmarkedSimulations.indexOf(simulationId);
      if (idx > -1) {
        user.bookmarkedSimulations.splice(idx, 1);
      } else {
        user.bookmarkedSimulations.push(simulationId);
      }
    } else if (action === 'complete_sim' && simulationId) {
      if (!user.completedSimulations.includes(simulationId)) {
        user.completedSimulations.push(simulationId);
      }
    } else if (action === 'update_kit_step' && kitStep) {
      if (!user.kitProgress) user.kitProgress = {};
      user.kitProgress[kitStep] = !!kitStepValue;
      user.markModified('kitProgress');
    }

    await user.save();

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        institution: user.institution,
        kitProgress: user.kitProgress,
        completedSimulations: user.completedSimulations,
        bookmarkedSimulations: user.bookmarkedSimulations,
      },
    });
  } catch (error) {
    console.error('Progress update error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
