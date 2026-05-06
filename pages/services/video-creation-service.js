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
import { VIDEO_SERVICE_CARDS } from "@/components/service-feature-cards/serviceFeatureCardsData";
import ServicePricingStripe from "@/components/service-pricing-stripe/ServicePricingStripe";
import RelatedServices from "@/components/related-services/RelatedServices";


const inter = Inter({ subsets: ["latin"] });

const VideoCreationPortfolio =[
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


export default function VideoCreationService() {

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
         title={`Tell Your Story. Move Your Audience. Grow Your Business.`}
         highlightText="Tell us your story — we'll work out the best way to tell it on screen."
         description={`Video is the most powerful medium in digital marketing — and it's not close. It stops the scroll, holds attention, communicates emotion, and drives action in a way that static content simply cannot. The businesses winning online right now are the ones showing up with video. At Brands Chamber, we make sure yours is one of them.`}
         image="/assets/logo-service/logo-banner.gif"
         imageAlt="Logo design showcase"
         buttonText="Book Your Free Consultation"
         buttonHref="#contact"
         defaultService="VIDEO PRODUCTION"
       />
       <RunningSlider
           text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
         />
         
         <SinglePortfolio 
         title="Video Creation" 
         heading="Our Video Creations"
         subheading="We bring stories to life through professional video editing. Every cut, effect, and transition is crafted to engage audiences, convey your message, and leave a lasting impression."
         items={VideoCreationPortfolio} />
           <ServiceFeatureCards
                            title="Our Video Production & Motion Graphics Services"
                            subtitle="We produce all types of videos — from live-action brand films and product videos to animated explainers and motion graphics — handling scripting, production, post-production, and delivery all under one roof."
                            cards={VIDEO_SERVICE_CARDS}
                          />
         
        <ServiceProcess {...SERVICE_PROCESS_DATA.video} />
         <ServicePricingStripe id="video-creation-pricing" service="Video Creation" currentService="VIDEO PRODUCTION" />
          <Testimonial />
         
          <LiveChatBanner />
<RelatedServices type="video" />
      <Footer /> 
    </main>
  );
}





