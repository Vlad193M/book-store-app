'use client';

import { cartApi } from '@/lib/api/cart';
import { useQuery } from '@tanstack/react-query';
import CartItem from './CartItem';

export default function Cart() {
  const { data } = useQuery(cartApi.getCartOptions());

  return (
    <div className='lg:flex-[0_1_718px] rounded-[10px]  border border-[#DEDFE1]'>
      <table className='w-full table-auto border-separate border-spacing-0'>
        <thead className='bg-[#a6a6a6]'>
          <tr className='bg-[#a6a6a6] text-white text-[14px] md:text-[22px] leading-[18px] md:leading-[28px]'>
            <th className=' text-left px-[26px] md:px-[44px] py-4 md:py-6'>
              Product
            </th>
            <th className='text-left px-2 md:px-4 py-4 md:py-6'>Price</th>
            <th className='text-center px-2 md:px-4 py-4 md:py-6'>Quantity</th>
            <th className='text-left px-2 md:px-4 py-4 md:py-6'>Total</th>
          </tr>
        </thead>
        <tbody className='text-black text-[16px]'>
          {!!data?.cartItems.length &&
            data.cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.bookId}
                bookId={cartItem.bookId}
                title={cartItem.book.name}
                price={cartItem.book.price}
                count={cartItem.quantity}
                src={cartItem.book.bookImages[0].imageUrl}
                isLast={false}
              />
            ))}
          {!data?.cartItems.length && (
            <tr>
              <td className='px-2 md:px-4 py-4 md:py-6 text-[#949494] text-[14px] md:text-[16px] text-center' colSpan={4}>
                Cart is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
