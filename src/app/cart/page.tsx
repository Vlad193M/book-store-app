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
              'cmbxra5v4000pbzasugo6tar9',
              'cmbxra5v4000rbzasvkbyu6rm',
              'cmbxra5v50019bzasdd8fshmk',
            ]}
          />
        </Suspense>
      </section>
    </div>
  );
}
