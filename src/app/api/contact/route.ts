// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();              // { name, email, message }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail({
    from: `"Portfolio Kontakt" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,                   // deine Ziel-Adresse
    subject: `Neue Nachricht von ${data.name}`,
    text: `${data.message}\n\nAbsender: ${data.email}`,
  });

  return NextResponse.json({ ok: true });
}
