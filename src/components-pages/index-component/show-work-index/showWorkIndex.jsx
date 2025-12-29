













// "use client";

// import { useState } from "react";
// import styles from "./ShowWorkIndex.module.css";

// const allImages = [
//   { id: 1, url: "/assets/home/portfolio1.jpg" },
//   { id: 2, url: "/assets/home/portfolio1.jpg" },
//   { id: 3, url: "/assets/home/portfolio1.jpg" },
//   { id: 4, url: "/assets/home/portfolio1.jpg" },
//   { id: 5, url: "/assets/home/portfolio1.jpg" },
//   { id: 6, url: "/assets/home/portfolio1.jpg" },
//   { id: 7, url: "/assets/home/portfolio1.jpg" },
//   { id: 8, url: "/assets/home/portfolio1.jpg" },
//   { id: 9, url: "/assets/home/portfolio1.jpg" },
//   { id: 10, url: "/assets/home/portfolio1.jpg" },
//   { id: 11, url: "/assets/home/portfolio1.jpg" },
//   { id: 12, url: "/assets/home/portfolio1.jpg" },
//   { id: 13, url: "/assets/home/portfolio1.jpg" },
// ];

// const websiteImages = [
//   { id: 1, url: "/assets/home/portfolio1.jpg" },
//   { id: 2, url: "/assets/home/portfolio1.jpg" },
//   { id: 3, url: "/assets/home/portfolio1.jpg" },
//   { id: 4, url: "/assets/home/portfolio1.jpg" },
//   { id: 5, url: "/assets/home/portfolio1.jpg" },
//   { id: 6, url: "/assets/home/portfolio1.jpg" },
//   { id: 7, url: "/assets/home/portfolio1.jpg" },
//   { id: 8, url: "/assets/home/portfolio1.jpg" },
//   { id: 9, url: "/assets/home/portfolio1.jpg" },
//   { id: 10, url: "/assets/home/portfolio1.jpg" },
//   { id: 11, url: "/assets/home/portfolio1.jpg" },
//   { id: 12, url: "/assets/home/portfolio1.jpg" },
//   { id: 13, url: "/assets/home/portfolio1.jpg" },
// ];

// const ecomerceWebsite = [...allImages]; 

// const logoImages = [
//   { id: 1, url: "/assets/home/portfolio1.jpg" },
//   { id: 2, url: "/assets/home/portfolio1.jpg" },
//   { id: 3, url: "/assets/home/portfolio1.jpg" },
//   { id: 4, url: "/assets/home/portfolio1.jpg" },
//   { id: 5, url: "/assets/home/portfolio1.jpg" },
//   { id: 6, url: "/assets/home/portfolio1.jpg" },
//   { id: 7, url: "/assets/home/portfolio1.jpg" },
//   { id: 8, url: "/assets/home/portfolio1.jpg" },
//   { id: 9, url: "/assets/home/portfolio1.jpg" },
//   { id: 10, url: "/assets/home/portfolio1.jpg" },
//   { id: 11, url: "/assets/home/portfolio1.jpg" },
//   { id: 12, url: "/assets/home/portfolio1.jpg" },
//   { id: 13, url: "/assets/home/portfolio1.jpg" },
// ];

// const marketingImages = [
//   { id: 1, url: "/assets/home/portfolio1.jpg" },
//   { id: 2, url: "/assets/home/portfolio1.jpg" },
//   { id: 3, url: "/assets/home/portfolio1.jpg" },
//   { id: 4, url: "/assets/home/portfolio1.jpg" },
//   { id: 5, url: "/assets/home/portfolio1.jpg" },
//   { id: 6, url: "/assets/home/portfolio1.jpg" },
//   { id: 7, url: "/assets/home/portfolio1.jpg" },
//   { id: 8, url: "/assets/home/portfolio1.jpg" },
//   { id: 9, url: "/assets/home/portfolio1.jpg" },
//   { id: 10, url: "/assets/home/portfolio1.jpg" },
//   { id: 11, url: "/assets/home/portfolio1.jpg" },
//   { id: 12, url: "/assets/home/portfolio1.jpg" },
//   { id: 13, url: "/assets/home/portfolio1.jpg" },
// ];

