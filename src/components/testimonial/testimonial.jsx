// "use client";

// import Slider from "react-slick";
// import styles from "./testimonial.module.css";


// const TESTIMONIALS = [
//   {
//     name: "Sarah L.",
//     text: "They turned my vision into a stunning website — clean, fast, and user-friendly. I couldn’t be happier!",
//   },
//   {
//     name: "Jack L.",
//     text: "Their eBook designs are top‑notch — sleek, professional, and exactly what I needed for my brand.",
//   },
//   {
//     name: "Chiristine L.",
//     text: "Amazing service from start to finish. The team was creative, responsive, and delivered ahead of schedule.",
//   },
//   {
//     name: "Dean L.",
//     text: "Loved working with them! They brought my content to life with eye‑catching eBook layouts and a bold web presence.",
//   },
// ];

// export default function Testimonial() {
//   const settings = {
//     infinite: true,
//     arrows: true,
//     speed: 500,

//     centerMode: true,
//     variableWidth: true,

//     slidesToScroll: 1,
//     swipeToSlide: true,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           variableWidth: false,
//           centerMode: false,
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className={styles.testimonialBox}>
//       <div className={styles.testimonialHeading}>
//         <h3>TESTIMONIALS THAT SPEAK VOLUMES</h3>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley
//         </p>
//       </div>

//       <div className={styles.testimonialSliderWrapper}>
//         <Slider {...settings}>
//           {TESTIMONIALS.map((t) => (
//             <div key={t.name} className={styles.slideOuter}>
//               <div className={styles.testimonialCard}>
//                 <div className={styles.clientInfo}>
//                   <div className={styles.avatar} />
//                   <div>
//                     <h4>{t.name}</h4>
//                   </div>

//                   <div className={styles.quoteMark} aria-hidden="true">
//                     <img src="/assets/home/quote.svg" alt="" />
//                   </div>
//                 </div>

//                 <p className={styles.testimonialText}>{t.text}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }


"use client";

import Slider from "react-slick";
import styles from "./testimonial.module.css";

const TESTIMONIALS = [
  {
    name: "Sarah L.",
    text: "Working with this agency transformed our brand. Their creative solutions and dedication were beyond our expectations.",
  },
  {
    name: "Michael T.",
    text: "Exceptional service and stunning results. The team truly cared about our vision and delivered more than we imagined.",
  },
  {
    name: "Christine L.",
    text: "They made a significant difference for our business. Smooth process, clear communication, and beautiful design.",
  },
  {
    name: "Dean L.",
    text: "Professional, fast, and highly creative. I’d recommend them to anyone looking to elevate their digital presence.",
  },
];

/* -------- custom arrows (round outlined buttons) -------- */

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} ${styles.customArrow} ${styles.prevArrow}`}
      style={style}
      onClick={onClick}
      aria-label="Previous testimonial"
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
      aria-label="Next testimonial"
    >
      <span className={styles.arrowIcon}>&rarr;</span>
    </button>
  );
}

export default function Testimonial({id}) {
  const settings = {
    infinite: true,
    speed: 500,

    centerMode: true,
    centerPadding: "15%",
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,          // auto slide
    autoplaySpeed: 4000,     // 4 seconds
    pauseOnHover: true,

    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.testimonialBox} id={id}>
      <div className={styles.testimonialHeading}>
        <h3>TESTIMONIALS THAT SPEAK VOLUMES</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>

      <div className={styles.testimonialSliderWrapper}>
        <Slider {...settings}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.slideOuter}>
              <div className={styles.testimonialCard}>
                <div className={styles.clientInfo}>
                  <div className={styles.avatar} />
                  <div>
                    <h4>{t.name}</h4>
                    {/* <p className={styles.clientRole}>CEO of BrightTech</p> */}
                  </div>

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