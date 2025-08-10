"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const error = await res.text();
        setErrorMessage(error || "Ein Fehler ist aufgetreten");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-6 text-slate-900 dark:text-slate-100">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Animation */}
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-green-500 rounded-full mx-auto opacity-20 animate-ping" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-thin">
              Nachricht
              <span className="font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> erhalten!</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/"
              className="px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-2xl font-medium text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Zur Startseite
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl font-medium text-lg hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Projekte ansehen
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-16">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
                Lassen Sie uns
                <span className="font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> sprechen</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Haben Sie ein Projekt im Kopf? Ich freue mich auf Ihre Nachricht und berate Sie gerne unverbindlich.
            </p>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <div className="mb-8">
                <h2 className="text-3xl font-light mb-4">Projekt anfragen</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Füllen Sie das Formular aus und ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Ihr Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      E-Mail Adresse *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                      placeholder="max@unternehmen.de"
                    />
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Unternehmen
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Art des Projekts
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    disabled={formState === "loading"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="website">Website Entwicklung</option>
                    <option value="webshop">E-Commerce / Webshop</option>
                    <option value="software">Custom Software</option>
                    <option value="consulting">Beratung</option>
                    <option value="maintenance">Wartung & Support</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Budget (optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    disabled={formState === "loading"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                  >
                    <option value="">Budget auswählen...</option>
                    <option value="5000-10000">5.000 - 10.000 €</option>
                    <option value="10000-25000">10.000 - 25.000 €</option>
                    <option value="25000-50000">25.000 - 50.000 €</option>
                    <option value="50000+">50.000+ €</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={formState === "loading"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none disabled:bg-slate-50 dark:disabled:bg-slate-800 disabled:opacity-50"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>

                {/* Error Message */}
                {formState === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {formState === "loading" ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
                <h3 className="text-2xl font-light mb-6">Direkter Kontakt</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-400/20 dark:to-purple-400/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">E-Mail</h4>
                      <p className="text-slate-600 dark:text-slate-300">info@aaronhampe.de</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Antwort innerhalb von 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-400/20 dark:to-emerald-400/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Telefon</h4>
                      <p className="text-slate-600 dark:text-slate-300">+49 151 29574884</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Jederzeit erreichbar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-400/20 dark:to-pink-400/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Standort</h4>
                      <p className="text-slate-600 dark:text-slate-300">Hannover, Deutschland</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Remote & vor Ort</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700">
                <h3 className="text-2xl font-light mb-4">Schnelle Antwortzeiten</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Ich lege Wert auf professionelle Kommunikation und melde mich garantiert innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Normalerweise antworte ich binnen 2–4 Stunden</span>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  <span>Häufige Fragen & Antworten</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