// const mobileAppImages = [
//   { id: 1, url: "/assets/home/portfolio1.jpg" },
//   { id: 2, url: "/assets/home/portfolio1.jpg" },
//   { id: 3, url: "/assets/home/portfolio1.jpg" },
//   { id: 4, url: "/assets/home/portfolio1.jpg" },
//   { id: 5, url: "/assets/home/portfolio1.jpg" },
//   { id: 6, url: "/assets/home/portfolio1.jpg" },
//   { id: 7, url: "/assets/home/portfolio1.jpg" },
//   { id: 8, url: "/assets/home/portfolio1.jpg" },
//   { id: 9, url: "/assets/home/portfolio1.jpg" },
//   { id: 10, url: "/assets/home/portfolio1.jpg" },
//   { id: 11, url: "/assets/home/portfolio1.jpg" },
//   { id: 12, url: "/assets/home/portfolio1.jpg" },
//   { id: 13, url: "/assets/home/portfolio1.jpg" },
// ]

// const illustrationImages = [
//   { id: 1, url: "/assets/home/portfolio1.jpg" },
//   { id: 2, url: "/assets/home/portfolio1.jpg" },
//   { id: 3, url: "/assets/home/portfolio1.jpg" },
//   { id: 4, url: "/assets/home/portfolio1.jpg" },
//   { id: 5, url: "/assets/home/portfolio1.jpg" },
//   { id: 6, url: "/assets/home/portfolio1.jpg" },
//   { id: 7, url: "/assets/home/portfolio1.jpg" },
//   { id: 8, url: "/assets/home/portfolio1.jpg" },
//   { id: 9, url: "/assets/home/portfolio1.jpg" },
//   { id: 10, url: "/assets/home/portfolio1.jpg" },
//   { id: 11, url: "/assets/home/portfolio1.jpg" },
//   { id: 12, url: "/assets/home/portfolio1.jpg" },
//   { id: 13, url: "/assets/home/portfolio1.jpg" },
// ];

// const TABS = [
//   { label: "All", key: "All", data: allImages },
//   { label: "Website Designs", key: "Website Design", data: websiteImages },
//   { label: "E-Commerce Websites", key: "E-Commerce Website", data: ecomerceWebsite },
//   { label: "Logo Design", key: "Logo Design", data: logoImages },
//   { label: "Marketing Collateral", key: "Marketing Collateral", data: marketingImages },
//   { label: "Video Animation", key: "Video Animation", data: websiteImages },
//   { label: "Mobile App", key: "Mobile App", data: mobileAppImages },
//   { label: "Illustration", key: "Illustration", data: illustrationImages },
// ];

// const INITIAL_VISIBLE = 6;   
// const LOAD_MORE_STEP = 3;    

// export default function ShowWorkIndex() {
//   const [activeTab, setActiveTab] = useState("All");
//   const [images, setImages] = useState(allImages);
//   const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

//   const handleTabClick = (tabKey) => {
//     setActiveTab(tabKey);
//     const found = TABS.find((t) => t.key === tabKey);
//     const data = found ? found.data : allImages;
//     setImages(data);
//     setVisibleCount(Math.min(INITIAL_VISIBLE, data.length));
//   };

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, images.length));
//   };

//   const visibleImages = images.slice(0, visibleCount);
//   const showLoadMore = visibleCount < images.length;

//   return (
//     <section className={styles.showWorkIndexBox}>
//       <div className={styles.showWorkIndexButtonRow}>
//         {TABS.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => handleTabClick(tab.key)}
//             className={`${styles.filterButton} ${
//               activeTab === tab.key ? styles.activeButton : ""
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div
//         id="portfolio"
//         className={`${styles.portfolioGallery} ${styles.animatePortfolio}`}
//       >
//         {visibleImages.map((img) => (
//           <div key={activeTab + "-" + img.id} className={styles.imageBox}>
//             <img
//               src={img.url}
//               alt="Portfolio item"
//               className={styles.portfolioImage}
//               style={{ "--scroll-distance": "-0px" }}
//             />
//           </div>
//         ))}

//         {showLoadMore && (
//           <button
//             className={styles.loadMoreContentButton}
//             onClick={handleLoadMore}
//           >
//             Load More
//           </button>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./showWorkIndex.module.css";

