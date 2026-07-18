// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "./seo-approach.module.css";

// export default function SeoApproachSection({ id }) {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   // Simple slide‑in when the section enters viewport
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       id={id}
//       ref={sectionRef}
//       className={`${styles.section} ${inView ? styles.inView : ""}`}
//     >
//       <div className={styles.inner}>
//         <h2 className={styles.title}>OUR SEO APPROACH</h2>

//         <p className={styles.lead}>
//           We don’t believe in “one-size-fits-all.” Every business is unique, and
//           that’s exactly why search engine optimization agencies in Florida—
//           including ours—focus on building a custom SEO plan tailored to your
//           specific goals. Our process includes:
//         </p>

//         <ul className={styles.list}>
//           <li className={styles.listItem}>
//             <strong>Keyword Research &amp; Analysis –</strong> We identify the
//             most relevant, high-intent, and profitable keywords that match your
//             industry and audience behavior.
//           </li>
//           <li className={styles.listItem}>
//             <strong>On-Page SEO Optimization –</strong> From meta tags to
//             headings and on-page content structure, we fine-tune every element
//             to help you rank higher across major search engines.
//           </li>
//           <li className={styles.listItem}>
//             <strong>Technical SEO &amp; Site Audits –</strong> We make sure your
//             website is fast, secure, crawlable, and mobile-friendly, eliminating
//             issues that may block your ranking potential.
//           </li>
//           <li className={styles.listItem}>
//             <strong>Content Strategy &amp; Marketing –</strong> We craft and
//             optimize high-quality content designed to engage, convert, and
//             support long-term SEO growth.
//           </li>
//           <li className={styles.listItem}>
//             <strong>Link Building &amp; Authority Growth –</strong> We
//             strengthen your domain authority with strategic, high-quality
//             backlinks that boost trust and credibility.
//           </li>
//         </ul>

//         <p className={styles.note}>
//           For more insights, check out{" "}
//           <span className={styles.emphasis}>
//             “Our detailed blog on Best SEO Company selection“
//           </span>{" "}
//           to understand how to choose the right SEO partner for your business.
//         </p>
//       </div>
//     </section>
//   );
// }










"use client";

import styles from "./seo-approach.module.css";  
import Link from "next/link";

export default function ChooseUs({id}) {
  return (
    <section id={id} className={styles.chooseUsBox}>
      <div className={`${styles.contentChooseUs} ${styles.contentAnimate}`}>
        {/* Left column: text */}
        <div className={`${styles.leftColumn} ${styles.leftAnimate}`}>
          <h1 className={styles.mainHeading}>Our SEO Approach</h1>

          <p>
          We don’t believe in “one-size-fits-all.” Every business is unique, and that’s exactly why —including ours—focus on building a custom SEO plan tailored to your 
          specific goals. Our process includes:
          </p>

            <ul className={styles.list}>
         <li className={styles.listItem}>
           <strong>Keyword Research &amp; Analysis –</strong> We identify the
           most relevant, high-intent, and profitable keywords that match your
           industry and audience behavior.
         </li>
         <li className={styles.listItem}>
           <strong>On-Page SEO Optimization –</strong> From meta tags to
           headings and on-page content structure, we fine-tune every element
           to help you rank higher across major search engines.
         </li>
         <li className={styles.listItem}>
           <strong>Technical SEO &amp; Site Audits –</strong> We make sure your
           website is fast, secure, crawlable, and mobile-friendly, eliminating
           issues that may block your ranking potential.
         </li>
         <li className={styles.listItem}>
           <strong>Content Strategy &amp; Marketing –</strong> We craft and
           optimize high-quality content designed to engage, convert, and
           support long-term SEO growth.
         </li>
         <li className={styles.listItem}>
           <strong>Link Building &amp; Authority Growth –</strong> We
           strengthen your domain authority with strategic, high-quality
           backlinks that boost trust and credibility.
          </li>
        </ul>
  <p className={styles.note}>
          For more insights, check out{" "}
          <span className={styles.emphasis}>
             “Our detailed blog on Best SEO Company selection“
           </span>{" "}
           to understand how to choose the right SEO partner for your business.
         </p>
         
        </div>

        {/* Right column: image */}
        <div className={`${styles.rightColumn} ${styles.rightAnimate}`}>
          <img
            src="/assets/home/choose-us-section.png"
            alt="Brands Chamber SEO strategy and growth approach"
            className={styles.chooseUsImage}
          />
        </div>
      </div>
    </section>
  );
}
