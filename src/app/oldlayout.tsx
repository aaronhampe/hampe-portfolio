import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientHeader from "@/components/ClientHeader";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAMPE - Webentwicklung & Software Lösungen",
  description: "Professionelle Websites, E-Commerce Lösungen und maßgeschneiderte Software von Aaron Weber. Next.js, React und moderne Webtechnologien.",
  keywords: ["Webentwicklung", "Next.js", "React", "E-Commerce", "Software", "Hildesheim"],
  authors: [{ name: "Aaron Weber" }],
  openGraph: {
    title: "HAMPE - Webentwicklung & Software Lösungen",
    description: "Professionelle Websites, E-Commerce Lösungen und maßgeschneiderte Software",
    type: "website",
    locale: "de_DE",
    siteName: "HAMPE Webentwicklung",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                const themePreference = getThemePreference();
                const theme = themePreference === 'system' 
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : themePreference;
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
              })()
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased transition-colors duration-300`}>
        <ThemeProvider defaultTheme="system">
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
            <ClientHeader />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}