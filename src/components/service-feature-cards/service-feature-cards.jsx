"use client";

import styles from "./service-feature-cards.module.css";

export default function ServiceFeatureCards({
  title,
  subtitle,
  cards = [],
}) {
  if (!cards.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.subheading}>{subtitle}</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.iconWrap}>
                <img
                  src={card.icon}
                  alt={`${card.title} feature icon`}
                  className={`${styles.icon} ${styles.defaultIcon}`}
                />
                <img
                  src={card.hoverIcon}
                  alt={`${card.title} feature hover icon`}
                  className={`${styles.icon} ${styles.hoverIcon}`}
                />
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>

              <ul className={styles.featureList}>
                {card.features?.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              {card.bestFor && (
                <p className={styles.bestFor}>
                  <span>Best for:</span> {card.bestFor}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
