import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, chatLog } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SequenceFlow Widget" <${process.env.SMTP_USER}>`,
      to: 'hallo@sequenceflow.io',
      subject: `Supportaanvraag van ${name}`,
      text: `Een bezoeker vraagt om persoonlijk contact.\n\nNaam: ${name}\nE-mail: ${email}\n\n--- Chatgesprek ---\n\n${chatLog}`,
      html: `
        <p><strong>Een bezoeker vraagt om persoonlijk contact.</strong></p>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <h3>Chatgesprek</h3>
        <pre style="font-family: sans-serif; line-height: 1.6; white-space: pre-wrap;">${chatLog}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
