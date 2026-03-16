import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Nur",
  description: "A gentle place to read Quran and grow in deen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Quran", href: "/Quran" },
    { label: "Deen", href: "/Deen" },
    { label: "Explore", href: "/Explore" },
    { label: "Ask Nur", href: "/Ask-Nur" },
    { label: "My Nur", href: "/My-Nur" },
  ];

  return (
    <html lang="en">
      <body className="bg-[#f7f2e8] text-[#2f3a2f] antialiased">
        <main className="pb-24">{children}</main>

        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e3d8c8] bg-[#fffaf2]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-around px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-[#5e6558] transition hover:text-[#4f7a5a] md:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </body>
    </html>
  );
}