// src/pages/api/contact.ts
export const runtime = "nodejs";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Ok = { ok: true };
type Err = { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Ok | Err>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    business,
    reason,
    firstName,
    lastName,
    email,
    phone,
    company,
    message,
  } = (req.body ?? {}) as Record<string, string | undefined>;

  if (!email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const from = process.env.CONTACT_FROM || "Swordbay <info@swordbay.com>";
    const to = process.env.CONTACT_TO || "founder@swordbay.com";

    const subject = `New Contact Form Submission (${reason || "General"})`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Business:</strong> ${business || ""}</p>
      <p><strong>Reason:</strong> ${reason || ""}</p>
      <p><strong>Name:</strong> ${[firstName, lastName].filter(Boolean).join(" ")}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || ""}</p>
      <p><strong>Company:</strong> ${company || ""}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace">${message}</pre>
    `;

    const text =
      `Business: ${business || ""}\n` +
      `Reason: ${reason || ""}\n` +
      `Name: ${[firstName, lastName].filter(Boolean).join(" ")}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || ""}\n` +
      `Company: ${company || ""}\n\n` +
      `Message:\n${message}`;

    const sendResult = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo: email, // 方便你直接“回复”给访客
    });

    if (sendResult.error) {
      return res
        .status(500)
        .json({ error: sendResult.error.message || "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    const msg =
      err instanceof Error ? err.message : "Failed to send email (unknown error)";
    return res.status(500).json({ error: msg });
  }
}
