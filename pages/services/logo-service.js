import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import BannerSection from "../../src/components-pages/logo-component/banner-section/banner-section";
import SinglePortfolio from "@/components/single-portfolio/single-portfolio";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import Footer from "@/components/footer/footer";
import ServicePricing from "@/components/service-pricing-name/ServicePricing";

const inter = Inter({ subsets: ["latin"] });

const logoPortfolio =[
      { id: 1, image: "/assets/logo-service/logo 1.webp", alt: "Logo 1" },
      { id: 2, image: "/assets/logo-service/logo 2.webp", alt: "Logo 2" },
      { id: 3, image: "/assets/logo-service/logo 3.webp", alt: "Logo 3" },
      { id: 4, image: "/assets/logo-service/logo 4.webp", alt: "Logo 4" },
      { id: 5, image: "/assets/logo-service/logo 5.webp", alt: "Logo 5" },
      { id: 6, image: "/assets/logo-service/logo 6.webp", alt: "Logo 6" },
      { id: 5, image: "/assets/logo-service/logo 5.webp", alt: "Logo 7" },
      { id: 6, image: "/assets/logo-service/logo 6.webp", alt: "Logo 8" },
      { id: 5, image: "/assets/logo-service/logo 5.webp", alt: "Logo 9" },
      { id: 6, image: "/assets/logo-service/logo 6.webp", alt: "Logo 10" },
       { id: 5, image: "/assets/logo-service/logo 5.webp", alt: "Logo 11" },
      { id: 6, image: "/assets/logo-service/logo 6.webp", alt: "Logo 12" },

  
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
        <source src="/assets/brands_chamber.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <MainNavbar />
       <BannerSection />
         <SinglePortfolio title="Logo" items={logoPortfolio} />
         <ServicePricing id="logo-pricing" service="Logo" />
         <LiveChatBanner />
      <Footer /> 
    </main>
  );
}





