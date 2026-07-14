import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

export const runtime = "nodejs";

type Lead = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
  source: string;
  createdAt: Date;
};

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "9biswajitnayak1@gmail.com";

function validateLead(body: Record<string, unknown>): Lead {
  const lead: Lead = {
    name: String(body.name || "").trim