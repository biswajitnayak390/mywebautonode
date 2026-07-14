import nodemailer from "nodemailer";

type Lead = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@autonodeai.com";

function validateLead(body: Record<string, unknown>): Lead {
  const lead = {
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim(),
    company: String(body.company || "").trim(),
    website: String(body.website || "").trim(),
    message: String(body.message || "").trim(),
  };

  if (!lead.name || !lead.email || !lead.message) {
    throw new Error("Name, email, and message are required.");
  }

  if (!/^[^\