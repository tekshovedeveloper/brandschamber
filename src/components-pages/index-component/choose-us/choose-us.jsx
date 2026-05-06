// import React, { useState, useRef, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import styles from "./choose-us.module.css"; // Ensure this path is correct

// const ChooseUs = () => {
//   const headingRef = useRef(null);
//   const [chooseUsHeadingInView, setChooseUsHeadingInView] = useState(false);
//   const contentRef = useRef(null);
//   const [contentInView, setContentInView] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (headingRef.current) {
//         const { top } = headingRef.current.getBoundingClientRect();
//         if (top < window.innerHeight && window.scrollY > 0) {
//           setChooseUsHeadingInView(true);
//         } else {
//           setChooseUsHeadingInView(false);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//         ([entry]) => {
//             if (entry.isIntersecting) {
//                 setContentInView(true);
//             } else {
//                 setContentInView(false);
//             }
//         },
//         { threshold: 0.2 } // Adjust threshold as needed
//     );

//     if (contentRef.current) {
//         observer.observe(contentRef.current);
//     }

//     return () => {
//         if (contentRef.current) {
//             observer.unobserve(contentRef.current);
//         }
//     };
// }, []);

//   return (
//     <Box className={styles.chooseUsBox}>
//       <Typography variant="h5" className={styles.chooseUsBackHeading}>
//       Reasons To Choose
//       </Typography>

//       <Box
//         ref={headingRef}
//         className={`${styles.chooseUsHeading} ${
//           chooseUsHeadingInView ? styles.chooseUsAnimate : ""
//         }`}
//       >
//         <h3>
//           Reasons To
//           <span>
//             Choose Us.
//             {/* <img
//               className={styles.chooseUsUnderline}
//               src="https://www.alphadesigncrew.com/assets/images/wait-under-line.png"
//               alt="wait-under-line"
//             /> */}
//           </span>
         
//         </h3>

//         <p>
//           We at <span style={{ color: "#31B3C1" }}> Alpha Design Crew </span>
//           thrive to ensure that our customers are completely satisfied with our
//           work and <br />
//           we deliver unique projects that help you reach unmatchable levels of
//           success.
//         </p>
//       </Box>

//       <div
//             ref={contentRef}
//             className={`${styles.contentChooseUs} ${contentInView ? styles.contentAnimate : ""}`}
//         >
//             <div className={`${styles.leftColumnChooseUs} ${contentInView ? styles.leftAnimate : ""}`}>
//             <p>We have managed to create a vibrant development methodology to recognize the proper ingredients
//                         that
//                         go into the development of a successful online business. We make sure to incorporate the
//                         methodology
//                         into our clients’ projects, to fulfill all the objectives of the project at hand. We at
//                         Alpha Design Crew                        hire the best professionals from the industry that are proven for their work and abilities. Our
//                         experts come from different fields and walks of life so that we are able to understand our
//                         clients’
//                         need better and we do not lack any expertise needed to fulfill projects of our clients.
//                     </p>
//         <p>Most agencies claim to offer inexpensive services but fail to deliver so as they tend to charge
//                         you
//                         throughout the project life and if you take an in-depth look at the bills, you will see that you
//                         have overpaid for certain services. We do not encourage such policies and there are no surprise
//                         bills at Alpha Design Crew.
//                     </p>
//                 <Button className={styles.chooseUsGetStarted}>Lets Get Started</Button>
//             </div>
//             <div className={`${styles.rightColumnChooseUs} ${contentInView ? styles.rightAnimate : ""}`}>
//                 <div className={styles.rowChooseUs}>
//                     <div className={styles.boxChooseUs}>
//                         <img src="https://www.alphadesigncrew.com/assets/images/experience-icon.png" alt="experience-icon" />
//                         <h5>5+ Years Of <br /> Experience</h5>
//                     </div>
//                     <div className={styles.boxChooseUs}>
//                         <img src="https://www.alphadesigncrew.com/assets/images/professional-icon.png" alt="experience-icon" />
//                         <h5>5+ Years Of <br /> Experience</h5>
//                     </div>
//                 </div>
//                 <div className={styles.rowChooseUs}>
//                     <div className={styles.boxChooseUs}>
//                         <img src="https://www.alphadesigncrew.com/assets/images/availability-icon.png" alt="experience-icon" />
//                         <h5>5+ Years Of <br /> Experience</h5>
//                     </div>
//                     <div className={styles.boxChooseUs}>
//                         <img src="https://www.alphadesigncrew.com/assets/images/pricing-icon.png" alt="experience-icon" />
//                         <h5>5+ Years Of <br /> Experience</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>

