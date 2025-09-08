import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientHeader from '@/components/ClientHeader';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import PlausibleProvider from 'next-plausible';
import CookieConsent from '@/components/CookieConsent';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'HAMPE – IT‑ & AI‑gestützte Webentwicklung',
    template: '%s – HAMPE',
  },
  description:
    'IT‑getriebene Webentwicklung: Websites, Webshops und Software für KMU – KI‑gestützt, DSGVO‑konform, in einer Woche live. Maßgeschneiderte IT‑Lösungen aus Hildesheim/Hannover.',
  keywords: [
    'IT',
    'IT Dienstleistungen',
    'IT‑Beratung',
    'IT Service',
    'IT Hannover',
    'IT Hildesheim',
    'Webentwicklung',
    'Next.js',
    'Nuxt',
    'React',
    'Tailwind CSS',
    'KI',
    'DSGVO',
    'Core Web Vitals',
  ],
  authors: [{ name: 'Aaron Hampe' }],
  openGraph: {
    title: 'HAMPE – IT‑ & AI‑gestützte Webentwicklung',
    description:
      'IT‑ und KI‑gestützte Websites, Webshops und Software für kleine und mittelständische Unternehmen – schnell live, DSGVO‑konform, messbar mehr Leads.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'HAMPE Webentwicklung & IT‑Services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * RootLayout umschließt alle Seiten. Er stellt Header, Footer und ThemeContext bereit.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <body className="antialiased">
        <PlausibleProvider
          domain="TODO-DOMAIN" // <-- TODO: Deine Produktions-Domain eintragen (z.B. hampe.dev)
          trackLocalhost={false}
          selfHosted={false} // auf true stellen falls selbst gehostete Instanz
          enabled={false} // wird dynamisch via CookieConsent gesetzt (siehe Hinweis unten)
        >
          <ThemeProvider defaultTheme="light">
            <ClientHeader />
            <CookieConsent />
            <CookieSettingsButton />
            {children}
            <Footer />
          </ThemeProvider>
        </PlausibleProvider>
        {/* JSON-LD: ProfessionalService mit IT‑Fokus */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'HAMPE – Webentwicklung & IT‑Services',
              url: 'https://www.aaronhampe.de',
              areaServed: ['Hannover', 'Hildesheim', 'Deutschland'],
              sameAs: [],
              telephone: '+49 151 29574884',
              email: 'info@aaronhampe.de',
              description:
                'IT‑getriebene Webentwicklung und Beratung: Websites, Webshops, Software, IT‑Integration und Support für KMU.',
              serviceType: ['IT‑Beratung', 'Webentwicklung', 'E‑Commerce', 'Softwareentwicklung', 'IT‑Support'],
              keywords: 'IT, IT Dienstleistungen, IT Beratung, IT Service, Webentwicklung, Hannover, Hildesheim',
            }),
          }}
        />
      </body>
    </html>
  );
}