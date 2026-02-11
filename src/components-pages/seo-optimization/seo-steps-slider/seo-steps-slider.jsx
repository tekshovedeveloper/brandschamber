// "use client";

// import { useEffect, useMemo, useState } from "react";
// import styles from "./seo-steps-slider.module.css";

// const defaultItems = [
//   {
//     title: "Keyword Research & Analysis",
//     text: "Identifying the most relevant, high-intent, and profitable keywords for your audience.",
//   },
//   {
//     title: "Content Strategy",
//     text: "Creating engaging, keyword-rich content that attracts and converts.",
//   },
//   {
//     title: "Technical SEO",
//     text: "Improving site structure, crawlability, and performance for search engines.",
//   },
//   {
//     title: "Link Building",
//     text: "Building high-quality backlinks that boost your domain authority.",
//   },
//   {
//     title: "Website Audit & Analysis",
//     text: "Identifying technical issues, site speed, mobile-friendliness, and areas for improvement.",
//   },
//   {
//     title: "On-Page Optimization",
//     text: "Optimizing titles, meta descriptions, content, and internal linking for better rankings.",
//   },
//   {
//     title: "Reporting & Refinement",
//     text: "Tracking performance and continuously refining your SEO strategy.",
//   },
// ];

// export default function SeoStepsSlider({
//   items = defaultItems,
//   autoplay = true,
//   interval = 5000,
// }) {
//   const [cardsPerView, setCardsPerView] = useState(3);
//   const [groupIndex, setGroupIndex] = useState(0);

//   // Decide how many cards per slide based on width
//   useEffect(() => {
//     const updateCardsPerView = () => {
//       const w = window.innerWidth;
//       if (w <= 600) setCardsPerView(1);
//       else if (w <= 1024) setCardsPerView(2);
//       else setCardsPerView(3);
//     };

//     updateCardsPerView();
//     window.addEventListener("resize", updateCardsPerView);
//     return () => window.removeEventListener("resize", updateCardsPerView);
//   }, []);

//   // Group items by cardsPerView: [0..2], [3..5], [6..8]...
//   const groups = useMemo(() => {
//     const res = [];
//     for (let i = 0; i < items.length; i += cardsPerView) {
//       res.push(items.slice(i, i + cardsPerView));
//     }
//     return res;
//   }, [items, cardsPerView]);

//   const groupCount = groups.length;

//   // Keep index in range
//   useEffect(() => {
//     if (groupIndex >= groupCount) setGroupIndex(0);
//   }, [groupIndex, groupCount]);

//   const goNext = () => {
//     if (groupCount <= 1) return;
//     setGroupIndex((prev) => (prev + 1) % groupCount);
//   };

//   const goPrev = () => {
//     if (groupCount <= 1) return;
//     setGroupIndex((prev) => (prev - 1 + groupCount) % groupCount);
//   };

//   // Autoplay between groups
//   useEffect(() => {
//     if (!autoplay || groupCount <= 1) return;

//     const id = setInterval(() => {
//       goNext();
//     }, interval);

//     return () => clearInterval(id);
//   }, [autoplay, interval, groupCount]);

//   const translateX = -(groupIndex * 100); // 100% per group
//   const progress =
//     groupCount <= 1 ? 1 : groupIndex / (groupCount - 1 || 1);

//   return (
//     <section className={styles.section}>
//       <div className={styles.slider}>
//         {/* Arrow buttons (optional) */}
//         {groupCount > 1 && (
//           <>
//             <button
//               type="button"
//               className={`${styles.navButton} ${styles.prevButton}`}
//               onClick={goPrev}
//               aria-label="Previous"
//             >
//               ‹
//             </button>
//             <button
//               type="button"
//               className={`${styles.navButton} ${styles.nextButton}`}
//               onClick={goNext}
//               aria-label="Next"
//             >
//               ›
//             </button>
//           </>
//         )}

//         <div className={styles.viewport}>
//           <div
//             className={styles.track}
//             style={{ transform: `translateX(${translateX}%)` }}
//           >
//             {groups.map((group, gIndex) => (
//               <div key={gIndex} className={styles.group}>
//                 {group.map((item, i) => (
//                   <article key={i} className={styles.card}>
//                     <div className={styles.cardInner}>
//                       <h3 className={styles.cardTitle}>{item.title}</h3>
//                       <p className={styles.cardText}>{item.text}</p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* progress bar */}
//         {groupCount > 1 && (
//           <div className={styles.progressRail}>
//             <div
//               className={styles.progressBar}
//               style={{ width: `${progress * 100}%` }}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }







