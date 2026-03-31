// import { Resend } from "resend";

// export const config = {
//   api: { bodyParser: true },
// };

// export default async function handler(req, res) {
//   // health check
//   if (req.method === "GET") {
//     return res.status(200).json({
//       ok: true,
//       where: "pages/api/meeting.js",
//       hint: "POST JSON to book a meeting",
//     });
//   }

//   if (req.method !== "POST") {
//     res.setHeader("Allow", ["GET", "POST"]);
//     return res
//       .status(405)
//       .json({ ok: false, error: "Method Not Allowed" });
//   }

//   try {
//     const { fullName, email, phone, service, date, time, message } =
//       req.body || {};

//     // required fields
//     if (!fullName || !email || !service || !date || !time) {
//       return res.status(400).json({
//         ok: false,
//         error: "Missing required fields.",
//       });
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
//       return res.status(500).json({
//         ok: false,
//         error: "Missing env vars on server.",
//       });
//     }

//     const resend = new Resend(RESEND_API_KEY);

//     const text =
//       `New meeting booking request\n\n` +
//       `Name: ${fullName}\n` +
//       `Email: ${email}\n` +
//       (phone ? `Phone: ${phone}\n` : "") +
//       `Service: ${service}\n` +
//       `Preferred date: ${date}\n` +
//       `Preferred time: ${time}\n\n` +
//       `Message:\n${message || "(no message)"}`;

//     const { error } = await resend.emails.send({
//       from: CONTACT_FROM_EMAIL,
//       to: CONTACT_TO_EMAIL,
//       subject: `New meeting request from ${fullName}`,
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
//     return res.status(500).json({
//       ok: false,
//       error: "Unexpected server error.",
//     });
//   }
// }



// pages/api/meeting.js
import nodemailer from "nodemailer";

export const config = {
  api: { bodyParser: true },
};

export default async function handler(req, res) {
  // Health check
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      where: "pages/api/meeting.js",
      hint: "POST JSON to book a meeting",
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { fullName, email, phone, service, date, time, message } = req.body || {};

    // Validate required fields
    if (!fullName || !email || !service || !date || !time) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ ok: false, error: "Invalid email." });
    }

    // Load environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return res.status(500).json({ ok: false, error: "Missing SMTP environment variables." });
    }

    // Configure SMTP transporter (STARTTLS)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT), // 587 recommended
      secure: false,             // STARTTLS
      requireTLS: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Build email text
    const text =
      `New meeting booking request\n\n` +
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      (phone ? `Phone: ${phone}\n` : "") +
      `Service: ${service}\n` +
      `Preferred date: ${date}\n` +
      `Preferred time: ${time}\n\n` +
      `Message:\n${message || "(no message)"}`;

    // Send email
    const info = await transporter.sendMail({
      from: CONTACT_FROM_EMAIL, // e.g., noreply@brandschamber.com
      to: CONTACT_TO_EMAIL,     // e.g., contact@brandschamber.com
      replyTo: email,           // user email for direct replies
      subject: `New meeting request from ${fullName}`,
      text,
    });

    return res.status(200).json({
      ok: true,
      message: "Meeting request sent successfully",
      info,
    });
  } catch (error) {
    console.error("Meeting request error:", error);
    return res.status(500).json({
      ok: false,
      error: error.message || "Unexpected server error.",
    });
  }
}