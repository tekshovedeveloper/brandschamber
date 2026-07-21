"use client";

import { useEffect, useState } from "react";
import styles from "./offer-popup.module.css";

const MOBILE_QUERY = "(max-width: 768px)";
const MOBILE_POPUP_DELAY_MS = 10000;

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"ok" | "error" | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const shouldDelayPopup = window.matchMedia(MOBILE_QUERY).matches;
    const timerId = window.setTimeout(
      () => setIsOpen(true),
      shouldDelayPopup ? MOBILE_POPUP_DELAY_MS : 0
    );

    return () => window.clearTimeout(timerId);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    const payload = {
      fullName,
      email,
      phone,
      message,
    };

    try {
      const r = await fetch("/api/offer", {
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

      // optional: close popup shortly after success
      setTimeout(() => setIsOpen(false), 1200);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>

        <div className={styles.left}>
          <div className={styles.leftImage} />
          {/* <div className={styles.logoBlock}>
            <div className={styles.logoMark}>MWP</div>
            <div className={styles.logoText}>Meta Web Pro</div>
          </div> */}
        </div>

        <div className={styles.right}>
          <h2 className={styles.title}>
            EXCLUSIVE LIMITED-TIME OFFER – REGISTER TODAY!
          </h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>Full Name</span>
              <input
                className={styles.input}
                type="text"
                name="fullName"
                id="fullName"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email Address</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Phone Number</span>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                id="phone"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Message</span>
              <textarea
                className={styles.textarea}
                rows={3}
                name="message"
                id="message"
              />
            </label>

            {status === "ok" && (
              <p className={styles.successMsg}>Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>{errorMsg}</p>
            )}

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
