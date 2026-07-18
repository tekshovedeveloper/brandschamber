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
import { UIUX_SERVICE_CARDS } from "@/components/service-feature-cards/serviceFeatureCardsData";
import ServicePricingStripe from "@/components/service-pricing-stripe/ServicePricingStripe";
import Faq from "@/components/faq/Faq";
import { breadcrumbItemsByPath } from "@/components/breadcrumbs/breadcrumbItems";

const inter = Inter({ subsets: ["latin"] });


export default function FaqAccordion() {

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
      
          
     
         <Faq breadcrumbs={breadcrumbItemsByPath["/faq"]} />
         
       
         
          <LiveChatBanner />
      <Footer /> 
    </main>
  );
}




