import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email, chatLog } = await req.json();

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
      subject: `Chat escalatie van ${email}`,
      text: `Een bezoeker wil persoonlijk contact.\n\nE-mail bezoeker: ${email}\n\n--- Chatgesprek ---\n\n${chatLog}`,
      html: `
        <p><strong>Een bezoeker wil persoonlijk contact.</strong></p>
        <p><strong>E-mail bezoeker:</strong> <a href="mailto:${email}">${email}</a></p>
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
