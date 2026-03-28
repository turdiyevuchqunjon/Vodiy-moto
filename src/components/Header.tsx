"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/moto/sport", label: "Sport" },
  { href: "/moto/cargo", label: "Yuk" },
  { href: "/moto/electric", label: "Elektron" },
  { href: "/moto/mini-car", label: "Mini mashina" },
  { href: "/moto/kids", label: "Bolalar motolari" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-lg font-black text-white shadow-lg shadow-red-500/25">
            VM
          </div>
          <div>
            <p className="text-lg font-bold tracking-wide text-white">VodiyMoto</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Moto showroom</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#aloqa"
          className="hidden items-center justify-center rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500 sm:inline-flex"
        >
          Lead qoldirish
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 lg:hidden"
          aria-label="Menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="#aloqa"
            onClick={() => setOpen(false)}
            className="mt-3 flex h-11 items-center justify-center rounded-2xl bg-red-600 text-sm font-semibold text-white"
          >
            Lead qoldirish
          </a>
        </div>
      )}
    </header>
  );
}
