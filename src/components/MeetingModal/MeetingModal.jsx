"use client";

import { useEffect, useState } from "react";
import styles from "./meeting-modal.module.css";

const SERVICES = [
  "Logo",
  "Website",
  "Animation",
  "Branding",
  "SEO",
  "SMM",
  "Label Design",
];

export default function MeetingModal({
  isOpen,
  onClose,
  defaultService = "",
  defaultMessage = "",
}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | null
  const [errorMsg, setErrorMsg] = useState("");

  // to prefill textarea when opened from pricing (optional)
  useEffect(() => {
    if (!isOpen) return;
    const textarea = document.querySelector(`textarea[name="message"]`);
    if (textarea && defaultMessage) textarea.value = defaultMessage;
  }, [isOpen, defaultMessage]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      date: String(formData.get("date") || ""),
      time: String(formData.get("time") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const r = await fetch("/api/meeting", {
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

      setTimeout(() => onClose(), 1200);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className={styles.left}>
          <div className={styles.leftImage} />
        </div>

        <div className={styles.right}>
          <h2 className={styles.title}>Book a Meeting</h2>
          <p className={styles.subtitle}>
            Choose your preferred date, time and service. We’ll confirm your
            meeting by email.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Full Name</span>
                <input className={styles.input} type="text" name="fullName" required />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Email Address</span>
                <input className={styles.input} type="email" name="email" required />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Phone Number</span>
                <input className={styles.input} type="tel" name="phone" />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Service</span>
                <select
                  className={`${styles.input} ${styles.select}`}
                  name="service"
                  required
                  defaultValue={defaultService}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Preferred Date</span>
                <input className={styles.input} type="date" name="date" required />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Preferred Time</span>
                <input className={styles.input} type="time" name="time" required />
              </label>
            </div> */}

            <label className={styles.field}>
              <span className={styles.label}>Message / Notes</span>
              <textarea className={styles.textarea} rows={3} name="message" />
            </label>

            {status === "ok" && (
              <p className={styles.successMsg}>Request sent successfully!</p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>{errorMsg}</p>
            )}

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? "Sending..." : "Book Meeting"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
