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
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center px-6 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          
          <div className="space-y-6">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] font-medium tracking-[-0.04em] uppercase text-zinc-950 dark:text-white">
              Nachricht <br />
              <span className="font-serif italic text-zinc-400 dark:text-zinc-500">erhalten.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/"
              className="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full font-medium text-lg hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Haben Sie ein Projekt im Kopf? <span className="font-serif italic text-zinc-800 dark:text-zinc-200">Lass uns sprechen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            
            {/* Contact Form Container (Brutalist, Minimalist) */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-zinc-950 dark:text-white">Projekt anfragen</h2>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light">
                  Füllen Sie dieses Formular aus. Ich antworte innerhalb von 24 Stunden.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Inputs: Clean underline style or crisp borders */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={formState === "loading"}
                      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-3 text-lg text-zinc-950 dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:border-zinc-950 dark:focus:border-white outline-none transition-colors disabled:opacity-50"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={formState === "loading"}
                      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-3 text-lg text-zinc-950 dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:border-zinc-950 dark:focus:border-white outline-none transition-colors disabled:opacity-50"
                      placeholder="max@unternehmen.de"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Unternehmen
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      disabled={formState === "loading"}
                      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-3 text-lg text-zinc-950 dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:border-zinc-950 dark:focus:border-white outline-none transition-colors disabled:opacity-50"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled={formState === "loading"}
                      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-3 text-lg text-zinc-950 dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:border-zinc-950 dark:focus:border-white outline-none transition-colors disabled:opacity-50"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                    Art des Projekts
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    disabled={formState === "loading"}
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-3 text-lg text-zinc-950 dark:text-white focus:border-zinc-950 dark:focus:border-white outline-none transition-colors disabled:opacity-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_10px_center] bg-no-repeat"
                  >
                    <option className="bg-white dark:bg-zinc-900" value="">Bitte wählen...</option>
                    <option className="bg-white dark:bg-zinc-900" value="website">Website Entwicklung</option>
                    <option className="bg-white dark:bg-zinc-900" value="webshop">E-Commerce / Webshop</option>
                    <option className="bg-white dark:bg-zinc-900" value="software">Custom Software</option>
                    <option className="bg-white dark:bg-zinc-900" value="consulting">Beratung</option>
                    <option className="bg-white dark:bg-zinc-900" value="maintenance">Wartung & Support</option>
                    <option className="bg-white dark:bg-zinc-900" value="other">Sonstiges</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={formState === "loading"}
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-3 text-lg text-zinc-950 dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:border-zinc-950 dark:focus:border-white outline-none transition-colors resize-none disabled:opacity-50"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>

                {formState === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-16 lg:sticky top-32">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Direkter Kontakt</h3>
                  <div className="text-2xl md:text-3xl font-medium text-zinc-950 dark:text-white space-y-2">
                    <p className="hover:text-zinc-500 transition-colors"><a href="mailto:info@aaronhampe.de">info@aaronhampe.de</a></p>
                    <p className="hover:text-zinc-500 transition-colors"><a href="tel:+4915129574884">+49 151 29574884</a></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Standort</h3>
                  <div className="text-xl md:text-2xl font-medium text-zinc-950 dark:text-white">
                    <p>Hannover, Deutschland</p>
                    <p className="text-zinc-500 dark:text-zinc-400 font-light mt-1">Remote & vor Ort</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Information</h3>
                  <p className="text-xl md:text-2xl font-light text-zinc-950 dark:text-white max-w-sm">
                    Ich lege Wert auf professionelle Kommunikation und melde mich garantiert innerhalb von 24 Stunden zurück.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
