import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import FamilyTree from '@/models/FamilyTree';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { first_name, last_name, email, password } = body;

        if (!first_name || !last_name || !email || !password) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists with this email' },
                { status: 409 }
            );
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        // Create user
        const newUser = await User.create({
            first_name,
            last_name,
            email,
            password_hash,
        });

        // Create default family tree
        await FamilyTree.create({
            user_id: newUser._id,
            name: `${first_name}'s Family Tree`,
            description: 'My first family tree',
        });

        // Return user without sensitive data
        const userResponse = {
            _id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
        };

        return NextResponse.json({
            message: 'User registered successfully',
            user: userResponse,
        });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
