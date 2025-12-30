"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";

export default function Contact({id}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(null); // "ok" | "error" | null
const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id}
      ref={sectionRef}
      className={`${styles.showContactBox} ${inView ? styles.inView : ""}`}
      
    >
      {/* Left side */}
      <div className={styles.showContactUsHeading}>
        <h3>Let's Talk Don't Be Shy, Say Hi!</h3>
        <p>Have an idea? Fill in the form to get in touch with us.</p>

        <div className={styles.contactInfo}>
          <div className={styles.contactInfoDiv}>
            <img src="/assets/home/phone.svg" alt="contact" />
            <a href="tel:+18555359320">+1 (385) 391-1875</a>
          </div>

          <div className={styles.contactInfoDiv}>
            <img src="/assets/home/mail.svg" alt="email" />
            <a href="mailto:contact@brandschamber.com">
              contact@brandschamber.com
            </a>
          </div>

          <div className={styles.contactInfoDiv}>
            <img src="/assets/home/location.svg" alt="location" />
            <a href="#">
              220 S Almaden Ave, San Jose,
              <br />
              CA 95113, USA
            </a>
          </div>
        </div>

        <div className={styles.iconContainer}>
          <h3 className={styles.iconContainerHeading}>Follow Us</h3>
          <p>Follow Us on Social Network</p>

          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/tekshove/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <img
                src="/assets/home/facebook.svg"
                className={styles.icon}
                alt="facebook"
              />
              <img
                src="/assets/home/facebook2.svg"
                className={styles.onHoverIcon}
                alt="facebook"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/tekshove/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <img
                src="/assets/home/indeed.svg"
                className={styles.icon}
                alt="linkedin"
              />
              <img
                src="/assets/home/indeed2.svg"
                className={styles.onHoverIcon}
                alt="linkedin"
              />
            </a>

            <a href="#" className={styles.iconLink}>
              <img
                src="/assets/home/instagram.svg"
                className={styles.icon}
                alt="instagram"
              />
              <img
                src="/assets/home/instagram2.svg"
                className={styles.onHoverIcon}
                alt="instagram"
              />
            </a>

            <a href="#" className={styles.iconLink}>
              <img
                src="/assets/home/twitter.svg"
                className={styles.icon}
                alt="twitter"
              />
              <img
                src="/assets/home/twitter2.svg"
                className={styles.onHoverIcon}
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className={styles.formContainerWrapper}>
        <div className={styles.formContainer}>
       <form
  className={styles.form}
  onSubmit={async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json().catch(() => ({}));

      if (!r.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Failed to send.");
        return;
      }

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }}
>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textArea}
              />
            </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>
          </form>
        </div>
      </div>
    </section>
  );
}