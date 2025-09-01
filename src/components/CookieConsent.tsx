"use client";
import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

// NOTE: Falls du die CSS global customizen willst: überschreibe die Klassen in globals.css nach dem Import.
// Minimaler Setup mit Kategorien (necessary, functional, analytics, marketing)

// Kleine Erweiterung des Window-Typs für unsere Consent-Bridge (top-level)
declare global {
  interface Window {
    updateAnalyticsConsent?: (granted: boolean) => void;
    cc?: { showSettings?: () => void };
  }
}

export default function CookieConsent() {
  useEffect(() => {
    // Lazy import to avoid SSR issues
    // Minimale Typen basierend auf vanilla-cookieconsent
    interface CookieConsentCtx {
      cookie: { categories: string[] };
    }
    interface CookieConsentConfig {
      guiOptions: unknown;
      categories: Record<string, unknown>;
      language: unknown;
      onFirstConsent?: (ctx: CookieConsentCtx) => void;
      onConsent?: (ctx: CookieConsentCtx) => void;
      onChange?: (ctx: CookieConsentCtx & { changedCategories?: string[] }) => void;
    }
    
    import("vanilla-cookieconsent").then((mod: unknown) => {
      const cookieConsent = mod as { 
        run: (config: CookieConsentConfig) => void;
        showSettings: () => void;
      };
      
      // Global verfügbar machen für den Settings-Button  
      (window as unknown as { cc?: { showSettings?: () => void } }).cc = {
        showSettings: cookieConsent.showSettings,
      };
      
      cookieConsent.run({
        guiOptions: {
          consentModal: { layout: "box inline", position: "bottom right", equalWeightButtons: true, flipButtons: false },
          preferencesModal: { layout: "box", position: "right", equalWeightButtons: true, flipButtons: false },
        },
        categories: {
          necessary: {
            enabled: true, // cannot be disabled
            readOnly: true,
            autoClear: { cookies: [] },
          },
          functional: { autoClear: { cookies: [] } },
          analytics: { autoClear: { cookies: [] } },
          marketing: { autoClear: { cookies: [] } },
        },
        language: {
          default: "de",
          translations: {
            de: {
              consentModal: {
                title: "Cookies & Services",
                description:
                  "Wir verwenden Cookies, um die Website sicher und funktional zu betreiben und – mit deiner Einwilligung – optionale Analysefunktionen zu aktivieren.",
                acceptAllBtn: "Alle akzeptieren",
                acceptNecessaryBtn: "Nur notwendige",
                showPreferencesBtn: "Einstellungen",
                closeIconLabel: "Schließen",
                footer: "<a href='/datenschutz' class='cc-link'>Datenschutz</a> · <a href='/impressum' class='cc-link'>Impressum</a>",
              },
              preferencesModal: {
                title: "Datenschutz-Einstellungen",
                acceptAllBtn: "Alle akzeptieren",
                acceptNecessaryBtn: "Nur notwendige",
                savePreferencesBtn: "Speichern",
                closeIconLabel: "Schließen",
                sections: [
                  {
                    title: "Notwendige Cookies",
                    description:
                      "Erforderlich für den Grundbetrieb der Seite. Diese kannst du nicht abwählen.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Funktional",
                    description:
                      "Verbesserte Funktionen & Personalisierung (z. B. gespeicherte Präferenzen).",
                    linkedCategory: "functional",
                  },
                  {
                    title: "Analyse",
                    description:
                      "Anonyme Statistik zur Verbesserung der Inhalte (z. B. Plausible, Google Analytics – falls aktiviert).",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Marketing",
                    description:
                      "Tracking für Marketing / Retargeting (derzeit nicht aktiv).",
                    linkedCategory: "marketing",
                  },
                  {
                    title: "Mehr Infos",
                    description:
                      "Detailierte Informationen findest du in der <a href='/datenschutz' class='cc-link'>Datenschutzerklärung</a>.",
                  },
                ],
              },
            },
          },
        },
        // Optional: Callback Hooks um z.B. Analytics erst bei Consent zu initialisieren
        onFirstConsent: () => {
          // Erstes Consent Event
        },
        onConsent: (ctx: CookieConsentCtx) => {
          const granted = Array.isArray(ctx.cookie.categories) && ctx.cookie.categories.includes("analytics");
          // GA Consent Bridge
          if (typeof window.updateAnalyticsConsent === 'function') {
            window.updateAnalyticsConsent(granted);
          }
          if (granted) {
            // Dynamisches Laden von Plausible erst nach Einwilligung
            const existing = document.querySelector('script[data-plausible]');
            if (!existing) {
              const s = document.createElement('script');
              s.setAttribute('data-domain', 'TODO-DOMAIN'); // TODO: Domain eintragen
              s.setAttribute('data-api', '/api/event'); // optional für Proxy
              s.defer = true;
              s.dataset.plausible = 'true';
              s.src = 'https://plausible.io/js/script.js'; // oder eigenes self-hosted Script
              document.head.appendChild(s);
            }
          }
        },
        onChange: (ctx: CookieConsentCtx & { changedCategories?: string[] }) => {
          // Änderungen der Auswahl → Consent für GA aktualisieren
          const granted = Array.isArray(ctx.cookie.categories) && ctx.cookie.categories.includes('analytics');
          if (typeof window.updateAnalyticsConsent === 'function') {
            window.updateAnalyticsConsent(granted);
          }
        },
      });
    });
  }, []);

  return null; // UI wird durch CookieConsent Library injiziert
}
