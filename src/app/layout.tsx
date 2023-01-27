import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-backfill-dark dark:text-text-color-dark">{children}</body>
    </html>
  );
}
