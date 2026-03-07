"use client";

import styles from "./running-slider.module.css";

export default function RunningSlider({
  text = "Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages",
  speed = "60s",
}) {
  return (
    <section className={styles.sliderSectionMain}>
      <div className={styles.sliderSection} aria-label="Running text banner">
        <div className={styles.track} style={{ "--marquee-speed": speed }}>
            <div className={styles.group}>
            <span>{text}</span>
            <span>{text}</span>
            </div>
            <div className={styles.group} aria-hidden="true">
            <span>{text}</span>
            <span>{text}</span>
            </div>
        </div>


      </div>
    </section>
  );
}