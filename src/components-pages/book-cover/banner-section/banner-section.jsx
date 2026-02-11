"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./banner-section.module.css";

export default function BrandSection({ id }) {
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
      id={id}
      ref={sectionRef}
      className={`${styles.hero} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.inner}>
        {/* LEFT: text */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            TRANSFORM YOUR
           
            BRAND IDENTITY WITH
           
            Brandschamber          </h1>

          <p className={styles.description}>
            At  Brandschamber , we offer expert{" "}
            <span className={styles.highlight}>Book cover services</span> in{" "}
            <span className={styles.highlight}>Florida</span>, crafting logos
            that define your brand’s identity with precision and purpose.
            Blending creativity with strategy, our logos are built to be clear,
            memorable, and impactful—ensuring your business stands out and
            connects instantly with your audience.
          </p>
        </div>

        {/* RIGHT: GIF / logo visual */}
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/logo-service/logo-banner.gif"   // public/assets/logo-banner.gif
              alt="Meta Web Pro logo"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 60vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}