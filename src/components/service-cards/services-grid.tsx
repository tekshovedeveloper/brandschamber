// "use client";

// import styles from "./services-grid.module.css";

// type Service = {
//   title: string;
//   description: string;
//   buttonText: string;
//   icon: string;
//   hoverIcon: string;
//   featured?: boolean;
// };

// const services: Service[] = [
//   {
//     title: "LOGO DESIGN",
//     description: "100% custom logos — no templates, no shortcuts. Your brand starts here.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon1.svg",
//     hoverIcon: "/assets/home/service-icon-hover1.svg",
//   },
//   {
//     title: "BRANDING",
//     description:
//       "Brand strategy, visual identity, guidelines, stationery, and social branding.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon2.svg",
//     hoverIcon: "/assets/home/service-icon-hover2.svg",
//   },
//   {
//     title: "WEB DEVELOPMENT",
//     description:
//       "Custom sites, CMS, e-commerce, Shopify, and progressive web apps.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon3.svg",
//     hoverIcon: "/assets/home/service-icon-hover3.svg",
//   },
//   {
//     title: "MOBILE APPS",
//     description:
//       "Research-first interface design for websites and apps—Figma, dev-ready.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon4.svg",
//     hoverIcon: "/assets/home/service-icon-hover4.svg",
//   },
//   {
//     title: "UI/UX DESIGN",
//     description:
//       "Research-first interface design for websites and apps - Figma, dev ready.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon5.svg",
//     hoverIcon: "/assets/home/service-icon-hover5.svg",
//   },
//   {
//     title: "SEO & MARKETING",
//     description:
//       "iOS, Android, and cross-platform apps designed and built end-to-end.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon6.svg",
//     hoverIcon: "/assets/home/service-icon-hover6.svg",
//   },
//   {
//     title: "GRAPHIC DESIGN",
//     description:
//       "Brand films, explainers, social reels, motion graphics, and testimonials.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon7.svg",
//     hoverIcon: "/assets/home/service-icon-hover7.svg",
//   },
//   {
//     title: "VIDEO PRODUCTION",
//     description:
//       "Brand films, explainers, social reels, motion graphics, and testimonials.",
//     buttonText: "Explore Service",
//     icon: "/assets/home/service-icon8.svg",
//     hoverIcon: "/assets/home/service-icon-hover8.svg",
//   },
// ];

// export default function ServicesGrid() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.header}>
//         <h2 className={styles.heading}>
//           EVERY SERVICE YOUR BUSINESS <br />
//           NEEDS — UNDER ONE ROOF.
//         </h2>
//         <p className={styles.subheading}>
//           From your first logo to a full digital growth strategy — without the cost and complexity of
//           managing multiple agencies.
//         </p>
//       </div>

//       <div className={styles.grid}>
//         {services.map((s) => (
//           <article
//             key={s.title}
//             className={`${styles.card} ${s.featured ? styles.featured : ""}`}
//           >
//             <div className={styles.iconWrap}>
//               <img
//                 src={s.icon}
//                 alt={`${s.title} icon`}
//                 className={`${styles.serviceIcon} ${styles.defaultIcon}`}
//               />
//               <img
//                 src={s.hoverIcon}
//                 alt={`${s.title} hover icon`}
//                 className={`${styles.serviceIcon} ${styles.hoverIcon}`}
//               />
//             </div>

//             <h3 className={styles.cardTitle}>{s.title}</h3>
//             <p className={styles.cardDesc}>{s.description}</p>

//             <button className={styles.btn} type="button">
//               {s.buttonText}
//             </button>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import styles from "./services-grid.module.css";

type Service = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
  hoverIcon: string;
  href: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "LOGO DESIGN",
    description:
      "100% custom logos — no templates, no shortcuts. Your brand starts here.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon1.svg",
    hoverIcon: "/assets/home/service-icon-hover1.svg",
    href: "/services/logo-service",
  },
  {
    title: "BRANDING",
    description:
      "Brand strategy, visual identity, guidelines, stationery, and social branding.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon2.svg",
    hoverIcon: "/assets/home/service-icon-hover2.svg",
    href: "/services/branding-service",
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Custom sites, CMS, e-commerce, Shopify, and progressive web apps.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon3.svg",
    hoverIcon: "/assets/home/service-icon-hover3.svg",
    href: "/services/website-service",
  },
  {
    title: "MOBILE APPS",
    description:
      "Research-first interface design for websites and apps—Figma, dev-ready.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon4.svg",
    hoverIcon: "/assets/home/service-icon-hover4.svg",
    href: "/services/app-service",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Research-first interface design for websites and apps - Figma, dev ready.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon5.svg",
    hoverIcon: "/assets/home/service-icon-hover5.svg",
    href: "services/ui-ux-service",
  },
  {
    title: "SEO & MARKETING",
    description:
      "iOS, Android, and cross-platform apps designed and built end-to-end.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon6.svg",
    hoverIcon: "/assets/home/service-icon-hover6.svg",
    href: "/services/seo-and-marketing",
  },
  {
    title: "GRAPHIC DESIGN",
    description:
      "Brand films, explainers, social reels, motion graphics, and testimonials.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon7.svg",
    hoverIcon: "/assets/home/service-icon-hover7.svg",
    href: "/services/graphics-design-service",
  },
  {
    title: "VIDEO PRODUCTION",
    description:
      "Brand films, explainers, social reels, motion graphics, and testimonials.",
    buttonText: "Explore Service",
    icon: "/assets/home/service-icon8.svg",
    hoverIcon: "/assets/home/service-icon-hover8.svg",
    href: "/services/video-creation-service",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          EVERY SERVICE YOUR BUSINESS <br />
          NEEDS — UNDER ONE ROOF.
        </h2>
        <p className={styles.subheading}>
          From your first logo to a full digital growth strategy — without the
          cost and complexity of managing multiple agencies.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className={styles.cardLink}
            aria-label={s.title}
          >
            <article
              className={`${styles.card} ${s.featured ? styles.featured : ""}`}
            >
              <div className={styles.iconWrap}>
                <img
                  src={s.icon}
                  alt={`${s.title} icon`}
                  className={`${styles.serviceIcon} ${styles.defaultIcon}`}
                />
                <img
                  src={s.hoverIcon}
                  alt={`${s.title} hover icon`}
                  className={`${styles.serviceIcon} ${styles.hoverIcon}`}
                />
              </div>

              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>

              <button className={styles.btn} type="button">
                {s.buttonText}
              </button>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}