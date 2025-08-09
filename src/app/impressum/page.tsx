/**
 * Impressum Seite. Enthält gemäß § 5 TMG die Pflichtangaben für die
 * Anbieterkennzeichnung. Bitte ergänze die persönlichen Daten wie
 * Name, Anschrift und Kontaktmöglichkeiten.
 */
export default function ImpressumPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold">Impressum</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Angaben gemäß § 5 TMG. Bitte fülle hier deine vollständige Anschrift,
        Kontaktdaten sowie den Vertretungsberechtigten ein.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Angaben gemäß § 5 TMG</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Aaron Hampe<br />
        Musterstraße 1<br />
        31134 Hildesheim<br />
        Deutschland
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Telefon: +49 5121 123456<br />
        E‑Mail: info@hampe.dev
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Aaron Hampe<br />
        Musterstraße 1<br />
        31134 Hildesheim
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
        Hinweis: Die oben angegebenen Daten dienen nur als Platzhalter und müssen
        durch die tatsächlichen Unternehmens‑ oder Personendaten ersetzt
        werden.
      </p>
    </section>
  );
}