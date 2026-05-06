import Link from "next/link";
import MainNavbar from "@/components/main-nav-bar/main-nav-bar";
import styles from "../../src/styles/index.module.css";

import Footer from "@/components/footer/footer";
import ServicesGrid from "@/components/service-cards/services-grid";
import BrandSection from "@/components/brand-section/banner-section";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    title: "Website Development",
    href: "/services/website-service",
    description:
      "Custom websites, CMS websites, e-commerce stores, Shopify websites, and progressive web apps.",
  },
  {
    title: "Search Engine Optimization",
    href: "/services/search-engine-optimization",
    description:
      "Technical SEO, on-page optimization, keyword strategy, local SEO, and organic growth support.",
  },
  {
    title: "SEO and Digital Marketing",
    href: "/services/seo-and-marketing",
    description:
      "SEO, PPC, content marketing, social media marketing, and digital campaigns for business growth.",
  },
  {
    title: "Logo Design",
    href: "/services/logo-service",
    description:
      "Custom logo design services for startups, small businesses, and growing brands.",
  },
  {
    title: "Logo Animation",
    href: "/services/logo-animation-service",
    description:
      "Animated logos and motion branding for videos, intros, social media, and presentations.",
  },
  {
    title: "Branding",
    href: "/services/branding-service",
    description:
      "Brand strategy, visual identity, brand guidelines, stationery, and complete brand systems.",
  },
  {
    title: "Mobile App Development",
    href: "/services/app-service",
    description:
      "iOS, Android, and cross-platform mobile app development for business and product ideas.",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-service",
    description:
      "User-focused website, app, dashboard, and digital product interface design.",
  },
  {
    title: "Graphic Design",
    href: "/services/graphics-design-service",
    description:
      "Marketing graphics, social media creatives, brand visuals, print materials, and ad designs.",
  },
  {
    title: "Video Creation",
    href: "/services/video-creation-service",
    description:
      "Promotional videos, brand videos, social media videos, motion graphics, and video content.",
  },
  {
    title: "Book Cover Design",
    href: "/services/book-cover",
    description:
      "Professional book cover design for authors, publishers, ebooks, and print books.",
  },
  {
    title: "Book Animation",
    href: "/services/book-animation-service",
    description:
      "Animated book covers and promotional video content for book launches and social media.",
  },
];

export default function ServicesIndex() {
  return (
    <main className={`${styles.mainBg} min-h-screen ${inter.className}`}>
    
         <video
            className={styles.videoBg}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/home/brands-chamber-bg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      <MainNavbar />
               <BrandSection
        id="service-banner"
        title={`Digital Services for Brands, Startups, and Small Businesses`}
        highlightText="Let's talk about your brand — where it is and where it needs to go."
        description={`Explore Brands Chamber’s complete range of creative, development,
            branding, SEO, marketing, and digital product services. `}
        image="/assets/logo-service/logo-banner.gif"
        imageAlt="Logo design showcase"
        buttonText="Book Your Free Consultation"
        buttonHref="#contact"
        defaultService="LOGO DESIGN"
      />
     

      <ServicesGrid />

      <Footer />
    </main>
  );
}