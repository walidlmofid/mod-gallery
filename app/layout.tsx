// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Search, Gamepad2 } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Mod Gallery",
  description: "Industrial-style dark mod gallery for trucks, maps, software, and more.",
};

const categories = [
  { name: "Trucks", href: "/category/trucks" },
  { name: "Maps", href: "/category/maps" },
  { name: "Software", href: "/category/software" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-wide text-white"
            >
              <Gamepad2 className="h-5 w-5 text-cyan-400" />
              <span>Game Mod Gallery</span>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            <div className="ml-auto flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 shadow-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search mods..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 outline-none"
              />
            </div>
          </div>

          <nav className="border-t border-slate-800 px-4 py-2 md:hidden">
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
