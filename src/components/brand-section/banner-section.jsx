"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./banner-section.module.css";
import MeetingModal from "@/components/MeetingModal/MeetingModal";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default function BrandSection({
  id,
  title = "YOUR BUSINESS DESERVES ITS OWN APP",
  description = `Your customers are on their phones — all day, every day. A well-built mobile app puts your business in their pocket, keeps them engaged, and gives you a direct line to the people who matter most. At Brands Chamber, we build mobile apps that are fast, functional, and built for real business results.`,
  highlightText = "From idea to App Store — we handle everything.",
  image = "/assets/logo-service/logo-banner.gif",
  imageAlt = "Brands Chamber service banner showcase",
  buttonText = "Book Your Free Consultation",
  defaultService = "",
  breadcrumbs = [],
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const [isMeetingOpen, setMeetingOpen] = useState(false);

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
    <>
      <section
        id={id}
        ref={sectionRef}
        className={`${styles.hero} ${inView ? styles.inView : ""}`}
      >
        <div className={styles.inner}>
          <div className={styles.content}>
            {hasBreadcrumbs && (
              <div className={styles.breadcrumbSlot}>
                <Breadcrumbs items={breadcrumbs} variant="hero" />
              </div>
            )}

            <h1
              className={`${styles.title} ${
                hasBreadcrumbs ? styles.titleWithBreadcrumbs : ""
              }`}
            >
              {title}
            </h1>

            <p className={styles.description}>{description}</p>

            {highlightText && (
              <p className={styles.highlightLine}>{highlightText}</p>
            )}

            <button
              type="button"
              className={styles.ctaButton}
              onClick={() => setMeetingOpen(true)}
            >
              {buttonText}
            </button>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <MeetingModal
        isOpen={isMeetingOpen}
        onClose={() => setMeetingOpen(false)}
        defaultService={defaultService}
      />
    </>
  );
}
