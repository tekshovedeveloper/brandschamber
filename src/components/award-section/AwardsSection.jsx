"use client";

import Slider from "react-slick";
import styles from "./AwardsSection.module.css";

const AWARDS = [
  {
    id: 1,
    logo: "/assets/award/image1.png",
    title: "DesignRush",
    rating: "5.0",
    description:
      "Listed among the top web design and development companies on DesignRush for 2026, showcasing our industry leadership.",
  },
  {
    id: 2,
    logo: "/assets/award/image2.png",
    title: "UpCity",
    rating: "5.0",
    description:
      "Featured among the best web design agencies for 2026 by UpCity, known for our innovative solutions and client satisfaction.",
  },
  {
    id: 3,
    logo: "/assets/award/image3.png",
    title: "Tech Behemoths",
    rating: "4.8",
    description:
      "Recognized as a leader in WordPress, ReactJs, and Web Design in the United States.",
  },
  {
    id: 4,
    logo: "/assets/award/image4.png",
    title: "Thumbtack",
    rating: "4.7",
    description:
      "Awarded as a top professional in web design services for 2026.",
  },
  {
    id: 5,
    logo: "/assets/award/image5.png",
    title: "BBB Accredited",
    rating: "4.9",
    description:
      "Proud to be a BBB Accredited business, demonstrating trust and commitment to excellence.",
  },
  {
    id: 6,
    logo: "/assets/award/image6.png",
    title: "Clutch",
    rating: "5.0",
    description:
      "Ranked as one of the top web design agencies on Clutch for 2026.",
  },
];

export default function AwardsSection({ id }) {
 const settings = {
  infinite: true,
  arrows: false,
  autoplay: true,

  // continuous marquee‑like movement
  speed: 10000,          // full loop duration
  autoplaySpeed: 0,
  cssEase: "linear",

  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,   // we control width via CSS

  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 900,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        speed: 6000,
      },
    },
  ],
};

  return (
    <section id={id} className={styles.awardsSection}>
      {/* Top row: heading + trophy */}
      <div className={styles.topRow}>
        <div className={styles.trophyWrapper}>
          <img
            src="/assets/award/award.png"
            alt="Awards trophy"
            className={styles.trophyImage}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.headingBlock}>
          <h2 className={styles.title}>Winning Hearts, Minds, And Awards</h2>
          <p className={styles.subtitle}>
            Globally recognized for our passion and expertise in creative web
            design models, we crush digital design with user‑friendly sites,
            earning top B2B awards across the U.S.
          </p>
        </div>

        
      </div>

      {/* Bottom: continuous slider of award cards */}
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {AWARDS.map((award) => (
            <div key={award.id} className={styles.slideOuter}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.logoWrapper}>
                    <img
                      src={award.logo}
                      alt={award.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.rating}>
                    <span className={styles.star}>★</span>
                    <span className={styles.ratingValue}>{award.rating}</span>
                  </div>
                </div>

                <p className={styles.cardText}>{award.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
