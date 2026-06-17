import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientHeader from '@/components/ClientHeader';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import PlausibleProvider from 'next-plausible';
import CookieConsent from '@/components/CookieConsent';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import ClientAnalytics from '../components/ClientAnalytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const GA_TRACKING_ID = 'G-2L6Y8KV74Y';

export const metadata: Metadata = {
  title: {
    default: 'Studio HAMPE - Webentwicklung & Software Lösungen',
    template: '%s – HAMPE',
  },
  description:
    'Moderne Webentwicklung: Websites, Webshops und Software für KMU – KI‑gestützt, DSGVO‑konform, in einer Woche live. Maßgeschneiderte IT‑Lösungen aus Hildesheim/Hannover.',
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
      'KI‑gestützte Websites, Webshops und Software für kleine und mittelständische Unternehmen – schnell live, DSGVO‑konform, messbar mehr Leads.',
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
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              window.gaConsentGranted = false;

              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted'
              });
              gtag('config', '${GA_TRACKING_ID}', {
                send_page_view: false
              });

              window.updateAnalyticsConsent = function(granted) {
                var wasGranted = window.gaConsentGranted === true;
                var status = granted ? 'granted' : 'denied';

                window.gaConsentGranted = granted === true;
                gtag('consent', 'update', { analytics_storage: status });

                if (granted && !wasGranted) {
                  window.dispatchEvent(new Event('analytics-consent-granted'));
                }

                try {
                  localStorage.setItem('analytics_consent', status);
                } catch (error) {}
              };

              try {
                if (localStorage.getItem('analytics_consent') === 'granted') {
                  window.gaConsentGranted = true;
                  gtag('consent', 'update', { analytics_storage: 'granted' });
                }
              } catch (error) {}
            `,
          }}
        />
      </head>
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