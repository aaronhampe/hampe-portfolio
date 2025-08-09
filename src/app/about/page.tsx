import Link from 'next/link';

export const metadata = {
  title: 'Über mich – HAMPE',
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-4">Über mich</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Hallo! Ich bin Aaron Hampe, ein leidenschaftlicher Full‑Stack‑Entwickler aus Hannover. Meine Expertise liegt in der
          Entwicklung moderner Webanwendungen mit Next.js, React, Nuxt und Tailwind CSS. Seit mehreren Jahren helfe ich
          Unternehmen dabei, ihre digitale Präsenz zu stärken und maßgeschneiderte Software‑Lösungen zu realisieren.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Durch mein Studium der Informatik und zahlreiche Projekte habe ich ein tiefes Verständnis für performante
          Frontend‑Architekturen, skalierbare Backends und benutzerfreundliche Oberflächen entwickelt. Neben meiner
          technischen Arbeit engagiere ich mich für Open Source und halte mich stets über die neuesten Trends in der
          Webentwicklung auf dem Laufenden.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Wenn Sie Unterstützung bei Ihrem nächsten Projekt benötigen oder einfach über Technologien fachsimpeln möchten,
          zögern Sie nicht, <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">mich zu kontaktieren</Link>.
        </p>
      </div>
    </section>
  );
}
