import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    //{ name: "Projekte", href: "/projects" },
    //{ name: "Services", href: "/services" },
     { name: "Blog", href: "/blog" },
    { name: "Über mich", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ],
  services: [
    { name: "Website Entwicklung", href: "/services#websites" },
    //{ name: "E-Commerce Lösungen", href: "/services#webshops" },
    //{ name: "Custom Software", href: "/services#software" },
    { name: "Wartung & Support", href: "/services#support" },
    { name: "KI-gestützte Entwicklung", href: "/ai" },
    { name: "KI-Ethik", href: "/ai/ethics" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/aaronhampe",
      icon: (
        <svg
          className="w-6 h-6"
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
    /*{
      name: "LinkedIn",
      href: "https://linkedin.com/in/aaronhampe",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Xing",
      href: "https://xing.com/profile/aaron_hampe",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.542 4.919 8.695 4.919 8.695.186.335.36.688.927.688h3.454c.543 0 .758-.336.609-.585 0 0-4.896-8.582-4.896-8.582s7.565-13.384 7.565-13.384c.151-.249-.061-.549-.609-.549h-3.44zm-8.212 7.921c-.543 0-.758.336-.609.585 0 0 2.146 3.764 2.146 3.764s-3.314 5.874-3.314 5.874c-.151.249.061.549.609.549h3.454c.517 0 .741-.325.927-.66 0 0 3.253-5.983 3.253-5.983-.284-.542-2.146-3.764-2.146-3.764-.186-.335-.36-.365-.927-.365h-3.393z" />
        </svg>
      ),
    },*/
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex items-center transition-all duration-300"
                aria-label="Zur Startseite"
              >
                <div className="relative">
                  {/* Light */}
                  <Image
                    src="/images/hampe-logo.png"
                    alt="HAMPE Webentwicklung"
                    width={120}
                    height={40}
                    className="h-8 w-auto group-hover:scale-105 transition-all duration-300 dark:hidden"
                    priority
                  />
                  {/* Dark (Variante wählen) */}
                  <Image
                    src="/images/hampe-logo-dark.png" // oder: /images/hampe-logo-dark-outline.png
                    alt="HAMPE Webentwicklung"
                    width={120}
                    height={40}
                    className="hidden h-8 w-auto group-hover:scale-105 transition-all duration-300 dark:block"
                    priority
                  />
                </div>
              </Link>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              Professionelle Websites, innovative Webshops und maßgeschneiderte
              Software-Lösungen für Ihren digitalen Erfolg.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <svg
                  className="w-5 h-5 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Hannover, Deutschland</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <svg
                  className="w-5 h-5 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@aaronhampe.de</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4">
                Folgen Sie mir
              </h4>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300 border border-slate-200/50 dark:border-slate-700"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Bleiben Sie auf dem Laufenden
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Erhalten Sie Updates zu neuen Projekten, Technologie-Trends und
              exklusive Einblicke in die Webentwicklung.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 whitespace-nowrap"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200/50 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              © {currentYear} Aaron Hampe. Alle Rechte vorbehalten.
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
              <span>Entwickelt mit Next.js & Tailwind CSS</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Alle Systeme betriebsbereit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
