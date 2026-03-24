import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stock Watchlist",
  description: "TypeScript learning project — Stock Watchlist App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
