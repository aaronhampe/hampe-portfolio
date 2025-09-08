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
    if (!window.gaConsentGranted || !window.gtag) return;
    // Send page_view on route change (after consent was granted)
    window.gtag("config", "G-2L6Y8KV74Y", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
