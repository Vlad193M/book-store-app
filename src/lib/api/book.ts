const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { RecommendedBooksType } from '@/types/book';
import { queryOptions } from '@tanstack/react-query';

export const bookApi = {
  getRecommendedOptions: () => {
    return queryOptions({
      queryKey: ['recommend books'],
      queryFn: (meta) => bookApi.getRecommendedBooks(meta),
    });
  },

  getRecommendedBooks: async (
    { signal }: { signal: AbortSignal },
    init?: RequestInit,
  ) => {
    const response = await fetch(`${API_BASE_URL}/api/books/recommend`, {
      ...init,
      signal,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch recommended books: ${response.status} ${response.statusText}`,
      );
    }

    const recommendedBooksData =
      (await response.json()) as RecommendedBooksType[];
    return recommendedBooksData;
  },
};
