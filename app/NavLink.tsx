import Link from "next/link";

export default function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li className="dark:hover:bg-primary-dark px-2 py-2 rounded-[6px] inline-block w-fit">
      <Link href={href}>{children}</Link>
    </li>
  );
}
