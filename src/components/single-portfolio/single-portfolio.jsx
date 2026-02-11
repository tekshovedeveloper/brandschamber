// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import styles from "./single-portfolio.module.css";

// export default function PortfolioGrid({
//   title,
//   items = [],
//   initialCount = 6,
//   loadStep = 3,
// }) {
//   const [visibleCount, setVisibleCount] = useState(initialCount);
//   const [activeIndex, setActiveIndex] = useState(null); // no : number | null

//   const visibleItems = items.slice(0, visibleCount);
//   const canLoadMore = visibleCount < items.length;

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + loadStep, items.length));
//   };

//   // no (index: number)
//   const openModal = (index) => setActiveIndex(index);
//   const closeModal = () => setActiveIndex(null);

//   // no useCallback<...>, just JS
//   const showPrev = useCallback(() => {
//     setActiveIndex((prev) => {
//       if (prev === null) return prev;
//       return prev === 0 ? items.length - 1 : prev - 1;
//     });
//   }, [items.length]);

//   const showNext = useCallback(() => {
//     setActiveIndex((prev) => {
//       if (prev === null) return prev;
//       return prev === items.length - 1 ? 0 : prev + 1;
//     });
//   }, [items.length]);

//   // Keyboard controls (no KeyboardEvent type)
//   useEffect(() => {
//     if (activeIndex === null) return;

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowLeft") showPrev();
//       if (e.key === "ArrowRight") showNext();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [activeIndex, showPrev, showNext]);

//   if (!items.length) return null;

//   return (
//     <>
//       <section className={styles.wrapper}>
//         {/* Header */}
          
//         <div className={styles.header}>
//         <h2 className={styles.title}>{title}</h2>
//         </div>

//         {/* Grid */}
//         <div className={styles.grid}>
//           {visibleItems.map((item, index) => (
//             <article
//               key={item.id ?? index}
//               className={styles.card}
//               onClick={() => openModal(index)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") openModal(index);
//               }}
//             >
//               <div className={styles.cardHeader}>
//                 <span className={styles.dot} />
//                 <span className={styles.dot} />
//                 <span className={styles.dot} />
//               </div>
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={item.image}
//                   alt={item.alt ?? `${title} ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw,
//                          (max-width: 1200px) 50vw,
//                          33vw"
//                   className={styles.image}
//                 />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Load more */}
//         {canLoadMore && (
//           <div className={styles.buttonRow}>
//             <button
//               type="button"
//               onClick={handleLoadMore}
//               className={styles.loadMoreButton}
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Modal / Slider */}
//       {activeIndex !== null && (
//         <div className={styles.modalOverlay} onClick={closeModal}>
//           <div
//             className={styles.modalContent}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className={styles.closeButton}
//               type="button"
//               aria-label="Close"
//               onClick={closeModal}
//             >
//               ×
//             </button>

//             <button
//               className={`${styles.navButton} ${styles.prevButton}`}
//               type="button"
//               aria-label="Previous"
//               onClick={showPrev}
//             >
//               ‹
//             </button>
//             <button
//               className={`${styles.navButton} ${styles.nextButton}`}
//               type="button"
//               aria-label="Next"
//               onClick={showNext}
//             >
//               ›
//             </button>

//             <div className={styles.modalImageWrapper}>
//               <Image
//                 src={items[activeIndex].image}
//                 alt={
//                   items[activeIndex].alt ??
//                   `${title} ${activeIndex + 1}`
//                 }
//                 fill
//                 sizes="90vw"
//                 className={styles.modalImage}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }






















"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./single-portfolio.module.css";

export default function PortfolioGrid({
  title,
  items = [],
  initialCount = 6,
  loadStep = 3,
}) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [activeIndex, setActiveIndex] = useState(null);

  const visibleItems = items.slice(0, visibleCount);
  const canLoadMore = visibleCount < items.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadStep, items.length));
  };

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? items.length - 1 : prev - 1;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  }, [items.length]);

  // Keyboard controls
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

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <section className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {visibleItems.map((item, index) => (
            <article
              key={item.id ?? index}
              className={styles.card}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(index);
              }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>

              <div className={styles.imageWrapper}>
                {item.video ? (
                  <video
                    src={item.video}
                    className={styles.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt ?? `${title} ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    className={styles.image}
                  />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
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

      {/* Modal / Slider */}
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
                  alt={
                    activeItem.alt ?? `${title} ${activeIndex + 1}`
                  }
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