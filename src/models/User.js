import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['student', 'educator', 'maker', 'admin'],
      default: 'student',
    },
    institution: {
      type: String,
      default: 'CADT - Institute of Digital Technology',
    },
    avatar: {
      type: String,
      default: '',
    },
    kitProgress: {
      cardboardCut: { type: Boolean, default: false },
      lensesFitted: { type: Boolean, default: false },
      controllerWired: { type: Boolean, default: false },
      bluetoothPaired: { type: Boolean, default: false },
      firstVrCompleted: { type: Boolean, default: false },
    },
    completedSimulations: [{ type: String }],
    bookmarkedSimulations: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
