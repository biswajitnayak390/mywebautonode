import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "contact@autonodeai.com";

    if (!host || !port || !user || !pass) {
      return Response.json(
        {
          ok: false,
          message:
            "Email sending is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and optionally CONTACT_TO_EMAIL in your environment variables.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"AutonodeAI Website" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Discovery Call Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Discovery Call Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return Response.json({
      ok: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { ok: false, message: "Failed to send email." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
