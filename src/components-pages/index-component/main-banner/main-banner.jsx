"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./main-banner.module.css";
import Link from "next/link";

export default function MainBanner() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

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
    <section
      ref={sectionRef}
      className={`${styles.mainBannerContainer} ${inView ? styles.inView : ""}` }
    >
      <div className={styles.mainBannerFirstContainer}>
        {/* Left: text + button */}
        <div className={styles.rightSideDiv}>
          <h1 className={styles.mainHeading}>
            YOUR BRAND’S CREATIVE
            <br />
            POWERHOUSE
          </h1>

          <p className={styles.paragraph}>
            We&apos;re a creative and development-driven digital agency committed
            to transforming ideas into impactful brand experiences. With over
            5,000 successful client collaborations worldwide, we&apos;ve helped
            businesses build and revamp their brand identity through thoughtful
            design and reliable digital solutions.
          </p>
          <Link href="#contact">
            <button className={styles.homeMainBannerButton} type="button">
              Chat With Us
            </button>
          
          </Link>
        </div>

        {/* Right: stacked images */}
        <div className={styles.leftSideDiv}>
          <div className={styles.firstImageContainer}>
            <div className={styles.firstImageFirstContainer}>
              <img src="/assets/home/people1.svg" alt="team 1" />
            </div>
          </div>

          <div className={styles.secondImageContainer}>
            <div className={styles.firstImageSecondContainer}>
              <img src="/assets/home/people2.svg" alt="team 2" />
            </div>
            <div className={styles.secondImageSecondContainer}>
              <img src="/assets/home/people4.svg" alt="team 3" />
            </div>
          </div>

          <div className={styles.thirdImageContainer}>
            <div className={styles.firstImageThirdContainer}>
              <img src="/assets/home/people3.svg" alt="team 4" />
            </div>
            <div className={styles.secondImageThirdContainer}>
              <img src="/assets/home/people5.svg" alt="team 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}