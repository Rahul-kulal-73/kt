import mongoose, { Schema, Model } from 'mongoose';

export interface IUser {
    _id: mongoose.Types.ObjectId;
    first_name: string;
    last_name: string;
    email: string;
    password_hash: string;
    phone?: string;
    created_at: Date;
    updated_at: Date;
}

const UserSchema = new Schema<IUser>({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    phone: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

// Prevent model recompilation error in Next.js
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
