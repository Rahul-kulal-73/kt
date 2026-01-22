import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Member from '@/models/Member';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // tree_id is required
        if (!body.tree_id || !body.first_name || !body.last_name) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        await connectToDatabase();
        const newMember = await Member.create(body);

        return NextResponse.json(newMember);
    } catch (error) {
        console.error('Create member error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
