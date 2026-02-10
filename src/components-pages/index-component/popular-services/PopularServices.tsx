// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import styles from "./popular-services.module.css";

// const categories = [
//   { id: "logos", label: "Logos" },
//   { id: "websites", label: "Websites" },
//   { id: "branding", label: "Branding" },
//   { id: "animations", label: "Animations" },
// ];

// const itemsByCategory = {
//   logos: [
//     {
//       id: "logo-1",
//       title: "Minimal Monogram",
//       subtitle: "Brand for SaaS Startup",
//       thumb: "/assets/popular/logos/logo-1.jpg",
//     },
//     {
//       id: "logo-2",
//       title: "Gradient Mark",
//       subtitle: "Creative Agency Logo",
//       thumb: "/assets/popular/logos/logo-2.jpg",
//     },
//     {
//       id: "logo-3",
//       title: "Line Art Icon",
//       subtitle: "Finance Brand Identity",
//       thumb: "/assets/popular/logos/logo-3.jpg",
//     },
//     {
//       id: "logo-4",
//       title: "Abstract Symbol",
//       subtitle: "Tech Company Rebrand",
//       thumb: "/assets/popular/logos/logo-4.jpg",
//     },
//     {
//       id: "logo-5",
//       title: "Badge Logo",
//       subtitle: "Heritage Brand",
//       thumb: "/assets/popular/logos/logo-5.jpg",
//     },
//     {
//       id: "logo-6",
//       title: "Wordmark",
//       subtitle: "Lifestyle Brand",
//       thumb: "/assets/popular/logos/logo-6.jpg",
//     },
//   ],
//   websites: [
//     {
//       id: "web-1",
//       title: "E‑commerce Store",
//       subtitle: "Fashion UI & UX",
//       thumb: "/assets/popular/websites/web-1.jpg",
//     },
//     {
//       id: "web-2",
//       title: "Corporate Website",
//       subtitle: "B2B Tech Platform",
//       thumb: "/assets/popular/websites/web-2.jpg",
//     },
//     {
//       id: "web-3",
//       title: "Portfolio Site",
//       subtitle: "Personal Brand",
//       thumb: "/assets/popular/websites/web-3.jpg",
//     },
//     {
//       id: "web-4",
//       title: "Landing Page",
//       subtitle: "Product Launch",
//       thumb: "/assets/popular/websites/web-4.jpg",
//     },
//     {
//       id: "web-5",
//       title: "Dashboard UI",
//       subtitle: "SaaS Analytics",
//       thumb: "/assets/popular/websites/web-5.jpg",
//     },
//     {
//       id: "web-6",
//       title: "Mobile‑First Site",
//       subtitle: "Restaurant Brand",
//       thumb: "/assets/popular/websites/web-6.jpg",
//     },
//   ],
//   branding: [
//     {
//       id: "brand-1",
//       title: "Full Brand System",
//       subtitle: "Tech Conference Identity",
//       thumb: "/assets/popular/branding/brand-1.jpg",
//     },
//     {
//       id: "brand-2",
//       title: "Packaging Design",
//       subtitle: "Premium Skincare Line",
//       thumb: "/assets/popular/branding/brand-2.jpg",
//     },
//     {
//       id: "brand-3",
//       title: "Social Kit",
//       subtitle: "Content‑Ready Templates",
//       thumb: "/assets/popular/branding/brand-3.jpg",
//     },
//     {
//       id: "brand-4",
//       title: "Stationery Set",
//       subtitle: "Business Collateral",
//       thumb: "/assets/popular/branding/brand-4.jpg",
//     },
//     {
//       id: "brand-5",
//       title: "Event Branding",
//       subtitle: "Annual Summit",
//       thumb: "/assets/popular/branding/brand-5.jpg",
//     },
//     {
//       id: "brand-6",
//       title: "Rebranding",
//       subtitle: "Logo + Guidelines",
//       thumb: "/assets/popular/branding/brand-6.jpg",
//     },
//   ],
//   animations: [
//     {
//       id: "anim-1",
//       title: "2D Explainer",
//       subtitle: "Product Overview",
//       thumb: "/assets/popular/animations/anim-1.jpg",
//     },
//     {
//       id: "anim-2",
//       title: "Logo Reveal",
//       subtitle: "Intro Animation",
//       thumb: "/assets/popular/animations/anim-2.jpg",
//     },
//     {
//       id: "anim-3",
//       title: "Social Ad",
//       subtitle: "15‑sec Promo",
//       thumb: "/assets/popular/animations/anim-3.jpg",
//     },
//     {
//       id: "anim-4",
//       title: "UI Motion",
//       subtitle: "Micro‑interactions",
//       thumb: "/assets/popular/animations/anim-4.jpg",
//     },
//     {
//       id: "anim-5",
//       title: "Character Animation",
//       subtitle: "Brand Mascot",
//       thumb: "/assets/popular/animations/anim-5.jpg",
//     },
//     {
//       id: "anim-6",
//       title: "Title Sequence",
//       subtitle: "Event Opener",
//       thumb: "/assets/popular/animations/anim-6.jpg",
//     },
//   ],
// };

// export default function PopularServices() {
//   const [activeCategory, setActiveCategory] = useState("logos");
//   const items = itemsByCategory[activeCategory];

//   return (
//     <section className={styles.section}>
//       <div className={styles.background} />

