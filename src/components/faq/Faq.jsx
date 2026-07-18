"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import faqData from "./faq-data";
import styles from "./faq.module.css";

export default function Faq({ breadcrumbs = [] }) {
  const { title, subtitle, groups } = faqData;
  const [openId, setOpenId] = useState(null);
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {hasBreadcrumbs && (
            <div className={styles.breadcrumbSlot}>
              <Breadcrumbs items={breadcrumbs} variant="centered" />
            </div>
          )}

          <h1
            className={`${styles.title} ${
              hasBreadcrumbs ? styles.titleWithBreadcrumbs : ""
            }`}
          >
            {title}
          </h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <div className={styles.wrapper}>
          {groups.map((group) => (
            <div key={group.id} className={styles.group}>
              <div className={styles.groupLabel}>{group.label}</div>

              <div className={styles.items}>
                {group.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`${styles.item} ${
                        isOpen ? styles.itemOpen : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={styles.questionRow}
                        onClick={() => handleToggle(item.id)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.questionText}>
                          <span className={styles.qPrefix}>Q:</span>{" "}
                          {item.question}
                        </span>

                        <span className={styles.iconCircle}>
                          <svg
                            className={`${styles.arrowIcon} ${
                              isOpen ? styles.arrowOpen : ""
                            }`}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M9 6l6 6-6 6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`${styles.answer} ${
                          isOpen ? styles.answerOpen : ""
                        }`}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
