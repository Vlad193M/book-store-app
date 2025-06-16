import Image, { StaticImageData } from 'next/image';

import { addButton, diagonalArrow, removeButton } from '@/lib/constants/icons';

interface CartItemRowProps {
  title: string;
  price: number;
  count: number;
  src: StaticImageData;
  isLast: boolean;
}

export default function CartItemRow({
  title,
  price,
  count,
  src,
  isLast,
}: CartItemRowProps) {
  const tdBorderClass = isLast ? 'border-b-0' : 'border-b border-[#DEDFE1]';

  return (
    <tr>
      <td className={`${tdBorderClass} px-2 md:px-4 py-0`}>
        <div className='flex items-center gap-2 md:gap-[16px]'>
          <button className='shrink-0 w-[10px] h-[10px] md:w-[12px] md:h-[12px] relative'>
            <Image
              src={diagonalArrow}
              alt='Diagonal Arrow'
              className='object-cover'
              fill
            />
          </button>
          <div className='shrink-0 relative w-[30px] h-[42px] md:w-[40px] md:h-[58px] bg-[#d9d9d9] rounded-[5px] overflow-hidden'>
            <Image src={src} alt='Book image' fill className='object-cover' />
          </div>
          <p className='text-[14px] md:text-[16px] text-[#3d3d3d] leading-[20px]'>
            {title}
          </p>
        </div>
      </td>

      <td
        className={`${tdBorderClass} px-2 md:px-4 py-4 md:py-6 text-[#949494] text-[14px] md:text-[16px]`}
      >
        ${price}
      </td>

      <td className={`${tdBorderClass} px-2 md:px-4 py-4 md:py-6`}>
        <div className='mx-auto w-[90px] md:w-[108px] flex px-2 py-1 md:px-4 md:py-3 items-center justify-between rounded-[104px] border border-[#D7D7D7]'>
          <button>
            <Image src={removeButton} alt='remove book' />
          </button>
          <span className='text-[#414141] font-bold text-[14px] md:text-[16px]'>{count}</span>
          <button>
            <Image src={addButton} alt='add book' />
          </button>
        </div>
      </td>

      <td
        className={`${tdBorderClass} px-2 md:px-4 py-4 md:py-6 text-[#949494] text-[14px] md:text-[16px]`}
      >
        ${Number((price * count).toFixed(2))}
      </td>
    </tr>
  );
}
