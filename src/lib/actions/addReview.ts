'use server';

import jwt from 'jsonwebtoken';

import { cookies } from 'next/headers';
import { db } from '../db';

export async function addReview(data: {
  bookId: string;
  review: string;
  rating: number;
}) {
  const cookieStore = await cookies();

  const tokenObj = cookieStore.get('token');
  const token = tokenObj?.value ?? '';
  console.log(token);

  try {
    const tokenPayload = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as jwt.JwtPayload;

    const userId = tokenPayload.id as string;

    const user = await db.users.findUnique({ where: { id: userId } });

    if (!user) {
      throw new Error('User don not exist');
    }

    const newReview = await db.reviews.create({
      data: {
        user_id: user.id,
        book_id: data.bookId,
        text: data.review,
        rating: data.rating,
      },
    });

    return newReview;
  } catch (error: any) {
    console.log(error.message, 'message');
    return { message: error.message };
  }
}
