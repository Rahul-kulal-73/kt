"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-kutumba-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-kutumba">
            <Image
              src="/kutumba-tree-logo.jpg"
              alt="Kutumba Tree Logo"
              width={36}
              height={36}
              priority
            />
          </div>
          <h1 className="text-lg font-extrabold text-kutumba-dark-text">
            <span className="text-kutumba-maroon">Kutumba</span> Tree
          </h1>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold text-kutumba-dark-text md:flex">
          <Link className="hover:text-kutumba-maroon" href="#features">
            Features
          </Link>
          <Link className="hover:text-kutumba-maroon" href="#pricing">
            Pricing
          </Link>
          <Link className="hover:text-kutumba-maroon" href="#about">
            About
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link className="text-sm font-semibold text-kutumba-dark-text hover:text-kutumba-maroon" href="/login">
            Login
          </Link>
          <Link
            className="rounded-md bg-kutumba-maroon px-4 py-2 text-sm font-semibold text-white shadow-kutumba hover:bg-kutumba-maroon/90"
            href="/register"
          >
            Start Free
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-kutumba-border p-2 text-kutumba-dark-text md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-kutumba-dark-text"></span>
            <span className="block h-0.5 w-5 bg-kutumba-dark-text"></span>
            <span className="block h-0.5 w-5 bg-kutumba-dark-text"></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-kutumba-border bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-sm font-semibold">
            <Link className="text-kutumba-dark-text hover:text-kutumba-maroon" href="#features">
              Features
            </Link>
            <Link className="text-kutumba-dark-text hover:text-kutumba-maroon" href="#pricing">
              Pricing
            </Link>
            <Link className="text-kutumba-dark-text hover:text-kutumba-maroon" href="#about">
              About
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <Link className="text-kutumba-dark-text hover:text-kutumba-maroon" href="/login">
                Login
              </Link>
              <Link
                className="rounded-md bg-kutumba-maroon px-4 py-2 text-sm font-semibold text-white shadow-kutumba hover:bg-kutumba-maroon/90"
                href="/register"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}