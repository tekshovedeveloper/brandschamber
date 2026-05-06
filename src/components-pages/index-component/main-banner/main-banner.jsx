// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "./main-banner.module.css";
// import Link from "next/link";
// import ServiceSearch from "@/components/search-bar/ServiceSearch";

// export default function MainBanner({id}) {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setInView(true);
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section id={id}
//       ref={sectionRef}
//       className={`${styles.mainBannerContainer} ${inView ? styles.inView : ""}` }
//     >
//       <div className={styles.mainBannerFirstContainer}>
//         <div className={styles.rightSideDiv}>
//           <h1 className={styles.mainHeading}>
//             YOUR BRAND’S CREATIVE
//             <br />
//             POWERHOUSE
//           </h1>

//           <p className={styles.paragraph}>
//             We&apos;re a creative and development-driven digital agency committed
//             to transforming ideas into impactful brand experiences. With over
//             5,000 successful client collaborations worldwide, we&apos;ve helped
//             businesses build and revamp their brand identity through thoughtful
//             design and reliable digital solutions.
//           </p>

//           <ServiceSearch />

//         </div>

      
       
//         <div className={styles.leftSideDiv}>
//           <div className={styles.heroCard}>
//             <img
//               src="/assets/home/logo-banner.gif"
//               alt="Brand showcase"
//               className={styles.heroCardImg}
//             />
//           </div>
//         </div>



//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./main-banner.module.css";
import ServiceSearch from "@/components/search-bar/ServiceSearch";

export default function MainBanner({ id }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.mainBannerContainer} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.mainBannerFirstContainer}>
        <div className={styles.rightSideDiv}>
          <h1 className={styles.mainHeading}>
            YOUR BRAND’S CREATIVES
            <br />
            POWERHOUSE
          </h1>

          <p className={styles.paragraph}>
            We&apos;re a creative and development-driven digital agency committed
            to transforming ideas into impactful brand experiences. With over
            5,000 successful client collaborations worldwide, we&apos;ve helped
            businesses build and revamp their brand identity through thoughtful
            design and reliable digital solutions.
          </p>

          <ServiceSearch />
        </div>

        <div className={styles.leftSideDiv}>
          <div className={styles.heroCard}>
            <video
              className={styles.heroCardVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/home/logo-banner-poster.jpg"
            >
              <source src="/assets/home/hero-right-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}