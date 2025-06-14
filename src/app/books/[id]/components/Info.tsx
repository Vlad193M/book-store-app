import Image from 'next/image';
import Link from 'next/link';

import add from '@/../public/add.svg';
import delivery from '@/../public/delivery.svg';
import heart from '@/../public/heart.svg';
import remove from '@/../public/remove.svg';
import box from '@/../public/rotate-box.svg';
import star from '@/../public/star.svg';

interface InfoProps {
  title: string;
  price: number;
  description: string;
  reviewsLength: number;
}

export default function Info({
  title,
  price,
  description,
  reviewsLength,
}: InfoProps) {
  return (
    <div className='w-full lg:flex-[0_1_500px]'>
      <div className='flex justify-between mb-3'>
        <h1 className='text-[#2D2D2D] text-[26px] font-bold leading-none '>
          {title}
        </h1>
        <Image src={heart} alt='follow book' />
      </div>

      <div className='flex items-center'>
        <p className='text-[28px] text-[#414141] leading-[1.7]'>${price}</p>
        <div className='bg-[#000] w-[1px] h-[25px] mx-2.5' />
        <div className='flex gap-0.5'>
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
        </div>
        <p className='ml-2.5 text-[#414141] leading-[1.7] text-[14px]'>
          ( {reviewsLength} review )
        </p>
      </div>
      <div className='bg-[#DDD] h-[1px] w-full my-[30px]' />
      <div className='text-[15px] text-[#414141] leading-[1.7] mb-[42px]'>
        <p>{description}</p>
        <br />
        <ul className='list-disc pl-5'>
          <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
          <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
          <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
        </ul>
      </div>
      <div className='flex gap-4 mb-[15px]'>
        <div className='max-w-[128px] w-full grow flex px-6 py-4 items-center justify-between rounded-[104px] border border-[#D7D7D7]'>
          <button>
            <Image src={remove} alt='remove book' />
          </button>
          <span>1</span>
          <button>
            <Image src={add} alt='add book' />
          </button>
        </div>

        <button className='px-6 py-4 bg-[#282828] text-[18px] font-bold text-white text-center rounded-[104px] grow leading-none'>
          Add to Cart
        </button>
      </div>
      <button className='w-full px-6 py-4 text-[18px] font-bold text-center rounded-[104px] grow leading-none border mb-8'>
        Buy Now
      </button>

      <div className='flex flex-col gap-4'>
        <div className='flex gap-5 items-center'>
          <Image src={delivery} alt='delivery icon' />
          <p>Free worldwide shipping on all orders over $100</p>
        </div>
        <div className='flex gap-5 items-center'>
          <Image src={box} alt='delivery box icon' />
          <p>
            Delivers in: 3-7 Working Days{' '}
            <Link href='/books' className='underline'>
              Shipping & Return
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
