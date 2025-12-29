"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./pricing.module.css";

const CATEGORIES = ["Logo", "Website", "Animation", "Branding", "SEO", "SMM", "Label Design"];

// Your provided pricing cards (Logo category)
const LOGO_PACKAGES = [
  {
    title: "Logo Basic",
    price: "$49",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "4 Original Logo Concepts",
      "2 Dedicated Logo Designer",
      "4 Revisions",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG Only",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
  {
    title: "Logo Professional",
    price: "$199",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "12 Original Logo Concepts",
      "4 Dedicated Logo Designer (Industry Specific)",
      "Unlimited Revisions",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Email Signature Design",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
      "24/7 Support (Email, Chat, Call, SMS, Whatsapp)",
    ],
  },
  {
    title: "Logo Elite",
    price: "$399",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Unlimited Original Logo Concepts",
      "8 Dedicated Logo Designer (Industry Specific)",
      "Unlimited Revisions",
      "Social Media Page Design",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Email Signature Design",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
  {
    title: "Logo Infinite",
    price: "$1249",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Unlimited Original Logo Concepts",
      "12 Dedicated Logo Designer (Industry Specific)",
      "Unlimited Revisions",
      "5 Page Informative Website",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Brand Book",
      "Email Signature Design",
      "Social Media Designs (Facebook, Twitter, Instagram)",
      "2 Sided Flyer OR Bi-Fold Brochure Design",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
  {
    title: "Mascot Logo",
    price: "$599",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "2 Mascot Logo Concepts",
      "Unlimited Revisions",
      "Hand drawn Sketch",
      "Presentation on mockup",
      "24 - 48 Business Hours Turn Around Time",
      "File Formats: Ai,Eps,Png,Jpeg,pdf",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Logo");

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

  const packages = useMemo(() => {
    // Only Logo is filled (same as your HTML). Add other categories here.
    if (activeCategory === "Logo") return LOGO_PACKAGES;
    return []; // placeholder for other categories
  }, [activeCategory]);

  return (
    <section className={styles.pricingBox} id="pricing">
      {/* Heading */}
      <div
        ref={headingRef}
        className={`${styles.pricingHeading} ${
          headingInView ? styles.pricingAnimate : ""
        }`}
      >
        <h3>Affordable Pricing</h3>
        <p>
          We at Brands Chamber thrive to ensure that our customers are Our
          packages have been meticulously created for all business. Obtain
          appealing design deals at special prices to elevate your brand. We
          guarantee the highest level of client satisfaction while providing our
          great services at the most competitive prices!
        </p>
      </div>

      {/* Category buttons */}
      <div className={styles.pricingButtonRow}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.pricingSingleButton} ${
              activeCategory === cat ? styles.activeCategory : ""
            }`}
            onClick={() => setActiveCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pricing cards */}
      <div
        ref={cardsRef}
        className={`${styles.pricingContainer} ${
          cardsInView ? styles.inView : ""
        }`}
      >
        {packages.length === 0 ? (
          <div className={styles.emptyState}>
            Packages for <b>{activeCategory}</b> are not added yet.
          </div>
        ) : (
          packages.map((pkg) => (
            <div key={pkg.title} className={styles.pricingCard}>
              <div className={styles.mainTextDiv}>
                <h2 className={styles.websiteName}>{pkg.title}</h2>
                <p className={styles.mainText}>{pkg.desc}</p>
              </div>

              <h3 className={styles.websitePrice}>{pkg.price}</h3>

              <div className={styles.servicesList}>
                <ul>
                  {pkg.features.map((f, idx) => (
                    <li key={`${pkg.title}-${idx}`}>{f}</li>
                  ))}
                </ul>
              </div>

              <button className={styles.orderButton} type="button">
                Order Now
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}