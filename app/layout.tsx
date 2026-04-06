import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirubel Menberu Portfolio",
  description: "Portfolio of Kirubel Menberu, a passionate full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
