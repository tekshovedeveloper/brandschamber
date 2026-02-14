// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import styles from "./live-chat-banner.module.css";

// export default function RevealBanner({
//   imageSrc = "/assets/live-chat-banner.jpg", // change to your image path
//   imageAlt = "We make the difference",
//   onChatClick,
// }) {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   // Add .inView when the section enters viewport (like data-bg-animation="ro-reveal-from-bottom")
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           obs.disconnect(); // run only once
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`${styles.section} ${inView ? styles.inView : ""}`}
//     >
//       {/* Live Chat button */}
//       <div className={styles.chatWrapper}>
//         <button
//           type="button"
//           className={styles.chatButton}
//           onClick={onChatClick}
//         >
//           Live Chat Now
//         </button>
//       </div>

//       {/* Black background + animated image */}
//       <div className={styles.bgWrapper}>
//         {/* This is equivalent to .background-layer > .inner in the WP CSS */}
//         <div className={styles.bgInner}>
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             priority
//             sizes="100vw"
//             className={styles.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./live-chat-banner.module.css";
import MeetingModal from "../MeetingModal/MeetingModal";


/* ------------ MAIN BANNER COMPONENT ------------ */

export default function RevealBanner({
  imageSrc = "/assets/home/live-chat-banner.png", // change to your image path
  imageAlt = "We make the difference",
  onChatClick,
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  // Add .inView when the section enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleBookMeetingClick = () => {
    if (onChatClick) onChatClick();
    setShowMeetingModal(true);
  };

 return (
  <>
    <section
      ref={sectionRef}
      className={`${styles.section} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.bgWrapper}>
        <div className={styles.bgInner}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.textOverlay}>
            <div className={styles.marquee}>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
                <span>WE MAKE THE DIFFERENCE&nbsp;</span>
          </div>
          </div>
        </div>
      </div>

      {/* Button below banner */}
      <div className={styles.chatWrapper}>
        {/* <button
          type="button"
          className={styles.chatButton}
          onClick={handleBookMeetingClick}
        >
          Book Now
        </button> */}
        <button
          type="button"
          className={styles.chatButton}
          onClick={handleBookMeetingClick}
        >
          <span className={styles.arrowIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </span>
          <span className={styles.buttonText}>Book Now</span>
        </button>


      </div>
    </section>

    <MeetingModal
  isOpen={showMeetingModal}
  onClose={() => setShowMeetingModal(false)}
  defaultService=""
/>

  </>

  );
}