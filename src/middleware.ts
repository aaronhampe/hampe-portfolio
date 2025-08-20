import { NextResponse } from 'next/server';

// Manuelles Security Hardening. TODOs: CSP weiter verschärfen wenn Inline Scripts entfernt sind.

export function middleware() {
  const res = NextResponse.next();

  // Baseline CSP – aktuell noch relativ locker wegen Inline Script (Iconify) und evtl. eval in dev.
  // TODO: Iconify Script selbst hosten und dann 'unsafe-inline' / 'unsafe-eval' entfernen.
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://code.iconify.design",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    'base-uri "self"',
    'form-action "self"'
  ].join('; ');

  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('X-XSS-Protection', '0'); // moderne Browser -> CSP
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), usb=()');
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  res.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  res.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
