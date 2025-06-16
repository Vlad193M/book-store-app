import { NextRequest, NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';

import { db } from './lib/db';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value ?? '';

  try {
    const tokenPayload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;

    const userId = tokenPayload.id as string;

    const user = await db.users.findUnique({ where: { id: userId } });

    if (!user) {
      throw new Error('User don not exist');
    }
  } catch (error: any) {
    console.log(error.message, 'message');
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path((?!auth/login|auth/register).*)'],
};
