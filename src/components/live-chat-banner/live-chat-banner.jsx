"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./live-chat-banner.module.css";
import MeetingModal from "../MeetingModal/MeetingModal";

export default function RevealBanner({ id, onChatClick }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
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
        id={id}
        ref={sectionRef}
        className={`${styles.section} ${inView ? styles.inView : ""}`}
      >
        <div className={styles.inner}>
          <h2 className={styles.title}>
            LET&apos;S WORK <br />
            TOGETHER!
          </h2>

          <button
            type="button"
            className={styles.cta}
            onClick={handleBookMeetingClick}
            aria-label="Book Now"
          >
            <span className={styles.ctaIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
            <span className={styles.ctaText}>Book Now</span>
          </button>
        </div>
      </section>

      <MeetingModal
        isOpen={showMeetingModal}
        onClose={() => setShowMeetingModal(false)}
        defaultService=""
      />
    </>
  );
}