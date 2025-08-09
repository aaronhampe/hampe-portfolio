/**
 * Datenschutz‑Erklärung. Diese Seite enthält generische Abschnitte zur
 * Erhebung und Verarbeitung personenbezogener Daten. Ergänze oder
 * ändere den Text entsprechend deinen tatsächlichen Prozessen und
 * rechtlichen Anforderungen.
 */
export default function DatenschutzPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Diese Datenschutzerklärung klärt dich über die Art, den Umfang und Zweck
        der Verarbeitung personenbezogener Daten (nachfolgend kurz „Daten“) im
        Rahmen der Bereitstellung unserer Website auf. Die verwendeten Begriffe
        wie „Verarbeitung“ oder „Verantwortlicher“ orientieren sich an den
        Definitionen des Art. 4 der Datenschutz‑Grundverordnung (DSGVO).
      </p>
      <h2 className="text-2xl font-semibold">1. Verantwortlicher</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br />
        Aaron Hampe<br />
        Musterstraße 1<br />
        31134 Hildesheim<br />
        E‑Mail: info@hampe.dev
      </p>
      <h2 className="text-2xl font-semibold">2. Erfassung und Verarbeitung personenbezogener Daten</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Wir verarbeiten personenbezogene Daten der Nutzer ausschließlich unter
        Einhaltung der einschlägigen Datenschutzbestimmungen. Zu den
        verarbeiteten Daten gehören Bestandsdaten (z. B. Namen und Adressen),
        Kontaktdaten (z. B. E‑Mail, Telefonnummer) und Inhaltsdaten (z. B.
        Nachrichten im Kontaktformular).
      </p>
      <h2 className="text-2xl font-semibold">3. Zugriffsdaten</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Wir, bzw. unser Hostinganbieter, erheben auf Grundlage unseres
        berechtigten Interesses (Art. 6 Abs. 1 lit. f. DSGVO) Daten über jeden
        Zugriff auf den Server, auf dem sich dieser Dienst befindet (sog.
        Server‑Logfiles). Zu den Zugriffsdaten gehören Name der abgerufenen
        Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge,
        Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das
        Betriebssystem des Nutzers, Referrer URL, IP‑Adresse und der
        anfragende Provider. Die Logfile‑Informationen werden aus
        Sicherheitsgründen (z. B. zur Aufklärung von Missbrauch oder
        Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und
        danach gelöscht.
      </p>
      <h2 className="text-2xl font-semibold">4. Rechte der Betroffenen</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Du hast das Recht, eine Bestätigung darüber zu verlangen, ob dich
        betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
        sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15
        DSGVO. Du hast entsprechend Art. 16 DSGVO das Recht, die
        Vervollständigung der dich betreffenden Daten oder die Berichtigung der
        dich betreffenden unrichtigen Daten zu verlangen. Nach Maßgabe des
        Art. 17 DSGVO hast du das Recht zu verlangen, dass betreffende Daten
        unverzüglich gelöscht werden. Bitte kontaktiere uns hierzu unter den
        oben angegebenen Kontaktdaten.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
        Hinweis: Dieser Text stellt keine Rechtsberatung dar und muss an die
        spezifischen Gegebenheiten deines Unternehmens sowie die genutzten
        Dienste und Tracking‑Methoden angepasst werden.
      </p>
    </section>
  );
}