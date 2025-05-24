import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Invalid data format" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await db.users.create({
      data: {
        name,
        email,
        password_hash: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });

    const response = NextResponse.json({ success: true }, { status: 201 });

    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      {
        message:
          "The server is temporarily unavailable. Please try again later.",
      },
      { status: 503 }
    );
  }
}
