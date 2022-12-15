export default function NavSubMenu({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li>
      <p>{title}</p>
      <ul className={`${className} pl-5 flex flex-col gap-5`}>{children}</ul>
    </li>
  );
}
