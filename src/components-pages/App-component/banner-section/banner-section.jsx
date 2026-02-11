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
           Innovative Mobile And Web App Development Services
          </h1>

          <p className={styles.description}>
           At {" "}
            <span className={styles.highlight}>Brands Chamber</span>
            , we turn ideas into powerful mobile and web applications that help businesses grow, connect, and thrive in the digital world. Whether you need a sleek mobile app 
            for customers or a custom software solution for your business, our expert developers are here to make it happen.
          </p>
        </div>

        {/* RIGHT: GIF / logo visual */}
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/app-service/android-app-development.gif"   // public/assets/logo-banner.gif
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