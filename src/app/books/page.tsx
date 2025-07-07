import { fetchCategories } from '@/lib/db/categories/fetchCategories';
import { getQueryClient } from '@/lib/utils/getQueryClient';
import { parseSearchParams } from '@/lib/utils/parseSearchParams';
import { prefetchBooks } from '@/lib/utils/prefetchBooks';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import BookList from './components/BookList';
import SearchInput from './components/SearchInput';
import SeeMoreBtn from './components/SeeMoreBtn';
import Sidebar from './components/Sidebar';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const query = parseSearchParams(params);

  const queryClient = getQueryClient();
  await prefetchBooks(queryClient, query);

  const categories = await fetchCategories();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container flex gap-8'>
        <Sidebar categories={categories} />
        <main className='grow'>
          <h1 className='font-bold text-2xl lg:text-4xl/tight mb-2 lg:mb-8'>
            Our Collection Of Products
          </h1>
          <SearchInput />
          <h2 className='font-bold leading-[1.7]'>
            Showing 1–12 of 24 item(s)
          </h2>
          <p className='leading-[1.7] text-[#949494] mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <BookList />
          <SeeMoreBtn />
        </main>
      </div>
    </HydrationBoundary>
  );
}
