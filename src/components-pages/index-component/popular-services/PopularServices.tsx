"use client";

import { useState, useRef, useEffect, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./popular-services.module.css";

const data = {
  logos: [
    "/assets/popular/app-1.png",
    "/assets/popular/app-2.png",
    "/assets/popular/app-3.png",
    "/assets/popular/app-4.png",
    "/assets/popular/app-5.png",
    "/assets/popular/app-6.png",
  ],
  websites: [
    "/assets/popular/web-1.png",
    "/assets/popular/web-2.png",
    "/assets/popular/web-3.png",
    "/assets/popular/web-4.png",
    "/assets/popular/web-5.png",
    "/assets/popular/web-6.png",
  ],
  branding: [
    "/assets/popular/app-1.png",
    "/assets/popular/app-2.png",
    "/assets/popular/app-3.png",
    "/assets/popular/app-4.png",
    "/assets/popular/app-5.png",
    "/assets/popular/app-6.png",
  ],
  animations: [
    "/assets/popular/app-1.png",
    "/assets/popular/app-2.png",
    "/assets/popular/app-3.png",
    "/assets/popular/app-4.png",
    "/assets/popular/app-5.png",
    "/assets/popular/app-6.png",
  ],
  videoEditing: [
    "/assets/popular/app-1.png",
    "/assets/popular/app-2.png",
    "/assets/popular/app-3.png",
    "/assets/popular/app-4.png",
    "/assets/popular/app-5.png",
    "/assets/popular/app-6.png",
  ],
  UI: [
    "/assets/popular/app-1.png",
    "/assets/popular/app-2.png",
    "/assets/popular/app-3.png",
    "/assets/popular/app-4.png",
    "/assets/popular/app-5.png",
    "/assets/popular/app-6.png",
  ],
  GraphicsDesigning: [
    "/assets/popular/app-1.png",
    "/assets/popular/app-2.png",
    "/assets/popular/app-3.png",
    "/assets/popular/app-4.png",
    "/assets/popular/app-5.png",
    "/assets/popular/app-6.png",
  ],
} as const;

type Category = keyof typeof data;
type OpenHandler = (category: Category, index: number) => void;

/* ---------- Scroll cards (logos/branding/etc.) ---------- */

function ScrollCard({
  category,
  onOpen,
}: {
  category: Exclude<Category, "websites">;
  onOpen: OpenHandler;
}) {
  const items = data[category];
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length]);

  return (
    <article
      className={`${styles.card} ${styles["card_" + category]}`}
      onClick={() => onOpen(category, activeIndex)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(category, activeIndex);
      }}
    >
      <div className={styles.sliderViewport}>
        <div
          className={styles.verticalSlider}
          style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        >
          {items.map((src, idx) => (
            <div key={`${category}-${src}-${idx}`} className={styles.slide}>
              <div className={styles.slideInner}>
                <Image
                  src={src}
                  alt={`${category} ${idx + 1}`}
                  fill
                  className={styles.slideImage}
                  sizes="(min-width:1200px) 356px, 92vw"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- Website slide (old pan behavior) ---------- */

function WebsiteSlide({
  src,
  alt,
  isActive,
  isPanning,
}: {
  src: string;
  alt: string;
  isActive: boolean;
  isPanning: boolean;
}) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState<string>("0px");

  useEffect(() => {
    const updateScrollDistance = () => {
      const box = boxRef.current;
      const img = imgRef.current;
      if (!box || !img) return;

      const boxHeight = box.clientHeight;
      const imgHeight = img.scrollHeight || img.clientHeight;

      const dist = imgHeight > boxHeight ? boxHeight - imgHeight : 0;
      setScrollDistance(`${dist}px`);
    };

    const img = imgRef.current;
    if (!img) return;

    if (img.complete) updateScrollDistance();
    else img.addEventListener("load", updateScrollDistance);

    window.addEventListener("resize", updateScrollDistance);

    return () => {
      img.removeEventListener("load", updateScrollDistance);
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  const style: CSSProperties = {
    "--scroll-distance": scrollDistance,
  } as CSSProperties;

  return (
    <div ref={boxRef} className={styles.websiteScrollBox}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${styles.websiteScrollImage} ${
          isActive && isPanning ? styles.websiteScrollImagePanning : ""
        }`}
        style={style}
        loading="lazy"
      />
    </div>
  );
}

/* ---------- Website card ---------- */

function WebsiteCard({ onOpen }: { onOpen: OpenHandler }) {
  const category: Category = "websites";
  const items = data[category];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const PAN_DURATION = 5000;
  const PAUSE_BETWEEN = 500;

  const runCycle = () => {
    setIsPanning(true);

    timerRef.current = setTimeout(() => {
      setIsPanning(false);
      setActiveIndex((prev) => (prev + 1) % items.length);

      timerRef.current = setTimeout(() => {
        runCycle();
      }, PAUSE_BETWEEN);
    }, PAN_DURATION);
  };

  useEffect(() => {
    runCycle();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article
      className={`${styles.card} ${styles.card_websites}`}
      onClick={() => onOpen(category, activeIndex)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(category, activeIndex);
      }}
    >
      <div className={styles.sliderViewport}>
        <div
          className={styles.horizontalSlider}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((src, idx) => (
            <div key={`${category}-${src}-${idx}`} className={styles.slide}>
              <div className={styles.slideInner}>
                <WebsiteSlide
                  src={src}
                  alt={`${category} ${idx + 1}`}
                  isActive={idx === activeIndex}
                  isPanning={isPanning && idx === activeIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- Modal gallery ---------- */

function GalleryModal({
  isOpen,
  category,
  startIndex,
  onClose,
}: {
  isOpen: boolean;
  category: Category | null;
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (!isOpen || !category) return;
    setIndex(startIndex);
  }, [isOpen, startIndex, category]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !category) return null;

  const items = data[category];
  const total = items.length;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          ×
        </button>

        <button
          className={`${styles.modalArrow} ${styles.modalArrowLeft}`}
          onClick={goPrev}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className={`${styles.modalArrow} ${styles.modalArrowRight}`}
          onClick={goNext}
          aria-label="Next"
        >
          ›
        </button>

        <div className={styles.modalImageWrapper}>
          <Image
            src={items[index]}
            alt={`${category} ${index + 1}`}
            fill
            className={styles.modalImage}
            sizes="80vw"
          />
        </div>

        <div className={styles.modalCounter}>
          {index + 1} / {total}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main section ---------- */

export default function PopularServices() {
  const [modalCategory, setModalCategory] = useState<Category | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal: OpenHandler = (category, index) => {
    setModalCategory(category);
    setModalIndex(index);
  };

  const closeModal = () => setModalCategory(null);

  return (
    <section className={styles.section}>
      <div className={styles.background} />

      <div className={styles.header}>
        <h2 className={styles.heading}>Popular creative work</h2>
        <p className={styles.subheading}>
          Hover cards to scroll through our top websites, logos, branding and animations.
          Click any card to open the full gallery.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {/* 1 */}
        <div className={styles.a}>
          <ScrollCard category="logos" onOpen={openModal} />
        </div>

        {/* 2 */}
        <div className={styles.c}>
          <WebsiteCard onOpen={openModal} />
        </div>

        {/* 3 */}
        <div className={styles.d}>
          <ScrollCard category="branding" onOpen={openModal} />
        </div>

        {/* 4 */}
        <div className={styles.b}>
          <ScrollCard category="animations" onOpen={openModal} />
        </div>

        {/* 5 */}
        <div className={styles.e}>
          <ScrollCard category="UI" onOpen={openModal} />
        </div>

        {/* 6 */}
        <div className={styles.f}>
          <ScrollCard category="videoEditing" onOpen={openModal} />
        </div>

        {/* 7 */}
        <div className={styles.g}>
          <ScrollCard category="GraphicsDesigning" onOpen={openModal} />
        </div>
      </div>

      <GalleryModal
        isOpen={!!modalCategory}
        category={modalCategory}
        startIndex={modalIndex}
        onClose={closeModal}
      />
    </section>
  );
}