import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please fill in name, email, and project details.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@autonodeai.com';

    if (!host || !user || !pass) {
      return NextResponse.json(
        {
          error:
            'Email sending is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and optionally CONTACT_TO_EMAIL in your environment variables.'
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    await transporter.sendMail({
      from: `AutonodeAI Website <${user}>`,
      replyTo: email,
      to: toEmail,
      subject: `New discovery call request: ${service || 'Website enquiry'}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || '-'}`,
        `Service: ${service || '-'}`,
        `Budget: ${budget || '-'}`,
        '',
        'Project details:',
        message
      ].join('\n'),
      html: `
        <h2>New discovery call request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Service:</strong> ${service || '-'}</p>
        <p><strong>Budget:</strong> ${budget || '-'}</p>
        <p><strong>Project details:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to send your request right now.' }, { status: 500 });
  }
}
