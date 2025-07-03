import { getBooks } from '@/lib/db/books/getBooks';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const take = parseInt(searchParams.get('take') || '12', 10);
  const cursorId = searchParams.get('cursorId') ?? undefined;
  const order = (searchParams.get('order') || 'desc') as 'asc' | 'desc';
  const categoryIds = searchParams.getAll('categoryIds') ?? undefined;
  const search = searchParams.get('search') ?? undefined;
  const minPrice = searchParams.get('minPrice') ?? undefined;
  const maxPrice = searchParams.get('maxPrice') ?? undefined;
  const bookFormats = searchParams.getAll('bookFormats') ?? undefined;

  try {
    const books = await getBooks({
      take,
      cursorId,
      order,
      categoryIds,
      search,
      minPrice,
      maxPrice,
      bookFormats,
    });
    return Response.json(books);
  } catch (error: any) {
    console.error('Error processing request:', error.message);
    return new Response('Internal Server Error', { status: 500 });
  }
}
