import Layout from "./components/Layout";
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
        <Layout className="bg-red-500 w-[200px]" />
        {children}
      </body>
    </html>
  );
}
