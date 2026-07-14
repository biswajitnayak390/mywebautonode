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
    message: String