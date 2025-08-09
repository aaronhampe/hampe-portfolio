"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import um SSR issues zu vermeiden
const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse"></div>
  ),
});

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projekte", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Über mich", href: "/about" },
  { name: "Kontakt", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-900/5 dark:shadow-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src="/images/hampe-logo.png"
                  alt="HAMPE Webentwicklung"
                  width={120}
                  height={40}
                  className="h-8 w-auto group-hover:scale-105 transition-all duration-300"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 blur-lg transition-all duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-50"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button & Theme Switcher */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeSwitcher variant="button" />
              <Link
                href="/contact"
                className="group relative px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25 dark:hover:shadow-white/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Projekt starten</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
              aria-label="Menu öffnen"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="p-6 space-y-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen
                      ? "slideInUp 0.4s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-200/50">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  animationDelay: `${navigation.length * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInUp 0.4s ease-out forwards"
                    : "none",
                }}
              >
                Projekt starten
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
