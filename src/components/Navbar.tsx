"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <div className={`relative h-10 w-10 rounded-xl overflow-hidden shadow-sm ${scrolled ? 'ring-1 ring-gray-200' : 'ring-1 ring-white/30'}`}>
            <Image
              src="/kutumba-tree-logo.jpg"
              alt="Kutumba Tree Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <span className={scrolled ? "text-[#64303A]" : "text-amber-200"}>Kutumba</span> Tree
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <div className={`flex items-center gap-6 text-sm font-medium ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <Link className="hover:text-[#64303A] hover:bg-white/50 px-3 py-2 rounded-lg transition-all" href="#features">Features</Link>
            <Link className="hover:text-[#64303A] hover:bg-white/50 px-3 py-2 rounded-lg transition-all" href="#pricing">Pricing</Link>
            <Link className="hover:text-[#64303A] hover:bg-white/50 px-3 py-2 rounded-lg transition-all" href="#about">About</Link>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-[#64303A]' : 'text-white hover:text-amber-200'}`}
                    href="/admin"
                  >
                    Admin
                  </Link>
                )}
                <Link
                  className="rounded-full bg-[#64303A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#64303A]/20 transition-all hover:bg-[#50262e] hover:shadow-xl hover:-translate-y-0.5"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-[#64303A]' : 'text-white hover:text-amber-200'}`}
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 ${scrolled
                    ? "bg-[#64303A] text-white shadow-[#64303A]/20 hover:bg-[#50262e]"
                    : "bg-white text-[#64303A] shadow-black/10 hover:bg-amber-50"
                    }`}
                  href="/register"
                >
                  Start Free
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-xl md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="#pricing" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#about" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>About</Link>
            <hr className="border-gray-100" />

            {user ? (
              <div className="flex flex-col gap-3">
                <Link
                  href="/dashboard"
                  className="w-full text-center rounded-xl bg-[#64303A] py-3 text-white font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Go to Dashboard
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="w-full text-center rounded-xl border border-gray-200 py-3 text-gray-700 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="w-full text-center rounded-xl bg-[#64303A] py-3 text-white font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Start Free
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}