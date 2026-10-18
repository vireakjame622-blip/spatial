import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/spatial_vr';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, isMock: false };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return { connection: cached.conn, isMock: cached.isMock };
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2500, // Quick timeout if no local mongo daemon
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('✓ Connected to MongoDB for Spatial VR');
      cached.isMock = false;
      return mongooseInstance;
    }).catch((err) => {
      console.warn('⚠️ MongoDB connection unavailable. Activating Spatial In-Memory Storage for seamless local development:', err.message);
      cached.isMock = true;
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    cached.isMock = true;
  }

  return { connection: cached.conn, isMock: cached.isMock };
}
