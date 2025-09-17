// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { business, reason, firstName, lastName, email, phone, company, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 创建 SMTP 传输器
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // 587 -> STARTTLS，465 -> true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 发送邮件
    await transporter.sendMail({
      from: `"Swordbay Website" <${process.env.SMTP_USER}>`,
      to: "info@swordbay.com", // 你自己的收件邮箱
      subject: `New Contact Form Submission (${reason || "No reason"})`,
      text: `
Business: ${business || ""}
Reason: ${reason || ""}
Name: ${firstName || ""} ${lastName || ""}
Email: ${email}
Phone: ${phone || ""}
Company: ${company || ""}
Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Business:</strong> ${business || ""}</p>
        <p><strong>Reason:</strong> ${reason || ""}</p>
        <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || ""}</p>
        <p><strong>Company:</strong> ${company || ""}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

