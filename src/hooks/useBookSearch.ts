import useDebounce from '@/hooks/useDebounce';
import { bookApi } from '@/lib/api/book';
import { BooksType } from '@/types/book';
import { useEffect, useState } from 'react';

export function useBookSearch(searchTerm: string) {
  const [books, setBooks] = useState<BooksType[] | null>(null);
  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedValue.trim() === '') return;

    const fetchBooks = async () => {
      try {
        const searchURL = new URLSearchParams();
        searchURL.set('search', debouncedValue);
        const data = await bookApi.getBooks({
          searchURL: searchURL.toString(),
        });
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [debouncedValue]);

  return { books, setBooks };
}
