import { prisma } from '@/app/lib/prisma'; // adjust if your prisma is in another path
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const members = await prisma.member.findMany({
    orderBy: { id: 'asc' },
  });

  return NextResponse.json(members);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, phone, plan, startDate, expiryDate } = body;
  
    const newMember = await prisma.member.create({
      data: {
        name,
        email,
        phone,
        plan,
        startDate,
        expiryDate,
        status: 'active',
      },
    });
  
    return NextResponse.json(newMember, { status: 201 });
  }
  