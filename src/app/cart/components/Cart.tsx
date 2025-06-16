import book from '@/../public/books/book_1.jpg';
import CartItem from './CartItem';

export default function Cart() {
  return (
      <div className='max-w-[718px] w-full rounded-[10px] overflow-hidden border border-[#DEDFE1]'>
        <table className='w-full table-auto border-separate border-spacing-0'>
          <thead className='bg-[#a6a6a6]'>
            <tr className='bg-[#a6a6a6] text-white text-[14px] md:text-[22px] leading-[18px] md:leading-[28px]'>
              <th className=' text-left px-[26px] md:px-[44px] py-4 md:py-6'>
                Product
              </th>
              <th className='text-left px-2 md:px-4 py-4 md:py-6'>Price</th>
              <th className='text-center px-2 md:px-4 py-4 md:py-6'>
                Quantity
              </th>
              <th className='text-left px-2 md:px-4 py-4 md:py-6'>Total</th>
            </tr>
          </thead>
          <tbody className='text-black text-[16px]'>
            <CartItem
              title='Book Title 1'
              price={180}
              count={1}
              src={book}
              isLast={false}
            />
            <CartItem
              title='Book Title 2'
              price={900}
              count={5}
              src={book}
              isLast={false}
            />
            <CartItem
              title='Game of Thrones'
              price={540}
              count={3}
              src={book}
              isLast={false}
            />
            <CartItem
              title='Martin Iden'
              price={360}
              count={2}
              src={book}
              isLast={true}
            />
          </tbody>
        </table>
      </div>
  );
}
