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
import { breadcrumbItemsByPath } from "@/components/breadcrumbs/breadcrumbItems";
const inter = Inter({ subsets: ["latin"] });



export default function Contacts() {

 


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
                     title={`Get in Touch. Let’s Build Something Great.`}
                     highlightText="Ready to help you move forward "
                     description={`Have a question, an idea, or ready to start your project? We’re here to help. At Brands Chamber, we believe great work starts with a simple conversation.`}
                     image="/assets/logo-service/logo-banner.gif"
                     imageAlt="Brands Chamber contact page consultation banner"
                     buttonText="Book Your Free Consultation"
                     buttonHref="#contact"
                     defaultService=""
                     breadcrumbs={breadcrumbItemsByPath["/contact"]}
                   />
       <RunningSlider
             text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
           />
        <Contact />
        <Testimonial />
        <LiveChatBanner />
      <Footer /> 
    </main>
  );
}


