import Nav from "./Nav";
import "./globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full flex">
        <Nav />
        {children}
      </body>
    </html>
  );
}
