/**
 * Allgemeine Geschäftsbedingungen (AGB). Diese Vorlage bietet eine
 * grundlegende Struktur für AGB. Ergänze die Inhalte entsprechend deiner
 * rechtlichen Anforderungen und Produkte bzw. Dienstleistungen.
 */
export default function AgbPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Allgemeine Geschäftsbedingungen</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        Verträge, die über diese Website abgeschlossen werden. Bitte lies die
        AGB sorgfältig durch, bevor du Dienstleistungen oder Produkte bestellst.
      </p>
      <h2 className="text-2xl font-semibold">1. Geltungsbereich</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Diese AGB gelten für alle Verträge zwischen dem Anbieter (Aaron Hampe) und
        seinen Kunden in der jeweils zum Zeitpunkt des Vertragsschlusses
        gültigen Fassung. Abweichende Bedingungen des Kunden werden nicht
        anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich
        schriftlich zu.
      </p>
      <h2 className="text-2xl font-semibold">2. Vertragsabschluss</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Die Darstellung der Dienstleistungen auf der Website stellt kein
        rechtlich bindendes Angebot dar, sondern eine unverbindliche
        Aufforderung zur Abgabe einer Anfrage. Durch das Absenden einer
        Anfrage erklärst du dich mit diesen AGB einverstanden. Ein Vertrag
        kommt erst zustande, wenn der Anbieter die Anfrage bestätigt.
      </p>
      <h2 className="text-2xl font-semibold">3. Preise und Zahlungsbedingungen</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Alle angegebenen Preise sind Nettopreise und verstehen sich zuzüglich
        der gesetzlichen Mehrwertsteuer. Zahlungsbedingungen, wie Fälligkeit
        und Zahlungsmethoden, werden individuell vereinbart.
      </p>
      <h2 className="text-2xl font-semibold">4. Leistungsumfang</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der
        Leistungsbeschreibung. Änderungen oder Erweiterungen des Umfangs
        bedürfen der schriftlichen Vereinbarung.
      </p>
      <h2 className="text-2xl font-semibold">5. Haftung</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit uneingeschränkt.
        Bei einfacher Fahrlässigkeit haftet der Anbieter nur für Schäden aus
        der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für
        Schäden aus der Verletzung wesentlicher Vertragspflichten
        (Kardinalpflichten). In diesem Fall ist die Haftung jedoch auf den
        Ersatz des vorhersehbaren, vertragstypischen Schadens begrenzt.
      </p>
      <h2 className="text-2xl font-semibold">6. Schlussbestimmungen</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
        Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
        übrigen Bestimmungen unberührt. Änderungen oder Ergänzungen dieser
        AGB bedürfen der Schriftform.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
        Hinweis: Diese AGB sind als Vorlage gedacht und stellen keine
        Rechtsberatung dar. Lass deine AGB im Zweifel von einer
        rechtskundigen Person prüfen und an deine konkreten Leistungen anpassen.
      </p>
    </section>
  );
}