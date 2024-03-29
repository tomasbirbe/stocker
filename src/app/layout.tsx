import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-backfill-dark-500 dark:text-color-dark-base">
        {children}

        <div id="modal" />
      </body>
    </html>
  );
}
