import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientHeader from '@/components/ClientHeader';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import PlausibleProvider from 'next-plausible';
import CookieConsent from '@/components/CookieConsent';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import Script from 'next/script';
import ClientAnalytics from '../components/ClientAnalytics';
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
    'KI-Entwicklung',
    'Softwareentwicklung',
    'E-Commerce',  
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
        {/* Google Analytics init: lädt nur nach Consent (siehe window.updateAnalyticsConsent) */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

            // Consent Mode: default to denied until user accepts in cookie settings
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted'
            });

            // Helper your cookie UI can call: window.updateAnalyticsConsent(true|false)
            window.updateAnalyticsConsent = function(granted) {
              var status = granted ? 'granted' : 'denied';
              gtag('consent', 'update', { analytics_storage: status });
              window.gaConsentGranted = granted === true;
              if (granted) {
                // Dynamically load GA script only after consent
                if (!document.querySelector('script[data-ga-loader]')) {
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-2L6Y8KV74Y';
                  s.setAttribute('data-ga-loader', 'true');
                  document.head.appendChild(s);
                }
                // Initialize GA4 config when consent is granted
                gtag('js', new Date());
                gtag('config', 'G-2L6Y8KV74Y', {
                  anonymize_ip: true
                });
                try {
                  localStorage.setItem('analytics_consent', 'granted');
                } catch(e) {}
              } else {
                try {
                  localStorage.setItem('analytics_consent', 'denied');
                } catch(e) {}
              }
            };

            // Optional: auto-apply previously saved consent from localStorage
            try {
              var saved = localStorage.getItem('analytics_consent');
              if (saved === 'granted') {
                window.updateAnalyticsConsent(true);
              }
            } catch(e) {}
          `}
        </Script>
        {/* Schlankes Client-Island für page_view Ereignisse auf Route-Change */}
        <ClientAnalytics />
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
                'KI‑getriebene Webentwicklung und Beratung: Websites, Webshops, Software, IT‑Integration und Support für KMU.',
              serviceType: ['IT‑Beratung', 'Webentwicklung', 'E‑Commerce', 'Softwareentwicklung', 'IT‑Support'],
              keywords: 'IT, IT Dienstleistungen,KI-Entwicklung, AI, KI, IT Beratung, IT Service, Webentwicklung, Hannover, Hildesheim',
            }),
          }}
        />
      </body>
    </html>
  );
}