"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./seo-steps-slider.module.css";

const cards = [
  {
    title: "Website Audit & Analysis",
    text: "Identifying technical issues, site speed, mobile-friendliness, and areas for improvement.",
  },
  {
    title: "Keyword Research",
    text: "Finding the exact search terms your customers use to discover your services.",
  },
  {
    title: "On-Page Optimization",
    text: "Optimizing titles, meta descriptions, content, and internal linking for better rankings.",
  },
  {
    title: "Content Strategy",
    text: "Creating engaging, keyword-rich content that attracts and converts.",
  },
  {
    title: "Technical SEO",
    text: "Improving site structure, crawlability, and performance for search engines.",
  },
  {
    title: "Link Building",
    text: "Building high-quality backlinks that boost your domain authority.",
  },
  {
    title: "Local SEO",
    text: "Helping your business dominate local searches and appear on Google Maps.",
  },
];

export default function SeoStepsSlider() {
  const [visibleCards, setVisibleCards] = useState(3); // 3 / 2 / 1 depending on width
  const [pageIndex, setPageIndex] = useState(0);

  // drag state
  const [dragStartX, setDragStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const viewportRef = useRef(null);

  // --- responsive visibleCards (3 / 2 / 1) ---
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 600) {
        setVisibleCards(1);
      } else if (w <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(cards.length / visibleCards);

  // clamp current page if totalPages changes
  useEffect(() => {
    const last = Math.max(0, totalPages - 1);
    setPageIndex((prev) => Math.min(prev, last));
  }, [totalPages]);

  const goToPage = (index) => {
    if (totalPages <= 1) return;
    const last = totalPages - 1;
    const clamped = Math.max(0, Math.min(last, index)); // NO looping
    setPageIndex(clamped);
  };

  const nextPage = () => goToPage(pageIndex + 1);
  const prevPage = () => goToPage(pageIndex - 1);

  // pointer handlers
  const handlePointerDown = (e) => {
    setDragStartX(e.clientX);
    setDragOffset(0);
    setIsDragging(true);

    if (e.pointerId !== undefined) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff); // move with the cursor
  };

  const finishDrag = (e) => {
    if (!isDragging || dragStartX === null) return;

    const diff = e.clientX - dragStartX;
    const threshold = 80; // px – drag distance to trigger a page change
    const last = totalPages - 1;

    if (diff > threshold && pageIndex > 0) {
      // drag right -> previous, but not past first
      prevPage();
    } else if (diff < -threshold && pageIndex < last) {
      // drag left -> next, but not past last
      nextPage();
    }

    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);

    try {
      if (e.pointerId !== undefined) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
  };

  const handlePointerUp = (e) => {
    finishDrag(e);
  };

  const handlePointerLeave = (e) => {
    finishDrag(e);
  };

  const basePercent = -pageIndex * 100;
  const transformValue = `translateX(calc(${basePercent}% + ${dragOffset}px))`;

  return (
    <section className={styles.sliderRoot}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} ${isDragging ? styles.dragging : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className={`${styles.track} ${
            isDragging ? styles.trackDragging : ""
          }`}
          style={{ transform: transformValue }}
        >
          {Array.from({ length: totalPages }).map((_, groupIndex) => {
            const start = groupIndex * visibleCards;
            const end = start + visibleCards;
            const groupCards = cards.slice(start, end);

            return (
              <div key={groupIndex} className={styles.page}>
                {groupCards.map((card) => (
                  <article key={card.title} className={styles.card}>
                    <h3 className={styles.title}>{card.title}</h3>
                    <p className={styles.text}>{card.text}</p>
                  </article>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {totalPages > 1 && (
        <div className={styles.progressOuter}>
          <div
            className={styles.progressInner}
            style={{
              width: `${100 / totalPages}%`,
              left: `${(100 / totalPages) * pageIndex}%`,
            }}
          />
        </div>
      )}
    </section>
  );
}