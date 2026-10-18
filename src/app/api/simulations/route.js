import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Simulation from '@/models/Simulation';
import { initialSimulations, mockStore } from '@/lib/mockStore';

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const { isMock } = await connectToDatabase();

    if (isMock) {
      let results = [...mockStore.getSimulations()];

      if (category && category !== 'All') {
        results = results.filter((s) => s.category.toLowerCase() === category.toLowerCase());
      }
      if (search) {
        const q = search.toLowerCase();
        results = results.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            (s.titleKhmer && s.titleKhmer.includes(q))
        );
      }

      return NextResponse.json({
        simulations: results,
        total: results.length,
        source: 'local',
      });
    }

    // Real MongoDB implementation
    let count = await Simulation.countDocuments();
    if (count === 0) {
      // Seed with initial simulations
      await Simulation.insertMany(initialSimulations);
    }

    const query = {};
    if (category && category !== 'All') {
      query.category = category;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { titleKhmer: { $regex: search, $options: 'i' } },
      ];
    }

    const simulations = await Simulation.find(query).sort({ runsCount: -1 });

    return NextResponse.json({
      simulations,
      total: simulations.length,
      source: 'mongodb',
    });
  } catch (error) {
    console.error('Error fetching simulations:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
