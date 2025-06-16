import CartTotalItem from './CartTotalItem';

export default function CartTotal({}: {}) {
  return (
    <div className='max-w-[500px] w-full rounded-[10px] overflow-hidden border border-[#DEDFE1]'>
      <p className='font-bold bg-[#a6a6a6] text-white text-[14px] md:text-[22px] leading-[18px] md:leading-[28px] px-2 md:px-4 py-4 md:py-6'>
        Cart Total
      </p>
      <CartTotalItem title='SUBTOTAL' value='$400' />
      <CartTotalItem title='DISCOUNT' value='---' />
      <CartTotalItem title='TOTAL' value='$400' />
      <button className='bg-black text-white font-medium text-[14px] md:text-[16px] leading-[1.3] px-2 md:px-4 py-4 md:py-6 text-center w-full'>
        Proceed To Checkout
      </button>
    </div>
  );
}
