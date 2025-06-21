import 'server-only';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../db';

export async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
// console.log('verifyAuth all:', request.cookies);
  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    const tokenPayload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    const userId = tokenPayload.id as string;

    const user = await db.user.findUnique({ where: { id: userId } });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    return { user };
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Invalid token', message: error.message },
      { status: 401 }
    );
  }
}

export function decodeUserIdFromRequest(request: NextRequest): string | null {
  const token = request.cookies.get('token')?.value;
  if (!token) return null;

  const tokenPayload = jwt.decode(token) as jwt.JwtPayload | null;
  if (!tokenPayload || typeof tokenPayload.id !== 'string') return null;

  return tokenPayload.id;
}
