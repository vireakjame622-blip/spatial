import mongoose from 'mongoose';

const KitOrderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide a contact phone number'],
      trim: true,
    },
    institution: {
      type: String,
      required: [true, 'Please provide your school or university name'],
      default: 'CADT',
    },
    role: {
      type: String,
      enum: ['student', 'teacher', 'school_admin', 'maker'],
      default: 'student',
    },
    kitType: {
      type: String,
      enum: ['full_kit', 'cardboard_only', 'controller_only', 'classroom_bundle'],
      default: 'full_kit',
    },
    quantity: {
      type: Number,
      min: 1,
      max: 100,
      default: 1,
    },
    shippingAddress: {
      type: String,
      required: [true, 'Please provide delivery address or campus pickup point'],
    },
    notes: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'assembling', 'shipped', 'delivered'],
      default: 'pending',
    },
    userId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.KitOrder || mongoose.model('KitOrder', KitOrderSchema);