// ===== image data (same as you have) =====
const allImages = [
  { id: 1, url: "/assets/home/portfolio1.jpg" },
  { id: 2, url: "/assets/home/portfolio1.jpg" },
  { id: 3, url: "/assets/home/portfolio1.jpg" },
  { id: 4, url: "/assets/home/portfolio1.jpg" },
  { id: 5, url: "/assets/home/portfolio1.jpg" },
  { id: 6, url: "/assets/home/portfolio1.jpg" },
  { id: 7, url: "/assets/home/portfolio1.jpg" },
  { id: 8, url: "/assets/home/portfolio1.jpg" },
  { id: 9, url: "/assets/home/portfolio1.jpg" },
  { id: 10, url: "/assets/home/portfolio1.jpg" },
  { id: 11, url: "/assets/home/portfolio1.jpg" },
  { id: 12, url: "/assets/home/portfolio1.jpg" },
  { id: 13, url: "/assets/home/portfolio1.jpg" },
];

const websiteImages = [
  { id: 1, url: "/assets/home/portfolio1.jpg" },
  { id: 2, url: "/assets/home/portfolio1.jpg" },
  { id: 3, url: "/assets/home/portfolio1.jpg" },
  { id: 4, url: "/assets/home/portfolio1.jpg" },
  { id: 5, url: "/assets/home/portfolio1.jpg" },
  { id: 6, url: "/assets/home/portfolio1.jpg" },
  { id: 7, url: "/assets/home/portfolio1.jpg" },
  { id: 8, url: "/assets/home/portfolio1.jpg" },
  { id: 9, url: "/assets/home/portfolio1.jpg" },
  { id: 10, url: "/assets/home/portfolio1.jpg" },
  { id: 11, url: "/assets/home/portfolio1.jpg" },
  { id: 12, url: "/assets/home/portfolio1.jpg" },
  { id: 13, url: "/assets/home/portfolio1.jpg" },
];

const ecomerceWebsite = [...allImages];

const logoImages = [
  { id: 1, url: "/assets/home/portfolio1.jpg" },
  { id: 2, url: "/assets/home/portfolio1.jpg" },
  { id: 3, url: "/assets/home/portfolio1.jpg" },
  { id: 4, url: "/assets/home/portfolio1.jpg" },
  { id: 5, url: "/assets/home/portfolio1.jpg" },
  { id: 6, url: "/assets/home/portfolio1.jpg" },
  { id: 7, url: "/assets/home/portfolio1.jpg" },
  { id: 8, url: "/assets/home/portfolio1.jpg" },
  { id: 9, url: "/assets/home/portfolio1.jpg" },
  { id: 10, url: "/assets/home/portfolio1.jpg" },
  { id: 11, url: "/assets/home/portfolio1.jpg" },
  { id: 12, url: "/assets/home/portfolio1.jpg" },
  { id: 13, url: "/assets/home/portfolio1.jpg" },
];

const marketingImages = [
  { id: 1, url: "/assets/home/portfolio1.jpg" },
  { id: 2, url: "/assets/home/portfolio1.jpg" },
  { id: 3, url: "/assets/home/portfolio1.jpg" },
  { id: 4, url: "/assets/home/portfolio1.jpg" },
  { id: 5, url: "/assets/home/portfolio1.jpg" },
  { id: 6, url: "/assets/home/portfolio1.jpg" },
  { id: 7, url: "/assets/home/portfolio1.jpg" },
  { id: 8, url: "/assets/home/portfolio1.jpg" },
  { id: 9, url: "/assets/home/portfolio1.jpg" },
  { id: 10, url: "/assets/home/portfolio1.jpg" },
  { id: 11, url: "/assets/home/portfolio1.jpg" },
  { id: 12, url: "/assets/home/portfolio1.jpg" },
  { id: 13, url: "/assets/home/portfolio1.jpg" },
];

const mobileAppImages = [
  { id: 1, url: "/assets/home/portfolio1.jpg" },
  { id: 2, url: "/assets/home/portfolio1.jpg" },
  { id: 3, url: "/assets/home/portfolio1.jpg" },
  { id: 4, url: "/assets/home/portfolio1.jpg" },
  { id: 5, url: "/assets/home/portfolio1.jpg" },
  { id: 6, url: "/assets/home/portfolio1.jpg" },
  { id: 7, url: "/assets/home/portfolio1.jpg" },
  { id: 8, url: "/assets/home/portfolio1.jpg" },
  { id: 9, url: "/assets/home/portfolio1.jpg" },
  { id: 10, url: "/assets/home/portfolio1.jpg" },
  { id: 11, url: "/assets/home/portfolio1.jpg" },
  { id: 12, url: "/assets/home/portfolio1.jpg" },
  { id: 13, url: "/assets/home/portfolio1.jpg" },
];

