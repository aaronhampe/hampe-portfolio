import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientHeader from '@/components/ClientHeader';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'HAMPE – AI‑gestützte Webentwicklung',
    template: '%s – HAMPE',
  },
  description:
    'Websites, Webshops und Software für KMU: KI‑gestützt, DSGVO‑konform, in einer Woche live. Maßgeschneiderte Lösungen aus Hildesheim.',
  keywords: [
    'Webentwicklung',
    'Next.js',
    'Nuxt',
    'React',
    'Tailwind CSS',
    'KI',
    'Hildesheim',
    'DSGVO',
    'Core Web Vitals',
  ],
  authors: [{ name: 'Aaron Hampe' }],
  openGraph: {
    title: 'HAMPE – AI‑gestützte Webentwicklung',
    description:
      'AI‑gestützte Websites, Webshops und Software für kleine und mittelständische Unternehmen – in einer Woche live, DSGVO‑konform, messbar mehr Leads.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'HAMPE Webentwicklung',
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
        <ThemeProvider defaultTheme="light">
          <ClientHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}