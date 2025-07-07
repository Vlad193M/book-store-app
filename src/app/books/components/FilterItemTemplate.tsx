import Image from 'next/image';
import { useState } from 'react';

interface FilterItemTemplateProps {
  title: string;
  name: string;
  list: string[];
  initSelectedList: string[];
}

export default function FilterItemTemplate({
  title,
  name,
  list,
  initSelectedList,
}: FilterItemTemplateProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button
        type='button'
        className='flex justify-between w-full'
        onClick={() => setIsShow((prev) => !prev)}
        aria-expanded={isShow}
        aria-controls={`${name}-list`}
      >
        <h3 className='mb-2 leading-tight text-[18px] text-left'>{title}</h3>
        <Image
          src='/arrow-down.svg'
          alt={isShow ? `Collapse ${name} formats` : `Expand ${name} formats`}
          width={20}
          height={20}
        />
      </button>
      <ul className={isShow ? 'block' : 'hidden'}>
        {list.map((item) => (
          <CheckboxItem
            key={item}
            name={name}
            item={item}
            initiallyChecked={initSelectedList?.includes(item) ?? false}
          />
        ))}
      </ul>
    </div>
  );
}

function CheckboxItem({
  name,
  item,
  initiallyChecked,
}: {
  name: string;
  item: string;
  initiallyChecked: boolean;
}) {
  const [checked, setChecked] = useState(initiallyChecked);

  const onChange = () => setChecked((prev) => !prev);

  return (
    <li className='flex gap-2'>
      <input
        type='checkbox'
        name={name}
        value={item}
        id={item}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={item}>{item}</label>
    </li>
  );
}
