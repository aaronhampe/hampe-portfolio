import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Über mich", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ],
  services: [
    { name: "Website Entwicklung", href: "/services#websites" },
    { name: "Wartung & Support", href: "/services#support" },
    { name: "KI-gestützte Entwicklung", href: "/ai" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
    { name: "KI-Ethik", href: "/ai/ethics" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/aaronhampe",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/aaron-hampe-997b69203",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-12 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-8">
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-70 dark:invert-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded-lg dark:focus-visible:ring-white"
              aria-label="Zur Startseite"
            >
              <div className="relative">
                <Image
                  src="/images/hampe-logo.png"
                  alt="HAMPE"
                  width={120}
                  height={36}
                  className="h-8 w-auto dark:hidden"
                  priority
                />
                <Image
                  src="/images/hampe-logo-dark.png"
                  alt="HAMPE"
                  width={120}
                  height={36}
                  className="hidden h-8 w-auto dark:block"
                  priority
                />
              </div>
            </Link>

            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs text-sm">
              I am a digital partner focusing on fast-loading, state-of-the-art tech and beautiful web design that pushes the boundaries of standard execution.
            </p>

            <div className="flex gap-4">
               {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 focus:outline-none"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </Link>
                ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-wider text-zinc-900 dark:text-white uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 relative inline-flex pb-1 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-wider text-zinc-900 dark:text-white uppercase mb-4">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 relative inline-flex pb-1 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
             <h3 className="text-xs font-semibold tracking-wider text-zinc-900 dark:text-white uppercase mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 relative inline-flex pb-1 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-400 dark:text-zinc-600 border-t border-zinc-200 dark:border-zinc-800">
          <p>
            &copy; {currentYear} Aaron Hampe. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
