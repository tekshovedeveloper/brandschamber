"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Servicing-pricing.module.css";
import {
  SERVICE_CATEGORIES,
  SERVICE_PRICING_DATA,
} from "./servicePricingData";

/**
 * ServicePricing
 *
 * Props:
 * - id?: string        – section id for anchor links.
 * - service?: string   – category name (e.g. "Logo", "Website").
 *                        If provided => only that category shown (no tabs).
 *                        If omitted  => full tabbed pricing (all categories).
 */
export default function ServicePricing({ id, service }) {
  const serviceSpecific = !!service;
  const initialCategory = service || "Logo";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const [headingInView, setHeadingInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHeadingInView(true),
      { threshold: 0.2 }
    );
    const obs2 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setCardsInView(true),
      { threshold: 0.15 }
    );

    if (headingRef.current) obs1.observe(headingRef.current);
    if (cardsRef.current) obs2.observe(cardsRef.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  // keep activeCategory in sync if `service` prop changes
  useEffect(() => {
    if (service && SERVICE_PRICING_DATA[service]) {
      setActiveCategory(service);
    }
  }, [service]);

  const packages = useMemo(
    () => SERVICE_PRICING_DATA[activeCategory] ?? [],
    [activeCategory]
  );

  return (
    <section id={id} className={styles.pricingBox}>
      {/* Heading */}
      <div
        ref={headingRef}
        className={`${styles.pricingHeading} ${
          headingInView ? styles.pricingAnimate : ""
        }`}
      >
        {/* <h3>Affordable Pricing</h3>
        <p>
          We at Brands Chamber thrive to ensure that our customers are. Our
          packages have been meticulously created for all businesses. Obtain
          appealing design deals at special prices to elevate your brand. We
          guarantee the highest level of client satisfaction while providing our
          great services at the most competitive prices!
        </p> */}
      </div>

      {/* Category tabs (only on global pricing, not on individual service pages) */}
      {!serviceSpecific && (
        <div className={styles.pricingButtonRow}>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.pricingSingleButton} ${
                activeCategory === cat ? styles.activeCategory : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Optional label on service pages */}
      {serviceSpecific && (
  <div className={styles.serviceDividerWrapper}>
    <span className={styles.serviceDividerText}>{service} Packages</span>
    <span className={styles.serviceDividerLine} />
  </div>
)}

      {/* Cards */}
      <div
        ref={cardsRef}
        className={`${styles.pricingContainer} ${
          cardsInView ? styles.inView : ""
        }`}
      >
        {packages.map((pkg) => (
          <div
            key={`${activeCategory}-${pkg.title}`}
            className={styles.pricingCard}
          >
            <div className={styles.mainTextDiv}>
              <h2 className={styles.websiteName}>{pkg.title}</h2>
              {pkg.desc && <p className={styles.mainText}>{pkg.desc}</p>}
            </div>

            <h3 className={styles.websitePrice}>{pkg.price}</h3>

            <div className={styles.servicesList}>
              <ul>
                {pkg.features.map((f, idx) => (
                  <li key={`${pkg.title}-${idx}`}>{f}</li>
                ))}
              </ul>
            </div>

            <button type="button" className={styles.orderButton}>
              Order Now
            </button>
          </div>
        ))}

        {packages.length === 0 && (
          <div className={styles.emptyState}>
            Packages for <strong>{activeCategory}</strong> coming soon.
          </div>
        )}
      </div>
    </section>
  );
}