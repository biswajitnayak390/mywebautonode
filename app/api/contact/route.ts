import nodemailer from "nodemailer";

const unavailableMessage = "Unable to send your request right now.";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim();
  if (contentType?.toLowerCase() !== "application/json") {
    return Response.json({ ok: false, message: "Send a JSON request." }, { status: 415 });
  }

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  function field(key: string) {
    const value = fields[key];
    return typeof value === "string" ? value.trim() : "";
  }

  const name = field("name");
  const email = field("email");
  const company = field("company");
  const website = field("website");
  const message = field("message");

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, message: "Name, email, and project details are required." },
      { status: 400 },
    );
  }

  if (email.length > 254 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) {
    return Response.json({ ok: false, message: "Enter a valid email address." }, { status: 400 });
  }

  if (name.length > 100 || company.length > 150 || website.length > 300 || message.length > 3000) {
    return Response.json({ ok: false, message: "One of the fields is too long." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || "contact@autonodeai.com";

  if (!host || !user || !pass || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Contact form SMTP configuration is incomplete.");
    return Response.json({ ok: false, message: unavailableMessage }, { status: 503 });
  }

  const requestTypes: Record<string, string> = {
    "sitecore-migration-review": "Sitecore Migration Review",
    contact: "Project Enquiry",
  };
  const source = field("source");
  const requestType = Object.hasOwn(requestTypes, source) ? requestTypes[source] : "Discovery Call";
  const attribution = ["utm_source", "utm_campaign"].flatMap((key) => {
    const value = field(key);
    return /^[a-z0-9_.-]{1,80}$/i.test(value) ? [`${key}: ${value}`] : [];
  });

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 8_000,
      greetingTimeout: 8_000,
      socketTimeout: 15_000,
    });
    const receipt = await transporter.sendMail({
      from: { name: "AutonodeAI Website", address: user },
      to: toEmail,
      replyTo: { name: "", address: email },
      subject: `New ${requestType} Request from ${name.replace(/\s+/g, " ")}`,
      text: [
        `Request: ${requestType}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Website: ${website || "-"}`,
        ...attribution,
        "",
        message,
      ].join("\n"),
    });

    if (receipt.accepted.length === 0) {
      console.error("Contact form email had no accepted recipients.");
      return Response.json({ ok: false, message: unavailableMessage }, { status: 502 });
    }

    return Response.json({ ok: true, message: "Request sent successfully." });
  } catch (error) {
    console.error("Contact form SMTP delivery failed.", (error as NodeJS.ErrnoException | null)?.code);
    return Response.json({ ok: false, message: unavailableMessage }, { status: 502 });
  }
}
