import Image from 'next/image';

import Sidebar from '@/app/components/Sidebar';
import Card from '@/components/Card';
import { db } from '@/lib/db';

export default async function Home() {
  const books = await db.book.findMany({ include: { bookImages: true } });
  const categories = await db.category.findMany();

  console.log(categories);
  return (
    <div className='container flex gap-8'>
      <Sidebar categories={categories} />
      <main className='grow'>
        <h1 className='font-bold text-4xl/tight mb-8'>
          Our Collection Of Products
        </h1>

        <div className='flex text-[#5F5F5F] gap-2 p-2 pl-5 mb-8 border rounded-[42px] focus-within:ring'>
          <input
            className='grow focus:outline-none'
            placeholder='Search An Book'
            type='text'
          />
          <button className='rounded-full bg-[#666] p-[11px]'>
            <Image src='/search.svg' alt='search' width={18} height={18} />
          </button>
        </div>

        <h2 className='font-bold leading-[1.7]'>Showing 1–12 of 24 item(s)</h2>
        <p className='leading-[1.7] text-[#949494] mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex flex-wrap gap-x-8 gap-y-16 justify-center'>
          {books.map((book) => (
            <Card
              key={book.id}
              id={book.id}
              price={book.price}
              title={book.name}
              src={
                book.bookImages.find((img) => img.isPrimary)?.imageUrl ?? ''
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
