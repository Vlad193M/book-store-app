import Cart from './components/Cart';
import CartRecommendationsBooks from './components/CartRecommendationsBooks';
import CartTotal from './components/CartTotal';

export default function Page() {
  return (
    <div className='container mt-7'>
      <div className='lg:block flex justify-center'>
        <div className='inline-flex lg:flex gap-8 items-start justify-center flex-col lg:flex-row'>
          <Cart />
          <CartTotal />
        </div>
      </div>

      <section className='mt-10 md:mt-16'>
        <h2 className='text-[#3D3D3D] text-4xl font-bold leading-[45px] mb-9 text-center md:text-start'>
          You May Like
        </h2>
        <CartRecommendationsBooks />
      </section>
    </div>
  );
}
