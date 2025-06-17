import ListRecommendedBooksSkeleton from '@/components/ListRecommendedBooksSkeleton';
import { Suspense } from 'react';
import Cart from './components/Cart';
import CartRecommendationsBooks from './components/CartRecommendationsBooks';
import CartTotal from './components/CartTotal';

export default function Page() {
  return (
    <div className='container mt-7'>
      <div className='flex gap-8 items-center lg:items-start justify-center flex-col lg:flex-row'>
        <Cart />
        <CartTotal />
      </div>
      
      <section className='mt-10 md:mt-16'>
        <h2 className='text-[#3D3D3D] text-4xl font-bold leading-[45px] mb-9 text-center md:text-start'>
          You May Also Like
        </h2>
        <Suspense fallback={<ListRecommendedBooksSkeleton count={4} />}>
          <CartRecommendationsBooks
            bookIds={[
              'cmc0dbpu10019bzl4tvukigxr',
              'cmc0dbpu2001pbzl4g8vr7iby',
              'cmc0dbpu3001zbzl479djrbvg',
            ]}
          />
        </Suspense>
      </section>
    </div>
  );
}
