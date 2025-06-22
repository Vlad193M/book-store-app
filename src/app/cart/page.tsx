import ListRecommendedBooksSkeleton from '@/components/ListRecommendedBooksSkeleton';
import { cartApi } from '@/lib/api/cart';
import { getQueryClient } from '@/lib/utils/get-query-client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import Cart from './components/Cart';
import CartRecommendationsBooks from './components/CartRecommendationsBooks';
import CartTotal from './components/CartTotal';

export default async function Page() {
  const cookieStore = await cookies();

  const token = cookieStore.get('token')?.value;

  let cartData: Awaited<ReturnType<typeof cartApi.getCart>> | null = null;

  const queryClient = getQueryClient();
  try {
    cartData = await queryClient.fetchQuery({
      queryKey: [cartApi.baseKey],
      queryFn: (meta) =>
        cartApi.getCart(meta, {
          cache: 'no-store',
          headers: {
            Cookie: `token=${token};`,
          },
        }),
    });
  } catch (error: any) {
    console.log(error.message, 'message');
    if (error.message === 'Failed to fetch cart: 401 Unauthorized') {
      return redirect('/login');
    }
  }

  if (!cartData) {
    return <p>No cart data</p>;
  }
  const booksId = cartData.cartItems.map((cartItem) => cartItem.bookId);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container mt-7'>
        <div className='lg:block flex justify-center'>
          <div className='inline-flex lg:flex gap-8 items-start justify-center flex-col lg:flex-row'>
            <Cart />
            <CartTotal />
          </div>
        </div>

        <section className='mt-10 md:mt-16'>
          <h2 className='text-[#3D3D3D] text-4xl font-bold leading-[45px] mb-9 text-center md:text-start'>
            {cartData.cartItems.length > 0
              ? 'You May Also Like'
              : 'You May Like'}
          </h2>
          <Suspense fallback={<ListRecommendedBooksSkeleton count={4} />}>
            <CartRecommendationsBooks bookIds={booksId} />
          </Suspense>
        </section>
      </div>
    </HydrationBoundary>
  );
}
