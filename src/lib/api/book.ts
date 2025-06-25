const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { BooksType, RecommendedBooksType } from '@/types/book';
import { queryOptions } from '@tanstack/react-query';

type GetBooksParams = {
  signal?: AbortSignal;
  searchURL?: string;
  init?: RequestInit;
};

type GetRecommendedBooksParams = {
  signal?: AbortSignal;
  init?: RequestInit;
};

export const bookApi = {
  getBooksOptions: () => {
    return queryOptions({
      queryKey: ['books'],
      queryFn: (meta) => bookApi.getBooks(meta),
    });
  },

  getBooks: async (params: GetBooksParams = {}) => {
    const { signal, searchURL, init } = params;
    
    const response = await fetch(
      `${API_BASE_URL}/api/books${searchURL ? `?${searchURL}` : ''}`,
      {
        ...init,
        signal,
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch books: ${response.status} ${response.statusText}`,
      );
    }

    const booksData = (await response.json()) as BooksType[];
    return booksData;
  },

  getRecommendedBooksOptions: () => {
    return queryOptions({
      queryKey: ['recommend books'],
      queryFn: (meta) => bookApi.getRecommendedBooks(meta),
    });
  },

  getRecommendedBooks: async (
    params: GetRecommendedBooksParams = {},
  ) => {
    const { signal, init } = params;

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
