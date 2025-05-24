import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Invalid data format" },
      { status: 400 }
    );
  }

  try {
    const user = await db.users.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const passwordIsValid = await bcrypt.compare(password, user.password_hash);

    if (!passwordIsValid)
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });

    const response = NextResponse.json({ success: true });

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
