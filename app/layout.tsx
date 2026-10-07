import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Vehicle Dashboard",
  description: "Customer vehicle health and service dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