//       {/* <div className={`${styles.contentChooseUs} ${contentInView ? styles.contentAnimate : ""}`}>
//       <div ref={leftColumnRef} className={`${styles.leftColumnChooseUs} ${contentInView ? styles.leftAnimate : ""}`}>
//       <p>We have managed to create a vibrant development methodology to recognize the proper ingredients
//                         that
//                         go into the development of a successful online business. We make sure to incorporate the
//                         methodology
//                         into our clients’ projects, to fulfill all the objectives of the project at hand. We at
//                         Alpha Design Crew                        hire the best professionals from the industry that are proven for their work and abilities. Our
//                         experts come from different fields and walks of life so that we are able to understand our
//                         clients’
//                         need better and we do not lack any expertise needed to fulfill projects of our clients.
//                     </p>
//         <p>Most agencies claim to offer inexpensive services but fail to deliver so as they tend to charge
//                         you
//                         throughout the project life and if you take an in-depth look at the bills, you will see that you
//                         have overpaid for certain services. We do not encourage such policies and there are no surprise
//                         bills at Alpha Design Crew.
//                     </p>
//         <Button className={styles.chooseUsGetStarted}>Lets Get Started</Button>
//       </div>
//       <div ref={rightColumnRef} className={`${styles.rightColumnChooseUs} ${contentInView ? styles.rightAnimate : ""}`}>
//         <div className={styles.rowChooseUs}>
//           <div className={styles.boxChooseUs}>
//             <img src="https://www.alphadesigncrew.com/assets/images/experience-icon.png" alt="experience-icon" />
//             <h5>5+ Years Of <br /> Experience</h5>
//           </div>
//           <div className={styles.boxChooseUs}>
//             <img src="https://www.alphadesigncrew.com/assets/images/professional-icon.png" alt="experience-icon" />
//             <h5>5+ Years Of <br /> Experience</h5>
//           </div>
//         </div>
//         <div className={styles.rowChooseUs}>
//           <div className={styles.boxChooseUs}>
//             <img src="https://www.alphadesigncrew.com/assets/images/availability-icon.png" alt="experience-icon" />
//             <h5>5+ Years Of <br /> Experience</h5>
//           </div>
//           <div className={styles.boxChooseUs}>
//             <img src="https://www.alphadesigncrew.com/assets/images/pricing-icon.png" alt="experience-icon" />
//             <h5>5+ Years Of <br /> Experience</h5>
//           </div>
//         </div>
//       </div>
//     </div> */}

    
//     </Box>
//   );
// };

// export default ChooseUs;





























"use client";

import Link from "next/link";
import styles from "./choose-us.module.css";

export default function ChooseUs({ id }) {
  return (
    <section id={id} className={styles.chooseUsBox}>
      <div className={styles.container}>
        {/* LEFT: Big headline */}
        <div className={styles.leftColumn}>
          <h2 className={styles.mainHeading}>
            WE DON'T JUST DESIGN.
            <br />
            WE BUILD BRANDS THAT
            <br />
            GROW BUSINESSES.
          </h2>
        </div>

        {/* RIGHT: Text */}
        <div className={styles.rightColumn}>
          <p className={styles.paragraph}>
            Most small businesses have something genuinely worth building — a
            great product, a valuable service, a founder with real expertise.
            What they often lack is the{" "}
            <strong>brand, the digital presence, and the marketing</strong> that
            communicates that value to the world with the clarity and confidence
            it deserves.
          </p>

          <p className={styles.paragraph}>
            That's exactly what Brands Chamber was built to solve. We are a
            creative agency specialising in brand building — combining strategy,
            design, technology, and marketing into a{" "}
            <strong>single, coherent service</strong> built specifically for
            small businesses and startups.
          </p>

          <p className={styles.paragraph}>
            We believe that great branding should not be the exclusive privilege
            of businesses with large budgets.{" "}
            <strong>
              Every business deserves a brand that competes with confidence.
            </strong>
          </p>

          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaLink}>
              <button className={styles.chooseUsGetStarted}>
                Lets Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}