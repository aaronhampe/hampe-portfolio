"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type GtagCommand = "js" | "config" | "consent" | "event";
type GtagFn = (command: GtagCommand, ...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    gaConsentGranted?: boolean;
  }
}

export default function ClientAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const trackPageView = () => {
      if (!window.gaConsentGranted || !window.gtag) return;

      window.gtag("config", "G-2L6Y8KV74Y", {
        anonymize_ip: true,
        page_path: pathname,
      });
    };

    trackPageView();
    window.addEventListener("analytics-consent-granted", trackPageView);

    return () => {
      window.removeEventListener("analytics-consent-granted", trackPageView);
    };
  }, [pathname]);

  return null;
}
