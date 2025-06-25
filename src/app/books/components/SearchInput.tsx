'use client';

import { useBookSearch } from '@/hooks/useBookSearch';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import SearchResults from './SearchResults';

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const { books, setBooks } = useBookSearch(searchTerm);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!books || books.length === 0) return;

    router.push(`/books?search=${searchTerm}`);
    inputRef.current?.blur();
    setBooks(null);
    setSearchTerm('');
  }

  function handleBlur(e: React.FocusEvent<HTMLFormElement>) {
    const nextFocused = e.relatedTarget as HTMLElement | null;

    if (!e.currentTarget.contains(nextFocused)) {
      setBooks(null);
      setSearchTerm('');
    }
  }

  return (
    <form
      className='flex flex-col'
      onSubmit={handleSearch}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <div className='flex text-[#5F5F5F] gap-2 p-2 pl-5 mb-2 border rounded-[42px] focus-within:ring'>
        <input
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='grow focus:outline-none'
          placeholder='Search a Book'
          type='text'
        />
        <button className='rounded-full bg-[#666] p-[11px]' type='submit'>
          <Image src='/search.svg' alt='search' width={18} height={18} />
        </button>
      </div>

      {books && (
        <div className='relative z-10'>
          <div className='bg-white p-4 rounded-lg shadow-md absolute w-full'>
            <h2 className='text-lg font-semibold mb-2'>Search Results:</h2>
            <SearchResults books={books} />
          </div>
        </div>
      )}
    </form>
  );
}
