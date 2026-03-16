export async function POST(request: Request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return Response.json(
        { ok: false, message: "Missing GOOGLE_SHEETS_WEBHOOK_URL" },
        { status: 500 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to save lead to Google Sheets");
    }

    return Response.json({ ok: true, message: "Lead saved successfully  " });
  } catch (error: any) {
    return Response.json(
      { ok: false, message: error.message || "Failed to save lead" },
      { status: 500 },
    );
  }
}
