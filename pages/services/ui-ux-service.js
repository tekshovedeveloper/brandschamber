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
import RelatedServices from "@/components/related-services/RelatedServices";

const inter = Inter({ subsets: ["latin"] });

const UIUXPortfolio =[
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


export default function UIUXService() {

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
         title={`Design That Feels Effortless — Built with Purpose.`}
         highlightText="Tell us what you're building — we'll show you how to design it properly."
         description={"The best interfaces are the ones users never have to think about. They click, tap, and scroll through your product intuitively — finding exactly what they need, completing actions without friction, and leaving with a positive impression of your brand. That kind of experience doesn't happen by accident. It's designed."}
         imageAlt="Logo design showcase"
         buttonText="Book Your Free Consultation"
         buttonHref="#contact"
         defaultService="UI/UX DESIGN"
       />
       <RunningSlider
           text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
         />
         
         <SinglePortfolio 
         title="UI/UX" 
         heading="UI/UX Design That Connects"
         subheading="We create user interfaces that are intuitive, visually appealing, and designed to keep users engaged. Every interaction is carefully crafted to deliver a seamless experience that feels effortless and drives results. "
         items={UIUXPortfolio} />
           <ServiceFeatureCards
                            title="Our UI/UX Design Services"
                            subtitle="We provide end-to-end UI/UX design — from research-driven strategy to pixel-perfect interfaces and interactive prototypes, for new or existing products."
                            cards={UIUX_SERVICE_CARDS}
                          />
           

         <ServiceProcess {...SERVICE_PROCESS_DATA.uiux} />
         <ServicePricingStripe id="ui-ux-pricing" service="UI/UX" currentService="UI/UX DESIGN"/>
         <Testimonial />
         
          <LiveChatBanner />
<RelatedServices type="uiux" />
      <Footer /> 
    </main>
  );
}





