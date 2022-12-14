import Link from "next/link";

export default function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
