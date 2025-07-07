import Link from 'next/link';

export default function NavItem({
  href,
  name,
  className,
}: {
  href: string;
  name: string;
  className: string;
}) {
  return (
    <li>
      <Link href={href} className={className}>
        {name}
      </Link>
    </li>
  );
}
