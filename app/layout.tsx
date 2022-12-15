"use client";
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
    <html className="dark dark:text-light" lang="en">
      <body className="w-full flex relative dark:bg-dark">
        <Nav />
        {children}
      </body>
    </html>
  );
}
