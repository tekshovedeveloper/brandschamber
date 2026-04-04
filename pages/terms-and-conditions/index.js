import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import Footer from "@/components/footer/footer";
import RunningSlider from "@/components/running-slider/running-slider";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import BrandSection from "@/components/brand-section/banner-section";

import Testimonial from "@/components/testimonial/testimonial";
import Contact from "@/components-pages/index-component/contact-us/contact-us";
import TermsAndConditions from "@/components/terms-and-conditions/Terms-and-conditions";


const inter = Inter({ subsets: ["latin"] });



export default function TermAndConditions() {

 


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
           <TermsAndConditions />
        
        {/* <LiveChatBanner /> */}
      <Footer /> 
    </main>
  );
}





