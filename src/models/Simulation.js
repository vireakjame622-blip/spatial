import mongoose from 'mongoose';

const SimulationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleKhmer: { type: String, default: '' },
    category: {
      type: String,
      enum: ['Clean City', 'Astronomy', 'Anatomy', 'Physics', 'Robotics', 'Chemistry'],
      default: 'Clean City',
    },
    categoryKhmer: { type: String, default: '' },
    description: { type: String, required: true },
    descriptionKhmer: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    gameUrl: { type: String, default: '' },
    duration: { type: String, default: '15 mins' },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Eco Hero', 'Advanced Eco Driver'], default: 'Beginner' },
    vrCardboardSupported: { type: Boolean, default: true },
    controllerSupported: { type: Boolean, default: true },
    unityBuildUrl: { type: String, default: '' },
    runsCount: { type: Number, default: 0 },
    rating: { type: Number, default: 4.9 },
    learningObjectives: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.Simulation || mongoose.model('Simulation', SimulationSchema);
