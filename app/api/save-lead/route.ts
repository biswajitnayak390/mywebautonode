import { getDb } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const website = String(body.website || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { ok: false, message: "Invalid email address." },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      company.length > 150 ||
      website.length > 200 ||
      message.length > 3000
    ) {
      return Response.json(
        { ok: false, message: "Input is too long." },
        { status: 400 },
      );
    }

    const db = await getDb();

    const result = await db.collection("leads").insertOne({
      name,
      email,
      company,
      website,
      message,
      source: "chatbot",
      createdAt: new Date(),
    });

    return Response.json({
      ok: true,
      message: "Lead saved successfully.",
      id: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Save lead error:", error);

    return Response.json(
      { ok: false, message: "Failed to save lead." },
      { status: 500 },
    );
  }
}
