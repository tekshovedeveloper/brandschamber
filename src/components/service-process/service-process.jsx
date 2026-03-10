"use client";

import styles from "./service-process.module.css";

export default function ServiceProcess({
  title,
  subtitle,
  steps = [],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.subheading}>{subtitle}</p>
      </div>

      <div className={styles.stepsRow}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.stepItem} ${styles[`step${index + 1}`] || ""}`}
          >
            <div className={styles.topRow}>
              <div className={styles.iconBox}>
                <img
                  src={step.icon}
                  alt={step.title}
                  className={styles.icon}
                />
              </div>

              {index !== steps.length - 1 && (
                <img
                  src="/assets/process/dotted-line.svg"
                  alt=""
                  className={styles.connector}
                />
              )}
            </div>

            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardText}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}