"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Servicing-pricing-stripe.module.css";
import {
  SERVICE_CATEGORIES,
  SERVICE_PRICING_DATA,
} from "../service-pricing-name/servicePricingData";
import MeetingModal from "../MeetingModal/MeetingModal";

export default function ServicePricingStripe({ id, service, currentService }) {
  const router = useRouter();

  const serviceSpecific = !!service;
  const initialCategory = service || "Logo";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const [headingInView, setHeadingInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [selectedService, setSelectedService] = useState("Logo");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [loadingPackage, setLoadingPackage] = useState("");

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

  useEffect(() => {
    if (service && SERVICE_PRICING_DATA[service]) {
      setActiveCategory(service);
    }
  }, [service]);

  const packages = useMemo(
    () => SERVICE_PRICING_DATA[activeCategory] ?? [],
    [activeCategory]
  );

  const handleOrderNow = async (pkg) => {
    try {
      setLoadingPackage(pkg.title);

      await router.push({
        pathname: "/checkout",
        query: {
          type: "service-package",
          category: activeCategory,
          packageTitle: pkg.title,
        },
      });
    } catch (error) {
      console.error("Checkout navigation error:", error);
      alert("Something went wrong while opening checkout.");
    } finally {
      setLoadingPackage("");
    }
  };

  return (
    <section id={id} className={styles.pricingBox}>
      <div
        ref={headingRef}
        className={`${styles.pricingHeading} ${
          headingInView ? styles.pricingAnimate : ""
        }`}
      />

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

      {serviceSpecific && (
        <div className={styles.header}>
          <h2 className={styles.heading}>AFFORDABLE PRICING</h2>
        </div>
      )}

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
            <div className={styles.cardInner}>
              <div className={styles.mainTextDiv}>
                <h3 className={styles.websiteName}>{pkg.title}</h3>
                {pkg.desc && <p className={styles.mainText}>{pkg.desc}</p>}
              </div>

              <p className={styles.websitePrice}>{pkg.price}</p>

              <div className={styles.servicesList}>
                <ul>
                  {pkg.features.map((f, idx) => (
                    <li key={`${pkg.title}-${idx}`}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.buttonGroup}>
                <button
                  className={styles.inquireButton}
                  type="button"
                  onClick={() => {
                    setSelectedService(activeCategory);
                    setSelectedPackage(pkg.title);
                    setShowMeetingModal(true);
                  }}
                >
                  Inquire Now
                </button>

                <button
                  className={styles.orderNowButton}
                  type="button"
                  onClick={() => handleOrderNow(pkg)}
                  disabled={loadingPackage === pkg.title}
                >
                  {loadingPackage === pkg.title ? "Processing..." : "Order Now"}
                </button>
              </div>
            </div>
          </div>
        ))}

        {packages.length === 0 && (
          <div className={styles.emptyState}>
            Packages for <strong>{activeCategory}</strong> coming soon.
          </div>
        )}
      </div>

      <MeetingModal
        isOpen={showMeetingModal}
        onClose={() => setShowMeetingModal(false)}
        defaultService={currentService || activeCategory}
        defaultMessage={
          selectedPackage
            ? `Hi, I’m interested in the ${selectedPackage} package. Please share next steps.`
            : ""
        }
      />
    </section>
  );
}
