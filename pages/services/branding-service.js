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
import RunningSlider from "@/components/running-slider/running-slider";
import ServicePricing from "@/components/service-pricing-name/ServicePricing";
import ServiceProcess from "@/components/service-process/service-process";
import { SERVICE_PROCESS_DATA } from "@/components/service-process/service-process-data";
import ServiceFeatureCards from "@/components/service-feature-cards/service-feature-cards";
import { BRAND_SERVICE_CARDS } from "@/components/service-feature-cards/serviceFeatureCardsData";

const inter = Inter({ subsets: ["latin"] });

const BrandingPortfolio =[
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


export default function BrandingService() {

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
         title={`A Brand That People Remember A Business They Trust.`}
         highlightText="Let's talk about your brand — where it is and where it needs to go."
         description={`A logo gets you noticed. A brand keeps you remembered. At Brands Chamber, we build complete brand identities for small businesses and startups — rooted in strategy, expressed through design, and built to grow with you from day one. 
We don't start with aesthetics. We start with thinking. Because a brand that looks good but stands for nothing is just decoration.`}
         image="/assets/logo-service/logo-banner.gif"
         imageAlt="Logo design showcase"
         buttonText="Book Your Free Consultation"
         buttonHref="#contact"
         defaultService="BRANDING"
       />
       <RunningSlider
           text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
         />
         
         <SinglePortfolio 
         title="Branding" 
         heading="WEBSITES That Work in the Real World"
         subheading="Every logo in our portfolio was built for a real business with a real goal. Browse our work and see how we've helped small businesses across industries establish identities that stand out, scale up, and stick."
         items={BrandingPortfolio} />
         <ServiceFeatureCards
                  title="Our Branding Portfolio"
                  subtitle="Explore our work in crafting memorable brands. Each project highlights creativity, strategy, and designs that make businesses stand out."
                  cards={BRAND_SERVICE_CARDS}
                />    

        <ServiceProcess {...SERVICE_PROCESS_DATA.brand} />
         <ServicePricing id="branding-pricing" service="Branding" currentService="BRANDING"/>
          <Testimonial />
         
          <LiveChatBanner />
      <Footer /> 
    </main>
  );
}





