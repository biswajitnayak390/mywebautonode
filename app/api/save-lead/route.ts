import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Lead = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "9biswajitnayak1@gmail.com";

function validateLead(body: Record<string, unknown>): Lead {
  const lead: Lead = {
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim(),
    company: String(body.company || "").trim(),
    website: String(body.website || "").trim(),
    message: String(body.message || "").trim(),
  };

  if (!lead.name || !lead.email || !lead.message) {
    throw new Error("Name, email, and message are required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("Invalid email address.");
  }

  if (
    lead.name.length > 100 ||
    lead.company.length > 150 ||
    lead.website.length > 200 ||
    lead.message.length > 3000
  ) {
    throw new Error("Input is too long.");
  }

  return lead;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const lead = validateLead(body);

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      console.error("SMTP credentials are missing.");
      return Response.json(
        { ok: false, message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `AutonodeAI Website <${user}>`,
      to: CONTACT_EMAIL,
      replyTo: lead.email,
      subject: `New AutonodeAI lead from ${lead.name}`,
      text: [
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Company: ${lead.company || "Not provided"}`,
        `Website: ${lead.website || "Not provided"}`,
        "",
        "Message:",
        lead.message,
      ].join("\n"),
      html: `
        <h2>New AutonodeAI lead</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Company:</strong> ${lead.company || "Not provided"}</p>
        <p><strong>Website:</strong> ${lead.website || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${lead.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({
      ok: true,
      message: "Lead sent successfully.",
    });
  } catch (error) {
    console.error("Save lead error:", error);

    const message =
      error instanceof Error ? error.message : "Failed to send lead.";

    const status =
      message.includes("required") ||
      message.includes("Invalid") ||
      message.includes("too long")
        ? 400
        : 500;

    return Response.json({ ok: false, message }, { status });
  }
}
