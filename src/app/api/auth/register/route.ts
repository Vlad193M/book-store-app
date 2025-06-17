import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

function isValidRegisterRequestBody(obj: any): obj is RegisterRequestBody {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    obj.name.trim() !== '' &&
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

  if (!isValidRegisterRequestBody(body)) {
    return NextResponse.json(
      { message: 'Invalid data format' },
      { status: 400 }
    );
  }

  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    const response = NextResponse.json({ success: true }, { status: 201 });

    response.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      {
        message:
          'The server is temporarily unavailable. Please try again later.',
      },
      { status: 503 }
    );
  }
}
