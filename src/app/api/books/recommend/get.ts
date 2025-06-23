import {
  getBooksBySimilarCategories,
  getTopStockBooks,
  getUserCartBookIds,
} from '@/lib/db/books';
import { verifyAuth } from '@/lib/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const authResult = await verifyAuth(request);
  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const userId = authResult.user.id;

  try {
    const bookIds = await getUserCartBookIds(userId);
    let recommendBooks;
    if (bookIds.length > 0) {
      recommendBooks = await getBooksBySimilarCategories({ bookIds });
    } else {
      recommendBooks = await getTopStockBooks();
    }

    return NextResponse.json(recommendBooks);
  } catch (error: any) {
    console.log(error.message, 'message');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
