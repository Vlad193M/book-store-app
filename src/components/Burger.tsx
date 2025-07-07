import { Dispatch, SetStateAction } from 'react';

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ open, setOpen }: BurgerProps) {
  return (
    <button
      className='absolute top-[40px] right-[16px] flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none'
      onClick={() => setOpen(!open)}
    >
      <div
        className={`
          w-8 h-1 rounded-[10px] transition-all duration-300 ease-linear relative origin-[1px]
          ${open ? 'rotate-45 bg-[#EFFFFA]' : 'rotate-0 bg-[#0D0C1D]'}
        `}
      />
      <div
        className={`
          w-8 h-1 rounded-[10px] transition-all duration-300 ease-linear relative origin-[1px]
          ${open ? 'opacity-0 bg-[#EFFFFA]' : 'opacity-100 translate-x-0 bg-[#0D0C1D]'}
        `}
      />
      <div
        className={`
          w-8 h-1 rounded-[10px] transition-all duration-300 ease-linear relative origin-[1px]
          ${open ? '-rotate-45 bg-[#EFFFFA]' : 'rotate-0 bg-[#0D0C1D]'}
        `}
      />
    </button>
  );
}
