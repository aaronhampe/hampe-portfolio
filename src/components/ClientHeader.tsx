"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
  loading: () => (
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse"></div>
  ),
});

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/projects" },
  { name: "Leistungen", href: "/services" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isTransparentHome = pathname === "/" && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ${
          isScrolled ? "translate-y-0" : "translate-y-2"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-4 w-full max-w-5xl mx-auto rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-zinc-200/50 dark:border-zinc-800/50"
              : "bg-transparent border border-transparent"
          }`}
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-70 dark:focus-visible:ring-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded-lg"
            aria-label="Zur Startseite"
          >
            <div className="relative">
              <Image
                src="/images/hampe-logo.png"
                alt="HAMPE"
                width={100}
                height={30}
                className={`h-6 w-auto ${isTransparentHome ? "block" : "dark:hidden"}`}
                priority
              />
              <Image
                src="/images/hampe-logo-dark.png"
                alt="HAMPE"
                width={100}
                height={30}
                className={`h-6 w-auto ${isTransparentHome ? "hidden" : "hidden dark:block"}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
              
              const activeClass = isTransparentHome 
                 ? "text-zinc-950 bg-white/50 backdrop-blur-md" 
                 : "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800/80";
              const inactiveClass = isTransparentHome
                 ? "text-zinc-800 hover:text-zinc-950 hover:bg-white/30 backdrop-blur-sm"
                 : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 ${
                    isActive ? activeClass : inactiveClass
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right actions: Theme + Contact + Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher variant="button" isTransparentHome={isTransparentHome} />

            <Link
              href="/contact"
              className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 hover:scale-[1.02] active:scale-95 ${
                isTransparentHome 
                  ? "bg-zinc-950 text-white hover:bg-zinc-800"
                  : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              }`}
            >
              Kontakt
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Menü öffnen"
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors focus:outline-none ${
                isTransparentHome
                  ? "bg-white/50 backdrop-blur-md hover:bg-white/70"
                  : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              <div className="w-4 h-3.5 flex flex-col justify-between">
                <span
                  className={`w-full h-[2px] rounded-full transition-all duration-300 origin-left ${
                    isTransparentHome ? "bg-zinc-900" : "bg-zinc-900 dark:bg-zinc-100"
                  } ${
                    isMobileMenuOpen ? "rotate-45 w-[16px] translate-y-[-1px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[2px] rounded-full transition-all duration-300 ${
                    isTransparentHome ? "bg-zinc-900" : "bg-zinc-900 dark:bg-zinc-100"
                  } ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-[2px] rounded-full transition-all duration-300 origin-left ${
                    isTransparentHome ? "bg-zinc-900" : "bg-zinc-900 dark:bg-zinc-100"
                  } ${
                    isMobileMenuOpen ? "-rotate-45 w-[16px] translate-y-[2px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white dark:bg-zinc-950 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-12">
          <nav className="flex-1 space-y-4">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div
                  key={item.name}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-4xl font-light tracking-tight transition-colors ${
                      isActive ? "text-zinc-900 dark:text-white font-medium" : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    }`}
                    style={{
                      transform: isMobileMenuOpen ? "translateY(0)" : "translateY(100%)",
                      opacity: isMobileMenuOpen ? 1 : 0,
                      transition: `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, opacity 0.6s ease ${index * 0.1}s, color 0.3s ease`,
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          
          <div 
             className="w-full"
             style={{
               transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
               opacity: isMobileMenuOpen ? 1 : 0,
               transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s`,
             }}
          >
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center items-center w-full py-5 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-lg font-medium tracking-wide active:scale-95 transition-transform"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}