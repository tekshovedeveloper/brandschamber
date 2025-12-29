// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { useInView } from 'react-intersection-observer';
// import styles from './achievements.module.css';

// const Achievements = () => {
//   const { ref: achieveRef, inView: achieveInView } = useInView({ triggerOnce: false, threshold: 0.1 });

//   return (
//     <Box ref={achieveRef} className={styles.achieve}>
//       {/* First Two Components: Slide from Top */}
//       <Box
//         className={`${styles.portfolio} ${achieveInView ? styles.slideFromTop : ''}`}
//       >
//         <img src="https://www.alphadesigncrew.com/assets/images/counter-icon1.png" className={styles.image} />
//         <Box className={styles.portfolioContent}>
//           <Typography variant="h6" className={styles.portfolioHeading}>15K+</Typography>
//           <Typography variant="body2" className={styles.portfolioText}>Website Created</Typography>
//         </Box>
//       </Box>

//       <Box
//         className={`${styles.portfolio} ${achieveInView ? styles.slideFromTop : ''}`}
//       >
//         <img src="https://www.alphadesigncrew.com/assets/images/counter-icon2.png" className={styles.image} />
//         <Box className={styles.portfolioContent}>
//           <Typography variant="h6" className={styles.portfolioHeading}>8K+</Typography>
//           <Typography variant="body2" className={styles.portfolioText}>Custom Web Portal/Applications</Typography>
//         </Box>
//       </Box>

//       {/* Last Two Components: Slide from Bottom */}
//       <Box
//         className={`${styles.portfolio} ${achieveInView ? styles.slideFromBottom : ''}`}
//       >
//         <img src="https://www.alphadesigncrew.com/assets/images/counter-icon3.png" className={styles.image} />
//         <Box className={styles.portfolioContent}>
//           <Typography variant="h6" className={styles.portfolioHeading}>2K+</Typography>
//           <Typography variant="body2" className={styles.portfolioText}>Apps Created</Typography>
//         </Box>
//       </Box>

//       <Box
//         className={`${styles.portfolio} ${achieveInView ? styles.slideFromBottom : ''}`}
//       >
//         <img src="https://www.alphadesigncrew.com/assets/images/counter-icon4.png" className={styles.image} />
//         <Box className={styles.portfolioContent}>
//           <Typography variant="h6" className={styles.portfolioHeading}>120M</Typography>
//           <Typography variant="body2" className={styles.portfolioText}>Revenue Generated</Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Achievements;





"use client";

import styles from './achievements.module.css';

export default function Achievements({id}) {
  return (
    <div id={id} className={styles.mainAchieve}>
      {/* Desktop 4‑column stats row */}
      <div className={styles.achieve}>
        <div className={`${styles.portfolio} ${styles.slideFromTop}`}>
          <img
            src="/assets/home/icon2.svg"
            className={styles.image}
            alt="Websites Created"
          />
          <div className={styles.portfolioContent}>
            <h6 className={styles.portfolioHeading}>15k+</h6>
            <p className={styles.portfolioText}>Websites Created</p>
          </div>
        </div>

        <div className={`${styles.portfolio} ${styles.slideFromTop}`}>
          <img
            src="/assets/home/icon1.svg"
            className={styles.image}
            alt="Custom Web Portal/Applications"
          />
          <div className={styles.portfolioContent}>
            <h6 className={styles.portfolioHeading}>8k+</h6>
            <p className={styles.portfolioText}>
              Custom Web Portal/Applications
            </p>
          </div>
        </div>

        <div className={`${styles.portfolio} ${styles.slideFromBottom}`}>
          <img
            src="/assets/home/icon4.svg"
            className={styles.image}
            alt="Apps Created"
          />
          <div className={styles.portfolioContent}>
            <h6 className={styles.portfolioHeading}>2k+</h6>
            <p className={styles.portfolioText}>Apps Created</p>
          </div>
        </div>

        <div className={`${styles.portfolio} ${styles.slideFromBottom}`}>
          <img
            src="/assets/home/icon3.svg"
            className={styles.image}
            alt="Revenue Generated"
          />
          <div className={styles.portfolioContent}>
            <h6 className={styles.portfolioHeading}>120M</h6>
            <p className={styles.portfolioText}>Revenue Generated</p>
          </div>
        </div>
      </div>

      {/* Mobile carousel version */}
      <div
        id="carouselExampleIndicators"
        className={`carousel slide ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <ol
          className={`carousel-indicators ${styles.carouselIndicators}`}
        >
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
          ></li>
        </ol>

        <div className="carousel-inner">
          <div className={`carousel-item active`}>
            <div className={styles.carouselItem}>
              <img
                src="https://www.alphadesigncrew.com/assets/images/counter-icon1.png"
                className={styles.image}
                alt="Website Created"
              />
              <div className={styles.portfolioContent}>
                <h6 className={styles.portfolioHeading}>15K+</h6>
                <p className={styles.portfolioText}>Website Created</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className={styles.carouselItem}>
              <img
                src="https://www.alphadesigncrew.com/assets/images/counter-icon2.png"
                className={styles.image}
                alt="Custom Web Portal/Applications"
              />
              <div className={styles.portfolioContent}>
                <h6 className={styles.portfolioHeading}>8K+</h6>
                <p className={styles.portfolioText}>
                  Custom Web Portal/Applications
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className={styles.carouselItem}>
              <img
                src="https://www.alphadesigncrew.com/assets/images/counter-icon3.png"
                className={styles.image}
                alt="Apps Created"
              />
              <div className={styles.portfolioContent}>
                <h6 className={styles.portfolioHeading}>2K+</h6>
                <p className={styles.portfolioText}>Apps Created</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className={styles.carouselItem}>
              <img
                src="https://www.alphadesigncrew.com/assets/images/counter-icon4.png"
                className={styles.image}
                alt="Revenue Generated"
              />
              <div className={styles.portfolioContent}>
                <h6 className={styles.portfolioHeading}>120M</h6>
                <p className={styles.portfolioText}>Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>

        <a
          className={`carousel-control-prev ${styles.carouselControlPrev}`}
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className={`carousel-control-next ${styles.carouselControlNext}`}
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}