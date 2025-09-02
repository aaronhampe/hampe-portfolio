import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Über mich – HAMPE",
};

export default function AboutPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-4">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-12 sm:flex-row sm:items-start sm:space-x-8">
          <div className="mb-6 sm:mb-0 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-20 animate-pulse"></div>
            <Image
              src="/images/aaron-hampe-profile.webp"
              alt="Aaron Hampe - Full-Stack Entwickler"
              width={170}
              height={170}
              className="relative rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-gray-700 transition-transform hover:scale-105"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Über mich
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Hallo! Ich bin{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Aaron Hampe
              </span>
              , ein leidenschaftlicher Full‑Stack‑Entwickler aus Hannover. Meine
              Expertise liegt in der Entwicklung moderner Webanwendungen mit
              Next.js, React, Nuxt und Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Seit mehreren Jahren helfe ich Unternehmen dabei, ihre digitale
              Präsenz zu stärken und maßgeschneiderte Software‑Lösungen zu
              realisieren.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Neben meinem Studium der Informatik habe ich durch zahlreiche
              Projekte ein tiefes Verständnis für performante Frontend‑Architekturen,
              skalierbare Backends und benutzerfreundliche Oberflächen entwickelt.
              Neben meiner technischen Arbeit engagiere ich mich für Open Source
              und halte mich stets über die neuesten Trends in der Webentwicklung
              auf dem Laufenden.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
                Wenn Sie Unterstützung bei Ihrem nächsten Projekt benötigen oder
                einfach über Technologien fachsimpeln möchten, zögern Sie nicht,{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4"
                >
                  mich zu kontaktieren
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Ghana Project Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 shadow-lg border border-green-100 dark:border-green-800">
          <div className="flex items-center mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mr-4"></div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Etwas Gutes tun
            </h3>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Neben der Arbeit engagiere ich mich mit engen Freunden in unserer
            eigenen gemeinnützigen Organisation. Ein Schulbau in Ghana, Hobor -
            Mit vollem Erfolg. Die Schule steht und wir sind motivierter denn je,
            weiter zu machen. Erfahren Sie mehr unter{" "}
            <Link
              href="https://www.zusammenfuerghana.de"
              target="_blank"
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium transition-all duration-200 hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-1"
            >
              www.zusammenfuerghana.de
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
            .
          </p>

          {/* Ghana Project Image */}
          <div className="relative group overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/ghana-school-project.avif"
              alt="Schulbau Projekt in Ghana, Hobor - Zusammen für Ghana"
              width={800}
              height={400}
              className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
