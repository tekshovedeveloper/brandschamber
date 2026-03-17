import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import ServicePricing from "@/components/service-pricing-name/ServicePricing";
import SinglePortfolio from "@/components/single-portfolio/single-portfolio";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import Footer from "@/components/footer/footer";
import BrandSection from "@/components/brand-section/banner-section";
import RunningSlider from "@/components/running-slider/running-slider";
import ServiceProcess from "@/components/service-process/service-process";
import { SERVICE_PROCESS_DATA } from "@/components/service-process/service-process-data";
import ServiceFeatureCards from "@/components/service-feature-cards/service-feature-cards";
import { APP_SERVICE_CARDS } from "@/components/service-feature-cards/serviceFeatureCardsData";
import ServicePricingStripe from "@/components/service-pricing-stripe/ServicePricingStripe";



import Testimonial from "@/components/testimonial/testimonial";
const inter = Inter({ subsets: ["latin"] });

const logoPortfolio =[
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


export default function LogoService() {

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
           title={`Your Business Deserves Its Own App`}
           highlightText="From idea to App Store — we handle everything. "
           description={`Your customers are on their phones — all day, every day. A well-built mobile app puts your business in their pocket, keeps them engaged, and gives you a direct line to the people who matter most. At Brands Chamber, we build mobile apps that are fast, functional, and built for real business results.
From idea to App Store — we handle everything. `}
           image="/assets/logo-service/logo-banner.gif"
           imageAlt="Logo design showcase"
           buttonText="Book Your Free Consultation"
           buttonHref="#contact"
           defaultService="MOBILE APPS"
         />
         <RunningSlider
             text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
           />
           
         <SinglePortfolio 
         title="App" 
         heading="Our App Portfolio"
         subheading="Explore the apps we’ve designed and developed. Each project combines sleek design, smooth functionality, and user-focused experiences to bring ideas to life on every device. "
         items={logoPortfolio} />
          <ServiceFeatureCards
                   title="Our Mobile App Development Services"
                   subtitle="We offer a complete suite of mobile app services — covering every platform, every stage of development, and every need your business might have. Whether you're bringing a new idea to life or optimising an existing app, we have the expertise to make it happen."
                   cards={APP_SERVICE_CARDS}
                 />

          <ServiceProcess {...SERVICE_PROCESS_DATA.app} />
         <ServicePricingStripe id="mobile-app-pricing" service="Mobile App" currentService="MOBILE APPS" />
          <Testimonial />
         
        
         <LiveChatBanner />
      <Footer /> 
    </main>
  );
}





