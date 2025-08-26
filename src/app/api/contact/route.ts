import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // wichtig: Nodemailer braucht Node, nicht Edge

export async function POST(request: Request) {
  try {
    const { name, email, message, company, phone, projectType } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, E-Mail und Nachricht sind erforderlich.' }, { status: 400 });
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_TO) {
      return NextResponse.json({ error: 'Mail-Server nicht konfiguriert.' }, { status: 500 });
    }

    const port = Number(process.env.SMTP_PORT || 587);
    const secure = port === 465; // 465 = SSL/TLS, 587 = STARTTLS

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      ${projectType ? `<p><strong>Projektart:</strong> ${projectType}</p>` : ''}
      <hr/>
      <p>${(message || '').toString().replace(/\n/g, '<br/>')}</p>
    `;

    await transport.sendMail({
      from: `"Portfolio Kontakt" <${process.env.SMTP_USER}>`, // muss zur IONOS-Mailbox gehören
      to: process.env.CONTACT_TO,
      replyTo: email, // damit du direkt dem Absender antworten kannst
      subject: `Neue Nachricht von ${name}`,
      text: `${message}\n\nAbsender: ${email}\nFirma: ${company || '-'}\nTelefon: ${phone || '-'}\nProjekt: ${projectType || '-'}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Mail error:', err);
    return NextResponse.json({ error: 'Senden fehlgeschlagen.' }, { status: 500 });
  }
}