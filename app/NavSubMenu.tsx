export default function NavSubMenu({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <p>{title}</p>
      <ul className="pl-5">{children}</ul>
    </li>
  );
}
