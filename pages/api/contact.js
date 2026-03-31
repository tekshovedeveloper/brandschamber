// import { Resend } from "resend";

// export const config = {
//   api: { bodyParser: true },
// };

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     return res.status(200).json({ ok: true, where: "pages/api/contact.js", hint: "POST JSON to send email" });
//   }

//   if (req.method !== "POST") {
//     res.setHeader("Allow", ["GET", "POST"]);
//     return res.status(405).json({ ok: false, error: "Method Not Allowed" });
//   }

//   try {
//     const { firstName, email, message } = req.body || {};

//     if (!firstName || !email || !message) {
//       return res.status(400).json({ ok: false, error: "Missing required fields." });
//     }

//     const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     if (!emailOk) {
//       return res.status(400).json({ ok: false, error: "Invalid email." });
//     }

//     const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

//     if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
//       return res.status(500).json({ ok: false, error: "Missing env vars on server." });
//     }

//     const resend = new Resend(RESEND_API_KEY);

//     const { error } = await resend.emails.send({
//       from: CONTACT_FROM_EMAIL,
//       to: CONTACT_TO_EMAIL,
//       subject: `New contact form message from ${firstName}`,
//       replyTo: email,
//       text: `Name: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
//     });

//     if (error) return res.status(500).json({ ok: false, error: error.message || String(error) });

//     return res.status(200).json({ ok: true });
//   } catch (e) {
//     return res.status(500).json({ ok: false, error: "Unexpected server error." });
//   }
// }



import nodemailer from "nodemailer";

export const config = {
  api: { bodyParser: true },
};

export default async function handler(req, res) {
  // Health check
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      where: "pages/api/contact.js",
      hint: "POST JSON to send email",
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { firstName, email, message } = req.body || {};

    // Validate form fields
    if (!firstName || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ ok: false, error: "Invalid email." });
    }

    // Load environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return res.status(500).json({ ok: false, error: "Missing SMTP env vars." });
    }

    // Configure SMTP transporter with STARTTLS for secure sending
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT), // 587 recommended
      secure: false,             // false for STARTTLS
      requireTLS: true,          // enforce TLS
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: CONTACT_FROM_EMAIL,   // e.g., noreply@brandschamber.com
      to: CONTACT_TO_EMAIL,       // recipient
      replyTo: email,             // user email
      subject: `New contact form message from ${firstName}`,
      text: `Name: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      ok: true,
      message: "Email sent successfully",
      info,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      ok: false,
      error: error.message || "Unexpected server error.",
    });
  }
}