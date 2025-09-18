// src/pages/api/contact.ts
export const runtime = "nodejs";

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type PostBody = {
  business?: string;
  reason?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body as PostBody;
  const { business, reason, firstName, lastName, email, phone, company, message } = body;

  if (!email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ error: "SMTP is not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // 465=true, 587/25=false
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Swordbay Website" <${SMTP_USER}>`,
      to: "info@swordbay.com", // ← 你的收件邮箱
      subject: `New Contact Form Submission (${reason || "No reason"})`,
      text: `
Business: ${business || ""}
Reason: ${reason || ""}
Name: ${firstName || ""} ${lastName || ""}
Email: ${email}
Phone: ${phone || ""}
Company: ${company || ""}
Message: ${message || ""}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Business:</strong> ${business || ""}</p>
        <p><strong>Reason:</strong> ${reason || ""}</p>
        <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || ""}</p>
        <p><strong>Company:</strong> ${company || ""}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    console.error("Email send error:", err);
    const msg = err instanceof Error ? err.message : "Failed to send email";
    return res.status(500).json({ error: msg });
  }
}
