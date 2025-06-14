'use client';

import Image from 'next/image';
import { useState } from 'react';

interface InputsProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  id,
  name,
  type,
  label,
  placeholder,
  className = '',
}: InputsProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <label className='leading-none text-[#3D3D3D]' htmlFor={id}>
        {label}
      </label>
      {type === 'password' ? (
        <div className='flex items-center gap-2 text-[#949494] px-3.5 py-[10px] border rounded-[150px] leading-none focus-within:ring'>
          <input
            className='grow focus:outline-none'
            id={id}
            name={name}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder={placeholder}
            required
          />
          <button
            type='button'
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            onClick={togglePasswordVisibility}
          >
            <Image
              src='/eye.svg'
              alt={isPasswordVisible ? 'Hide password' : 'Show password'}
              width={30}
              height={30}
            />
          </button>
        </div>
      ) : (
        <input
          className='text-[#949494] focus:outline-none py-[15px] px-3.5 border rounded-[150px] leading-none focus:ring'
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
}