//       <div className={styles.inner}>
//         <div className={styles.left}>
//           <p className={styles.kicker}>Popular Services</p>
//           <h2 className={styles.heading}>
//             Our Most In‑Demand
//             <span className={styles.headingAccent}>
//               Design &amp; Development Work
//             </span>
//           </h2>
//           <p className={styles.subheading}>
//             Explore our most requested logo designs, websites, branding
//             projects, and animations. Hover to preview, click to dive deeper.
//           </p>

//           <div className={styles.categoryList}>
//             {categories.map((cat) => {
//               const active = cat.id === activeCategory;
//               return (
//                 <button
//                   key={cat.id}
//                   type="button"
//                   className={
//                     active
//                       ? `${styles.categoryPill} ${styles.categoryPillActive}`
//                       : styles.categoryPill
//                   }
//                   onClick={() => setActiveCategory(cat.id)}
//                 >
//                   {cat.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <div className={styles.right}>
//           <div className={styles.grid}>
//             {items.map((item, index) => (
//               <article
//                 key={item.id}
//                 className={styles.card}
//                 style={{ animationDelay: `${index * 80}ms` }}
//               >
//                 <div className={styles.cardImageWrapper}>
//                   <Image
//                     src={item.thumb}
//                     alt={item.title}
//                     fill
//                     className={styles.cardImage}
//                     sizes="(min-width: 1024px) 33vw, 50vw"
//                   />
//                   <div className={styles.cardImageOverlay} />
//                 </div>

//                 <div className={styles.cardBody}>
//                   <p className={styles.cardTag}>{activeCategory}</p>
//                   <h3 className={styles.cardTitle}>{item.title}</h3>
//                   <p className={styles.cardSubtitle}>{item.subtitle}</p>

//                   <div className={styles.cardFooter}>
//                     <span className={styles.badge}>
//                       <span className={styles.badgeDot} />
//                       Top project
//                     </span>
//                     <span className={styles.viewLink}>View case study →</span>
//                   </div>
//                 </div>

//                 <span className={styles.cardGlow} />
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  useState,
  useRef,
  useEffect,
  type CSSProperties,
} from "react";
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
} as const;

type Category = keyof typeof data;

type OpenHandler = (category: Category, index: number) => void;

/* ------------- LOGOS / BRANDING / ANIMATIONS CARD (now auto scroll) ------------- */

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

  // auto-scroll through items
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2500); // 2.5s per item

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length]);

  return (
    <article
      className={`${styles.card} ${styles["card_" + category]}`}
      onClick={() => onOpen(category, activeIndex)}
    >
      <div className={styles.sliderViewport}>
        <div
          className={styles.verticalSlider}
          style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        >
          {items.map((src, idx) => (
            <div key={src} className={styles.slide}>
              <Image
                src={src}
                alt={`${category} ${idx + 1}`}
                fill
                className={styles.slideImage}
                sizes="(min-width:1024px) 260px, 80vw"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ------------- WEBSITE SLIDE (same scroll behaviour as ShowWorkIndex) ------------- */

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
      const imgHeight = img.clientHeight;
      if (!boxHeight || !imgHeight) return;

      const dist = imgHeight > boxHeight ? boxHeight - imgHeight : 0;
      setScrollDistance(`${dist}px`);
    };

    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      updateScrollDistance();
    } else {
      img.addEventListener("load", updateScrollDistance);
    }

    window.addEventListener("resize", updateScrollDistance);

    return () => {
      if (img) img.removeEventListener("load", updateScrollDistance);
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
      />
    </div>
  );
}

/* ------------- WEBSITE CARD (now auto scroll, slower pan) ------------- */

function WebsiteCard({ onOpen }: { onOpen: OpenHandler }) {
  const category: Category = "websites";
  const items = data[category];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const PAN_DURATION = 5000; // ms; matches CSS transition (slower)
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
    runCycle(); // start auto cycle on mount

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article
      className={`${styles.card} ${styles.card_websites}`}
      onClick={() => onOpen(category, activeIndex)}
    >
      <div className={styles.sliderViewport}>
        <div
          className={styles.horizontalSlider}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((src, idx) => (
            <div key={src} className={styles.slide}>
              <WebsiteSlide
                src={src}
                alt={`${category} ${idx + 1}`}
                isActive={idx === activeIndex}
                isPanning={isPanning && idx === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ------------- MODAL GALLERY ------------- */

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
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose}>
          ×
        </button>

        <button
          className={`${styles.modalArrow} ${styles.modalArrowLeft}`}
          onClick={goPrev}
        >
          ‹
        </button>
        <button
          className={`${styles.modalArrow} ${styles.modalArrowRight}`}
          onClick={goNext}
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

/* ------------- MAIN SECTION ------------- */

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
        <h2 className={styles.heading}>
          Popular creative work
        </h2>
        <p className={styles.subheading}>
          Hover cards to scroll through our top websites, logos, branding and
          animations. Click any card to open the full gallery.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        <ScrollCard category="logos" onOpen={openModal} />
        <WebsiteCard onOpen={openModal} />
        <ScrollCard category="branding" onOpen={openModal} />
        <ScrollCard category="animations" onOpen={openModal} />
        <ScrollCard category="animations" onOpen={openModal} />
        <ScrollCard category="animations" onOpen={openModal} />
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