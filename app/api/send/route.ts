import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, budget, timeline } = await req.json();

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    const ownerMail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Message: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="font-size:12px;color:#666;">Sent from your portfolio contact form.</p>
      `,
    };

    const confirmationMail = {
      from: `"Betelhem Tekle" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Message Received: ${subject}`,
      html: `
        <div style="font-family:Arial, sans-serif; line-height:1.6; color:#333;">
          <h2 style="color:#7B1E7A;">Hi ${name},</h2>
          <p>Thank you for reaching out! 🌸</p>
          <p>I’ve received your message and will get back to you as soon as possible.</p>
          <p style="margin-top:16px;">Here’s a summary of what you sent:</p>
          <div style="background:#f9f4ff; padding:12px; border-radius:8px;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
            <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p style="margin-top:20px;">Warm regards,<br/><strong>Betelhem Tekle</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(confirmationMail);

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
