import Link from "next/link";
import styles from "./RelatedServices.module.css";

const relatedMap = {
  app: [
    {
      title: "UI/UX Design Services",
      href: "/services/ui-ux-service",
    },
    {
      title: "Website Development Services",
      href: "/services/website-service",
    },
    {
      title: "Branding Services",
      href: "/services/branding-service",
    },
  ],

  logo: [
    {
      title: "Branding Services",
      href: "/services/branding-service",
    },
    {
      title: "Logo Animation Services",
      href: "/services/logo-animation-service",
    },
    {
      title: "Graphic Design Services",
      href: "/services/graphics-design-service",
    },
  ],

  branding: [
    {
      title: "Logo Design Services",
      href: "/services/logo-service",
    },
    {
      title: "Graphic Design Services",
      href: "/services/graphics-design-service",
    },
    {
      title: "Website Development Services",
      href: "/services/website-service",
    },
  ],

  uiux: [
    {
      title: "Website Development Services",
      href: "/services/website-service",
    },
    {
      title: "App Development Services",
      href: "/services/app-service",
    },
    {
      title: "SEO and Digital Marketing",
      href: "/services/seo-and-marketing",
    },
  ],

  video: [
    {
      title: "Graphic Design Services",
      href: "/services/graphics-design-service",
    },
    {
      title: "Logo Animation Services",
      href: "/services/logo-animation-service",
    },
    {
      title: "Branding Services",
      href: "/services/branding-service",
    },
  ],

  graphics: [
    {
      title: "Branding Services",
      href: "/services/branding-service",
    },
    {
      title: "Logo Design Services",
      href: "/services/logo-service",
    },
    {
      title: "Video Creation Services",
      href: "/services/video-creation-service",
    },
  ],

  marketing: [
    {
      title: "Search Engine Optimization",
      href: "/services/search-engine-optimization",
    },
    {
      title: "Website Development Services",
      href: "/services/website-service",
    },
    {
      title: "Graphic Design Services",
      href: "/services/graphics-design-service",
    },
  ],

  website: [
    {
      title: "SEO and Digital Marketing",
      href: "/services/seo-and-marketing",
    },
    {
      title: "UI/UX Design Services",
      href: "/services/ui-ux-service",
    },
    {
      title: "Search Engine Optimization",
      href: "/services/search-engine-optimization",
    },
  ],

  creative: [
    {
      title: "Logo Design Services",
      href: "/services/logo-service",
    },
    {
      title: "Branding Services",
      href: "/services/branding-service",
    },
    {
      title: "Video Creation Services",
      href: "/services/video-creation-service",
    },
  ],
};

export default function RelatedServices({ type = "creative" }) {
  const services = relatedMap[type] || relatedMap.creative;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Related Services</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <Link key={service.href} href={service.href} className={styles.card}>
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}