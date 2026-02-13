// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import styles from "./live-chat-banner.module.css";

// export default function RevealBanner({
//   imageSrc = "/assets/live-chat-banner.jpg", // change to your image path
//   imageAlt = "We make the difference",
//   onChatClick,
// }) {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   // Add .inView when the section enters viewport (like data-bg-animation="ro-reveal-from-bottom")
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           obs.disconnect(); // run only once
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`${styles.section} ${inView ? styles.inView : ""}`}
//     >
//       {/* Live Chat button */}
//       <div className={styles.chatWrapper}>
//         <button
//           type="button"
//           className={styles.chatButton}
//           onClick={onChatClick}
//         >
//           Live Chat Now
//         </button>
//       </div>

//       {/* Black background + animated image */}
//       <div className={styles.bgWrapper}>
//         {/* This is equivalent to .background-layer > .inner in the WP CSS */}
//         <div className={styles.bgInner}>
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             priority
//             sizes="100vw"
//             className={styles.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }











"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./live-chat-banner.module.css";

/* ------------ BOOK MEETING MODAL (JS, no TS types) ------------ */

function MeetingModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | null
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const service = String(formData.get("service") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const message = String(formData.get("message") || "");

    const payload = {
      fullName,
      email,
      phone,
      service,
      date,
      time,
      message,
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

      // close shortly after success
      setTimeout(() => onClose(), 1200);
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
          onClick={onClose}
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
          <h2 className={styles.title}>Book a Meeting</h2>
          <p className={styles.subtitle}>
            Choose your preferred date, time and service. We’ll confirm your
            meeting by email.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Full Name</span>
                <input
                  className={styles.input}
                  type="text"
                  name="fullName"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Email Address</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  required
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Phone Number</span>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Service</span>
                <select
                  className={`${styles.input} ${styles.select}`}
                  name="service"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web-design">
                    Web Design &amp; Development
                  </option>
                  <option value="branding">Logo &amp; Branding</option>
                  <option value="ecommerce">E‑commerce Solutions</option>
                  <option value="seo">SEO &amp; Marketing</option>
                  <option value="maintenance">
                    Website Maintenance &amp; Support
                  </option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Preferred Date</span>
                <input
                  className={styles.input}
                  type="date"
                  name="date"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Preferred Time</span>
                <input
                  className={styles.input}
                  type="time"
                  name="time"
                  required
                />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Message / Notes</span>
              <textarea
                className={styles.textarea}
                rows={3}
                name="message"
              />
            </label>

            {status === "ok" && (
              <p className={styles.successMsg}>Request sent successfully!</p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>{errorMsg}</p>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Book Meeting"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ------------ MAIN BANNER COMPONENT ------------ */

export default function RevealBanner({
  imageSrc = "/assets/home/live-chat-banner.png", // change to your image path
  imageAlt = "We make the difference",
  onChatClick,
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  // Add .inView when the section enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleBookMeetingClick = () => {
    if (onChatClick) onChatClick();
    setShowMeetingModal(true);
  };

 return (
  <>
    <section
      ref={sectionRef}
      className={`${styles.section} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.bgWrapper}>
        <div className={styles.bgInner}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.textOverlay}>
            <div className={styles.marquee}>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
          </div>
          </div>
        </div>
      </div>

      {/* Button below banner */}
      <div className={styles.chatWrapper}>
        <button
          type="button"
          className={styles.chatButton}
          onClick={handleBookMeetingClick}
        >
          Book Meeting
        </button>
      </div>
    </section>

    <MeetingModal
      isOpen={showMeetingModal}
      onClose={() => setShowMeetingModal(false)}
    />
  </>

  );
}