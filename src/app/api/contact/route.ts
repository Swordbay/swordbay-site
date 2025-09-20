import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      business,
      reason,
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    } = body || {};

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const FROM =
      process.env.CONTACT_FROM || "Swordbay <info@swordbay.com>";
    const TO = process.env.CONTACT_TO || "founder@swordbay.com";

    await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `New Contact Form Submission (${reason || "No reason"})`,
      text: `
Business: ${business || ""}
Reason: ${reason || ""}
Name: ${firstName || ""} ${lastName || ""}
Email: ${email}
Phone: ${phone || ""}
Company: ${company || ""}
Message:
${message}
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
        <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
