// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Search, Gamepad2 } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Mod Gallery",
  description: "Industrial-style dark mod gallery for trucks, maps, software, and more.",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/category" },
  { name: "Trending", href: "/trending" },
  { name: "Blog", href: "/blog" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-dark text-slate-100 antialiased font-exo">

        <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 sm:px-6 lg:px-8">

            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-wide text-white"
            >
              <Gamepad2 className="h-6 w-6 text-brand-teal" />
              <div className="flex flex-col leading-none">
                <span className="text-white">ModGallery</span>
                <span className="text-[10px] font-medium text-brand-teal/70 tracking-widest uppercase">
                  Unlock Premium Mods
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search */}
            <div className="ml-auto hidden w-full max-w-xs items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-3 py-2 md:flex">
              <Search className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                type="text"
                placeholder="Search mods..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-600 outline-none"
              />
            </div>

            {/* Auth buttons */}
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/login"
                className="hidden rounded-xl border border-brand-border px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand-teal/40 hover:text-brand-teal sm:block"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-xl bg-brand-teal px-4 py-2 text-sm font-bold text-brand-dark transition hover:brightness-110"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile search + nav */}
          <div className="border-t border-brand-border px-4 py-2 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <div className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-3 py-2">
                <Search className="h-4 w-4 shrink-0 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search mods..."
                  className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-600 outline-none"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="whitespace-nowrap rounded-lg bg-brand-card px-3 py-1.5 text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="mt-16 border-t border-brand-border">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Gamepad2 className="h-4 w-4 text-brand-teal" />
                ModGallery
              </div>
              <p className="text-xs text-slate-600">
                © 2026 ModGallery. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
