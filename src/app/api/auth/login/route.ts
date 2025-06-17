import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

interface LoginRequestBody {
  email: string;
  password: string;
}

function isValidLoginRequestBody(obj: any): obj is LoginRequestBody {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.email === 'string' &&
    obj.email.trim() !== '' &&
    typeof obj.password === 'string' &&
    obj.password.trim() !== ''
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  if (!isValidLoginRequestBody(body)) {
    return NextResponse.json(
      { message: 'Invalid data format' },
      { status: 400 }
    );
  }

  const { email, password } = body;

  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const passwordIsValid = await bcrypt.compare(password, user.passwordHash);

    if (!passwordIsValid) {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    const response = NextResponse.json({ success: true });

    response.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error(error.message);

    return NextResponse.json(
      {
        message:
          'The server is temporarily unavailable. Please try again later.',
      },
      { status: 503 }
    );
  }
}
