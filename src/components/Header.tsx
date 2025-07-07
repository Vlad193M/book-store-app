'use client';

import { useCloseOnRouteChange } from '@/hooks/useCloseOnRouteChange';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { cartApi } from '@/lib/api/cart';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Burger from './Burger';
import Menu from './Menu';
import NavItem from './NavItem';

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/books', name: 'Books' },
  { href: '/contact', name: 'Contact Us' },
  { href: '/blog', name: 'blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data } = useQuery(cartApi.getCartOptions());
  const node = useRef<HTMLDivElement | null>(null);

  useLockBodyScroll(open);
  useOnClickOutside(node, () => setOpen(false));
  useCloseOnRouteChange(() => setOpen(false));

  const count =
    data?.cartItems.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

  return (
    <header className='container flex z-1 justify-between gap-8 py-10 mx-auto w-full'>
      <Link href='/' className='relative w-14 h-6 sm:w-16 sm:h-7'>
        <Image
          src='/header_icon/logo.svg'
          alt='Company Logo'
          fill
          className='object-contain'
          sizes='(max-width: 640px) 56px, 64px'
        />
      </Link>
      <nav className='hidden md:block'>
        <ul className='flex gap-10'>
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              name={item.name}
              className='text-gray-700 hover:text-gray-950'
            />
          ))}
        </ul>
      </nav>
      <div className='hidden md:flex gap-7 items-center'>
        <Link href='/login' className='flex items-center gap-2.5'>
          <Image
            width={24}
            height={24}
            src='/header_icon/profile.svg'
            alt='User Profile'
          />
          <Image
            width={10}
            height={6}
            src='/header_icon/arrow.svg'
            alt='Dropdown Arrow'
          />
        </Link>
        <Link
          href='/cart'
          className='relative w-6 h-6 flex items-center justify-center'
        >
          {count > 0 && (
            <span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md'>
              {count}
            </span>
          )}
          <Image
            width={24}
            height={24}
            src='/header_icon/cart.svg'
            alt='cart'
          />
        </Link>
      </div>
      <div ref={node} className='md:hidden'>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className='fixed inset-0 bg-black/10 backdrop-blur-xs z-2'
          />
        )}
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </header>
  );
}