const illustrationImages = [
  { id: 1, url: "/assets/home/portfolio1.jpg" },
  { id: 2, url: "/assets/home/portfolio1.jpg" },
  { id: 3, url: "/assets/home/portfolio1.jpg" },
  { id: 4, url: "/assets/home/portfolio1.jpg" },
  { id: 5, url: "/assets/home/portfolio1.jpg" },
  { id: 6, url: "/assets/home/portfolio1.jpg" },
  { id: 7, url: "/assets/home/portfolio1.jpg" },
  { id: 8, url: "/assets/home/portfolio1.jpg" },
  { id: 9, url: "/assets/home/portfolio1.jpg" },
  { id: 10, url: "/assets/home/portfolio1.jpg" },
  { id: 11, url: "/assets/home/portfolio1.jpg" },
  { id: 12, url: "/assets/home/portfolio1.jpg" },
  { id: 13, url: "/assets/home/portfolio1.jpg" },
];

// map tab name -> images array
const TABS = [
  { label: "All", key: "All", data: allImages },
  { label: "Website Designs", key: "Website Design", data: websiteImages },
  { label: "E-Commerce Websites", key: "E-Commerce Website", data: ecomerceWebsite },
  { label: "Logo Design", key: "Logo Design", data: logoImages },
  { label: "Marketing Collateral", key: "Marketing Collateral", data: marketingImages },
  { label: "Video Animation", key: "Video Animation", data: websiteImages },
  { label: "Mobile App", key: "Mobile App", data: mobileAppImages },
  { label: "Illustration", key: "Illustration", data: illustrationImages },
];

const INITIAL_VISIBLE = 6;
const LOAD_MORE_STEP = 3;

/**
 * Image that stays in the same box size, but scrolls its content on hover
 * using the existing CSS that reads var(--scroll-distance).
 */
function ScrollingImage({ src, alt, className }) {
  const boxRef = useRef(null);
  const imgRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState("0px");

  useEffect(() => {
    const updateScrollDistance = () => {
      const box = boxRef.current;
      const img = imgRef.current;
      if (!box || !img) return;

      const boxHeight = box.clientHeight;
      const imgHeight = img.clientHeight;

      if (!boxHeight || !imgHeight) return;

      // Amount we need to move the image up so the bottom becomes visible
      // (negative number, because we translateY upwards).
      const distance =
        imgHeight > boxHeight ? boxHeight - imgHeight : 0;

      setScrollDistance(`${distance}px`);
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
      if (img) {
        img.removeEventListener("load", updateScrollDistance);
      }
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  return (
    <div ref={boxRef} className={styles.imageBox}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        style={{ "--scroll-distance": scrollDistance }}
      />
    </div>
  );
}

export default function ShowWorkIndex() {
  const [activeTab, setActiveTab] = useState("All");
  const [images, setImages] = useState(allImages);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    const found = TABS.find((t) => t.key === tabKey);
    const data = found ? found.data : allImages;
    setImages(data);
    setVisibleCount(Math.min(INITIAL_VISIBLE, data.length));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, images.length));
  };

  const visibleImages = images.slice(0, visibleCount);
  const showLoadMore = visibleCount < images.length;

  return (
    <section className={styles.showWorkIndexBox}>
      {/* Filter buttons row */}
      <div className={styles.showWorkIndexButtonRow}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`${styles.filterButton} ${
              activeTab === tab.key ? styles.activeButton : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div
        id="portfolio"
        className={`${styles.portfolioGallery} ${styles.animatePortfolio}`}
      >
        {visibleImages.map((img) => (
          <ScrollingImage
            key={activeTab + "-" + img.id}
            src={img.url}
            alt="Portfolio item"
            className={styles.portfolioImage}
          />
        ))}

        {showLoadMore && (
          <button
            className={styles.loadMoreContentButton}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}