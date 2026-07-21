"use client";

import { useState } from "react";
import Slider from "react-slick";
import styles from "./video-testimonial.module.css";

// Example data – replace thumbnail + videoSrc with your real files
const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah L.",
    role: "Brand Owner",
    thumbnail: "/assets/home/video-person1.png",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "How a full rebrand and new website helped Sarah triple her online sales.",
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Startup Founder",
    thumbnail: "/assets/home/video-person1.png",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "Michael shares his experience launching his product with our design team.",
  },
  {
    id: 3,
    name: "Christine L.",
    role: "Marketing Lead",
    thumbnail: "/assets/home/video-person1.png",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "Christine talks about the new campaigns and brand assets we built for her team.",
  },
  {
    id: 4,
    name: "Dean L.",
    role: "E‑commerce Owner",
    thumbnail: "/assets/home/video-person1.png",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "Dean explains how our UX revamp improved conversions on his store.",
  },
];

/* -------- custom arrows (reuse style of text testimonials) -------- */

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} ${styles.customArrow} ${styles.prevArrow}`}
      style={style}
      onClick={onClick}
      aria-label="Previous video testimonial"
    >
      <span className={styles.arrowIcon}>&larr;</span>
    </button>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} ${styles.customArrow} ${styles.nextArrow}`}
      style={style}
      onClick={onClick}
      aria-label="Next video testimonial"
    >
      <span className={styles.arrowIcon}>&rarr;</span>
    </button>
  );
}

export default function VideoTestimonial() {
  const [activeVideo, setActiveVideo] = useState(null); // {videoSrc, name} or null

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  autoplay: true,          // ✅ auto slide
  autoplaySpeed: 4000,     // 4 seconds
  pauseOnHover: true,

  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  const closeModal = () => setActiveVideo(null);

  return (
    <section className={styles.videoTestimonialBox}>
      <div className={styles.videoHeading}>
        <h3>VIDEO TESTIMONIALS</h3>
        <p>
          Hear directly from our clients as they share their experiences,
          results, and favorite moments working with our team.
        </p>
      </div>

      <div className={styles.videoSliderWrapper}>
        <Slider {...settings}>
          {VIDEO_TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.slideOuter}>
              <button
                type="button"
                className={styles.videoCard}
                onClick={() =>
                  setActiveVideo({ videoSrc: t.videoSrc, name: t.name })
                }
              >
                <div className={styles.thumbnailWrapper}>
                  <img
                    src={t.thumbnail}
                    alt={`${t.name} testimonial`}
                    className={styles.thumbnailImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.playOverlay}>
                    <span className={styles.playCircle}>
                      <span className={styles.playTriangle} />
                    </span>
                  </div>
                </div>

                <div className={styles.videoInfo}>
                  <h4>{t.name}</h4>
                  {t.role && <p className={styles.videoRole}>{t.role}</p>}
                  {t.summary && (
                    <p className={styles.videoSummary}>{t.summary}</p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal / Popup */}
      {activeVideo && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close video"
            >
              ×
            </button>

            <div className={styles.modalVideoWrapper}>
              <iframe
                src={activeVideo.videoSrc}
                title={activeVideo.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
