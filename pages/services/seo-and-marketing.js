import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import BrandSection from "@/components/brand-section/banner-section";
import SinglePortfolio from "@/components/single-portfolio/single-portfolio";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import Footer from "@/components/footer/footer";
import Testimonial from "@/components/testimonial/testimonial";
import ServicePricing from "@/components/service-pricing-name/ServicePricing";
import RunningSlider from "@/components/running-slider/running-slider";
import ServiceProcess from "@/components/service-process/service-process";
import { SERVICE_PROCESS_DATA } from "@/components/service-process/service-process-data";
import ServiceFeatureCards from "@/components/service-feature-cards/service-feature-cards";
import { SEO_AND_MARKETING_SERVICE_CARDS } from "@/components/service-feature-cards/serviceFeatureCardsData";
import ServicePricingStripe from "@/components/service-pricing-stripe/ServicePricingStripe";
import RelatedServices from "@/components/related-services/RelatedServices";
import { breadcrumbItemsByPath } from "@/components/breadcrumbs/breadcrumbItems";


const inter = Inter({ subsets: ["latin"] });

const SeoAndGraphicsPortfolio =[
      { id: 1, image: "/assets/app-service/App 1.png", alt: "Logo 1" },
      { id: 2, image: "/assets/app-service/App 2.png", alt: "Logo 2" },
      { id: 3, image: "/assets/app-service/App 3.png", alt: "Logo 3" },
      { id: 4, image: "/assets/app-service/App 4.png", alt: "Logo 4" },
      { id: 5, image: "/assets/app-service/App 5.png", alt: "Logo 5" },
      { id: 6, image: "/assets/app-service/App 6.png", alt: "Logo 6" },
      { id: 5, image: "/assets/app-service/App 5.png", alt: "Logo 7" },
      { id: 6, image: "/assets/app-service/App 6.png", alt: "Logo 8" },
      { id: 5, image: "/assets/app-service/App 5.png", alt: "Logo 9" },
      { id: 6, image: "/assets/app-service/App 6.png", alt: "Logo 10" },
       { id: 5, image: "/assets/app-service/App 5.png", alt: "Logo 11" },
      { id: 6, image: "/assets/app-service/App 6.png", alt: "Logo 12" },
      { id: 6, image: "/assets/app-service/App 6.png", alt: "Logo 12" },
      { id: 6, image: "/assets/app-service/App 6.png", alt: "Logo 12" },

  
]


export default function SeoAndMarketingService() {

 const handleChatClick = () => {
    // open your chat widget / scroll to contact / etc.
    console.log("Open live chat");
  };


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
         title={`Get Found. Get Clicks. Get Customers.`}
         highlightText="Let's talk about where your business is and how digital marketing can grow it."
         description={`Having a great brand and a great website means nothing if the right people can't find you. Digital marketing is how small businesses and startups cut through the noise, reach their ideal customers, and turn online visibility into real, measurable revenue.`}
         image="/assets/logo-service/logo-banner.gif"
         imageAlt="SEO and digital marketing service showcase"
         buttonText="Book Your Free Consultation"
         buttonHref="#contact"
         defaultService="SEO & MARKETING"
         breadcrumbs={breadcrumbItemsByPath["/services/seo-and-marketing"]}
       />
       <RunningSlider
           text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
         />
         
         {/* <SinglePortfolio 
         title="Graphics Design" 
         heading="Our Graphic Design Creations"
         subheading="We bring stories to life through professional Graphic Design. Every cut, effect, and transition is crafted to engage audiences, convey your message, and leave a lasting impression."
         items={SeoAndGraphicsPortfolio} /> */}
           <ServiceFeatureCards
                            title="Our SEO & Digital Marketing Services"
                            subtitle="We offer a complete range of digital marketing services — each one designed to drive measurable growth for small businesses and startups. Whether you need to be found on Google, reach new audiences on social media, or build a pipeline through email — we have the strategy and the execution capability to deliver it."
                            cards={SEO_AND_MARKETING_SERVICE_CARDS}
                          />
         
        <ServiceProcess {...SERVICE_PROCESS_DATA.seo} />
         <ServicePricingStripe id="seo-pricing" service="SEO" currentService="SEO & MARKETING" />
          <Testimonial />
         
          <LiveChatBanner />
<RelatedServices type="marketing" />
      <Footer /> 
    </main>
  );
}


