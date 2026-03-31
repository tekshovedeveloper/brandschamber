// import { Resend } from "resend";

// export const config = {
//   api: { bodyParser: true },
// };

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     return res.status(200).json({
//       ok: true,
//       where: "pages/api/offer.js",
//       hint: "POST JSON to send email from popup form",
//     });
//   }

//   if (req.method !== "POST") {
//     res.setHeader("Allow", ["GET", "POST"]);
//     return res
//       .status(405)
//       .json({ ok: false, error: "Method Not Allowed" });
//   }

//   try {
//     const { fullName, email, phone, message } = req.body || {};

//     // Required fields
//     if (!fullName || !email || !message) {
//       return res
//         .status(400)
//         .json({ ok: false, error: "Missing required fields." });
//     }

//     const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     if (!emailOk) {
//       return res
//         .status(400)
//         .json({ ok: false, error: "Invalid email." });
//     }

//     const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
//       process.env;

//     if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
//       return res
//         .status(500)
//         .json({ ok: false, error: "Missing env vars on server." });
//     }

//     const resend = new Resend(RESEND_API_KEY);

//     const text =
//       `New offer popup submission\n\n` +
//       `Name: ${fullName}\n` +
//       `Email: ${email}\n` +
//       (phone ? `Phone: ${phone}\n` : "") +
//       `\nMessage:\n${message}`;

//     const { error } = await resend.emails.send({
//       from: CONTACT_FROM_EMAIL,
//       to: CONTACT_TO_EMAIL,
//       subject: `New offer registration from ${fullName}`,
//       replyTo: email,
//       text,
//     });

//     if (error) {
//       return res.status(500).json({
//         ok: false,
//         error: error.message || String(error),
//       });
//     }

//     return res.status(200).json({ ok: true });
//   } catch (e) {
//     return res
//       .status(500)
//       .json({ ok: false, error: "Unexpected server error." });
//   }
// }



// pages/api/offer.js
import nodemailer from "nodemailer";

export const config = {
  api: { bodyParser: true },
};

export default async function handler(req, res) {
  // Health check
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      where: "pages/api/offer.js",
      hint: "POST JSON to send email from popup form",
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { fullName, email, phone, message } = req.body || {};

    // Required fields
    if (!fullName || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    // Basic email validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ ok: false, error: "Invalid email." });
    }

    // Load environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return res.status(500).json({ ok: false, error: "Missing SMTP environment variables." });
    }

    // Configure SMTP transporter with STARTTLS (port 587)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: false, // false for STARTTLS
      requireTLS: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Prepare email content
    const text =
      `New offer popup submission\n\n` +
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      (phone ? `Phone: ${phone}\n` : "") +
      `\nMessage:\n${message}`;

    // Send email
    const info = await transporter.sendMail({
      from: CONTACT_FROM_EMAIL, // e.g., noreply@brandschamber.com
      to: CONTACT_TO_EMAIL,     // e.g., contact@brandschamber.com
      replyTo: email,           // user email for replies
      subject: `New offer registration from ${fullName}`,
      text,
    });

    return res.status(200).json({
      ok: true,
      message: "Offer submission sent successfully",
      info,
    });
  } catch (error) {
    console.error("Offer submission error:", error);
    return res.status(500).json({
      ok: false,
      error: error.message || "Unexpected server error.",
    });
  }
}