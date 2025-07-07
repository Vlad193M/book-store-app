import { filter } from '@/lib/constants/icons';
import Image from 'next/image';

type FilterBtnProps = {
  onClick?: () => void;
};

export default function FilterBtn({ onClick }: FilterBtnProps) {
  return (
    <button
      onClick={onClick}
      className='z-1 rounded-[64px] flex justify-between items-center py-2 px-4 gap-1 border text-[#575757] md:hidden'
    >
      <Image src={filter} alt='filter' className='w-5 h-5' />
      <p>Filter</p>
    </button>
  );
}
