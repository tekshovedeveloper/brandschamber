"use client";

import Slider from "react-slick";
import styles from "./Testimonial.module.css";


const TESTIMONIALS = [
  {
    name: "Sarah L.",
    text: "They turned my vision into a stunning website — clean, fast, and user-friendly. I couldn’t be happier!",
  },
  {
    name: "Jack L.",
    text: "Their eBook designs are top‑notch — sleek, professional, and exactly what I needed for my brand.",
  },
  {
    name: "Chiristine L.",
    text: "Amazing service from start to finish. The team was creative, responsive, and delivered ahead of schedule.",
  },
  {
    name: "Dean L.",
    text: "Loved working with them! They brought my content to life with eye‑catching eBook layouts and a bold web presence.",
  },
];

export default function Testimonial() {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,

    // Key to get the "big center card" look
    centerMode: true,
    variableWidth: true,

    // keep it like the screenshot
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.testimonialBox}>
      {/* Heading */}
      <div className={styles.testimonialHeading}>
        <h3>TESTIMONIALS THAT SPEAK VOLUMES</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>

      {/* Slider */}
      <div className={styles.testimonialSliderWrapper}>
        <Slider {...settings}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.slideOuter}>
              <div className={styles.testimonialCard}>
                <div className={styles.clientInfo}>
                  <div className={styles.avatar} />
                  <div>
                    <h4>{t.name}</h4>
                  </div>

                  {/* Big quote icon like the second screenshot */}
                  <div className={styles.quoteMark} aria-hidden="true">
                    <img src="/assets/home/quote.svg" alt="" />
                  </div>
                </div>

                <p className={styles.testimonialText}>{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}