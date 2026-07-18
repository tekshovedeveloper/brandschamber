"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import styles from "./single-portfolio.module.css";

export default function PortfolioGrid({
  title,
  heading = "Popular creative work",
  subheading = "Hover cards to scroll through our top websites, logos, branding and animations. Click any card to open the full gallery.",
  items = [],
  initialCount = 7,
  loadStep = 7,
}) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [activeIndex, setActiveIndex] = useState(null);

  const visibleItems = items.slice(0, visibleCount);
  const canLoadMore = visibleCount < items.length;

  const groupedItems = useMemo(() => {
    const groups = [];
    for (let i = 0; i < visibleItems.length; i += 7) {
      groups.push(visibleItems.slice(i, i + 7));
    }
    return groups;
  }, [visibleItems]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadStep, items.length));
  };

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? visibleItems.length - 1 : prev - 1;
    });
  }, [visibleItems.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === visibleItems.length - 1 ? 0 : prev + 1;
    });
  }, [visibleItems.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showPrev, showNext]);

  if (!items.length) return null;

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] : null;
  const getPortfolioAlt = (item, index) => {
    const providedAlt = typeof item?.alt === "string" ? item.alt.trim() : "";
    const isPlaceholderAlt = /^logo\s+\d+$/i.test(providedAlt);

    return providedAlt && !isPlaceholderAlt
      ? providedAlt
      : `${title} portfolio item ${index + 1}`;
  };
  const tileClasses = [
    styles.a,
    styles.c,
    styles.d,
    styles.b,
    styles.e,
    styles.f,
    styles.g,
  ];

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        <div className={styles.groupsWrapper}>
          {groupedItems.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.cardsGrid}>
              {group.map((item, indexInGroup) => {
                const globalIndex = groupIndex * 7 + indexInGroup;

                return (
                  <div
                    key={item.id ?? globalIndex}
                    className={tileClasses[indexInGroup]}
                  >
                    <article
                      className={styles.card}
                      onClick={() => openModal(globalIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          openModal(globalIndex);
                        }
                      }}
                    >
                      <div className={styles.mediaViewport}>
                        <div className={styles.mediaInner}>
                          {item.video ? (
                            <video
                              src={item.video}
                              className={styles.media}
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          ) : (
                            <Image
                              src={item.image}
                              alt={getPortfolioAlt(item, globalIndex)}
                              fill
                              sizes="(max-width: 1200px) 100vw, 356px"
                              className={styles.media}
                            />
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {canLoadMore && (
          <div className={styles.buttonRow}>
            <button
              type="button"
              onClick={handleLoadMore}
              className={styles.loadMoreButton}
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {activeItem && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              type="button"
              aria-label="Previous"
              onClick={showPrev}
            >
              ‹
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              type="button"
              aria-label="Next"
              onClick={showNext}
            >
              ›
            </button>

            <div className={styles.modalImageWrapper}>
              {activeItem.video ? (
                <video
                  src={activeItem.video}
                  className={styles.modalImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={activeItem.image}
                  alt={getPortfolioAlt(activeItem, activeIndex)}
                  fill
                  sizes="90vw"
                  className={styles.modalImage}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
