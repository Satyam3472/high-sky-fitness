// pages/api/members.ts
import { prisma } from '../../lib/prisma'; // Adjust path if needed

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const members = await prisma.member.findMany({
      orderBy: { id: 'asc' },
    });
    return res.status(200).json(members);
  }

  if (req.method === 'POST') {
    const { name, email, phone, plan, joinDate, expiry } = req.body;

    const newMember = await prisma.member.create({
      data: {
        name,
        email,
        phone,
        plan,
        joinDate: new Date(joinDate),
        expiry: new Date(expiry),
        status: 'active',
      },
    });
    return res.status(201).json(newMember);
  }

  res.status(405).end(); // Method Not Allowed
}
