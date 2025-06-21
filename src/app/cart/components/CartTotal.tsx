'use client';

import { cartApi } from '@/lib/api/cart';
import { useQuery } from '@tanstack/react-query';
import CartTotalItem from './CartTotalItem';

export default function CartTotal({}: {}) {
  const { data } = useQuery(cartApi.getCartOptions());

  const cartTotal =
    data?.cartItems
      .reduce((acc, item) => acc + item.quantity * item.book.price, 0)
      .toFixed(2) ?? 0;

  return (
    <div className='w-full lg:flex-[0_1_500px] lg:self-start rounded-[10px] overflow-hidden border border-[#DEDFE1]'>
      <p className='font-bold bg-[#a6a6a6] text-white text-[14px] md:text-[22px] leading-[18px] md:leading-[28px] px-2 md:px-4 py-4 md:py-6'>
        Cart Total
      </p>
      <CartTotalItem title='SUBTOTAL' value={`$${cartTotal}`} />
      <CartTotalItem title='DISCOUNT' value='---' />
      <CartTotalItem title='TOTAL' value={`$${cartTotal}`} />
      <button className='bg-black text-white font-medium text-[14px] md:text-[16px] leading-[1.3] px-2 md:px-4 py-4 md:py-6 text-center w-full'>
        Proceed To Checkout
      </button>
    </div>
  );
}
