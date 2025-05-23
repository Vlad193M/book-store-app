import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", name: "Home" },
  { href: "/books", name: "Books" },
  { href: "/contact", name: "Contact Us" },
  { href: "/blog", name: "blog" },
];

export default function Header() {
  return (
    <header className="flex justify-between gap-8 py-10 mx-auto w-full">
      <div className="relative w-14 h-6 sm:w-16 sm:h-7">
        <Image
          src="/header_icon/logo.svg"
          alt="Company Logo"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 56px, 64px"
        />
      </div>
      <nav>
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.href} name={item.name} />
          ))}
        </ul>
      </nav>
      <div className="flex gap-7 items-center">
        <div className="flex items-center gap-2.5">
          <Image
            width={24}
            height={24}
            src="/header_icon/profile.svg"
            alt="User Profile"
          />
          <Image
            width={10}
            height={6}
            src="/header_icon/arrow.svg"
            alt="Dropdown Arrow"
          />
        </div>
        <div>
          <Image
            width={24}
            height={24}
            src="/header_icon/cart.svg"
            alt="cart"
          />
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, name }: { href: string; name: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-700 hover:text-gray-950">
        {name}
      </Link>
    </li>
  );
}
