import { ChangeEvent, useState } from 'react';

const handleChange =
  (setter: (val: number | undefined) => void) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === '') {
      setter(undefined);
      return;
    }

    if (!/^\d+$/.test(val)) {
      return;
    }

    const num = parseInt(val, 10);
    if (num > 0) {
      setter(num);
    }
  };

interface PriceFilterProps {
  initMinPrice: number | undefined;
  initMaxPrice: number | undefined;
}

export default function PriceFilter({
  initMinPrice,
  initMaxPrice,
}: PriceFilterProps) {
  const [minPrice, setMinPrice] = useState<number | undefined>(initMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(initMaxPrice);

  return (
    <div className=''>
      <h3 className='mb-2 leading-tight text-[18px]'>Price</h3>
      <div className='flex gap-2'>
        <input
          name='minPrice'
          type='number'
          min={1}
          className='w-[50%] border rounded-2xl py-1 px-4 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          placeholder='min'
          value={minPrice ?? ''}
          onChange={handleChange(setMinPrice)}
        />

        <input
          name='maxPrice'
          type='number'
          min={1}
          className='w-[50%] border rounded-2xl py-1 px-4 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          placeholder='max'
          value={maxPrice ?? ''}
          onChange={handleChange(setMaxPrice)}
        />
        <button
          disabled={!minPrice && !maxPrice}
          className='mx-auto bg-black rounded-2xl text-white py-1 px-3 disabled:opacity-60 disabled:cursor-not-allowed'
        >
          OK
        </button>
      </div>
    </div>
  );
}
