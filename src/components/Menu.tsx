'use client';

import NavItem from './NavItem';

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/login', name: 'Login' },
  { href: '/cart', name: 'Cart' },
  { href: '/books', name: 'Books' },
  { href: '/contact', name: 'Contact Us' },
  { href: '/blog', name: 'blog' },
];

export default function Menu({ open }: { open: boolean }) {
  return (
    <nav
      className={`fixed z-2 bg-black/85 backdrop-blur-md top-0 right-0 h-screen p-4 transition-all duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} w-[60%]`}
    >
      <ul className='flex flex-col grow gap-2.5 items-center mt-[108px]'>
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            name={item.name}
            className='text-2xl sm:text-3xl text-[#EFFFFA] hover:text-[#d5e2de] uppercase'
          />
        ))}
      </ul>
    </nav>
  );
}
