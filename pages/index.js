import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../src/styles/index.module.css"; 
import MainNavbar from "@/components/main-nav-bar/main-nav-bar";
import PortfolioView from "@/components-pages/index-component/achievements/achievements";
import Testimonial from "@/components/testimonial/testimonial";
import ChooseUs from "@/components-pages/index-component/choose-us/choose-us";
import Footer from "@/components/footer/footer";
import MainBanner from "@/components-pages/index-component/main-banner/main-banner";
import PopularServices from "@/components-pages/index-component/popular-services/PopularServices";
import OfferPopup from "@/components/offer-popup/OfferPopup";
import RevealBanner from "@/components/live-chat-banner/live-chat-banner";
import AwardsSection from "@/components/award-section/AwardsSection";
import ServicesGrid from "@/components/service-cards/services-grid";
import PricingStripe from "@/components/pricing-stripe/pricing-stripe";

 

const inter = Inter({ subsets: ["latin"] });

 

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brands Chamber",
    url: "https://brandschamber.com",
    logo: "https://brandschamber.com/logo.png",
    description:
      "Brands Chamber provides web development, SEO services, branding, and digital marketing solutions for businesses.",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/"
    ]
  };

 

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Brands Chamber",
    url: "https://brandschamber.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://brandschamber.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

 

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development, SEO, Digital Marketing, Branding",
    provider: {
      "@type": "Organization",
      name: "Brands Chamber",
      url: "https://brandschamber.com"
    },
    areaServed: "Worldwide",
    description:
      "Professional web development, SEO services, branding, mobile app development, and digital marketing solutions for business growth."
  };

 

  return (
<>
<Head>
<title>
          Web Development, SEO & Digital Marketing Services | Brands Chamber
</title>
<meta
          name="description"
          content="Brands Chamber provides professional web development, SEO services, branding, and digital marketing solutions to help businesses grow online."
        />
<meta
          name="keywords"
          content="web development, SEO services, digital marketing, branding, mobile app development, graphic design, video production"
        />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://brandschamber.com/" />

 

        <meta
          property="og:title"
          content="Web Development, SEO & Digital Marketing Services | Brands Chamber"
        />
<meta
          property="og:description"
          content="Grow your business with professional web development, SEO services, branding, and digital marketing solutions."
        />
<meta property="og:url" content="https://brandschamber.com/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Brands Chamber" />
<meta
          property="og:image"
          content="https://brandschamber.com/og-image.jpg"
        />

 

        <meta name="twitter:card" content="summary_large_image" />
<meta
          name="twitter:title"
          content="Web Development, SEO & Digital Marketing Services | Brands Chamber"
        />
<meta
          name="twitter:description"
          content="Grow your business with professional web development, SEO services, branding, and digital marketing solutions."
        />
<meta
          name="twitter:image"
          content="https://brandschamber.com/og-image.jpg"
        />

 

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
</Head>

 

      <main className={`${styles.mainBg} min-h-screen ${inter.className}`}>
<video
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
>
<source
            src="/assets/home/brands-chamber-bg2.mp4"
            type="video/mp4"
          />
</video>

 

        <noscript>
<img
            src="/assets/home/fallback-home.jpg"
            alt="Web development and SEO services by Brands Chamber"
            style={{ width: "100%", height: "auto" }}
          />
</noscript>

 

        <div className={styles.pageContent}>
<OfferPopup />
<MainNavbar />

 

          {/* SEO-visible content without changing layout */}
<section
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden"
            }}
            aria-hidden="false"
>
<h1>
              Web Development, SEO & Digital Marketing Services for Business Growth
</h1>
<h2>Professional Digital Services</h2>
<p>
              Brands Chamber provides web development, SEO services, branding,
              digital marketing, mobile app development, graphic design, and
              video production solutions for businesses looking to grow online.
</p>
<p>
              Our services are designed to help brands improve visibility,
              generate leads, increase traffic, and build a stronger online
              presence worldwide.
</p>
<a href="/services">Our Services</a>
<a href="/contact-us">Contact Us</a>
<a href="/about-us">About Us</a>
<a href="/pricing">Pricing</a>
</section>

 

          <MainBanner id="home" />
<PortfolioView id="portfolio" />
<PopularServices id="services" />
<ServicesGrid />
<AwardsSection />
<ChooseUs id="about" />
<Testimonial id="testimonial" />
<PricingStripe id="pricing" />
<RevealBanner />
<Footer />
</div>
</main>
</>
  );
}