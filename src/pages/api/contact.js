import { Resend } from "resend";

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  // Allow CORS preflight just in case (harmless for same-origin)
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "GET,POST,OPTIONS");
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({ ok: true, message: "Contact API is up. Use POST." });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET,POST,OPTIONS");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { firstName, email, message } = req.body || {};

    if (!firstName || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ ok: false, error: "Invalid email." });
    }

    const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return res.status(500).json({ ok: false, error: "Server email config missing." });
    }

    const resend = new Resend(RESEND_API_KEY);

    const safeName = escapeHtml(firstName);
    const safeEmail = escapeHtml(email);
    const safeMsg = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `New contact form message from ${firstName}`,
      replyTo: email,
      text: `Name: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.5">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${safeMsg}</pre>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ ok: false, error: error.message || String(error) });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Unexpected server error." });
  }
}