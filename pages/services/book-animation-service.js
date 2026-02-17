import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import BannerSection from "../../src/components-pages/book-animation-component/banner-section/banner-section";
import SinglePortfolio from "@/components/single-portfolio/single-portfolio";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import Footer from "@/components/footer/footer";
import ServicePricing from "@/components/service-pricing-name/ServicePricing";
import Testimonial from "@/components/testimonial/testimonial";

const inter = Inter({ subsets: ["latin"] });

const bookAnimationPortfolio = [
  {
    id: 1,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Annihilation-BOOK-COVER-ANIMATION-C1-2.mp4", // or /videos/demo.mp4
    alt: "book cover 1",
  },
  {
    id: 2,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Census-Driven-Book-COVER-ANIMATION-C2f.mp4", // or /videos/demo.mp4
    alt: "book cover 2",
  },
    {
    id: 3,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/EXCEK-MADE-EASY-COVER-ANIMATION-1.mp4", // or /videos/demo.mp4
    alt: "Logo 3",
  },
  {
    id: 4,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/EXCEK-MADE-EASY-COVER-ANIMATION-3.mp4", // or /videos/demo.mp4
    alt: "book cover 4",
  },
    {
    id: 5,
  video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Final-Render.mp4", // or /videos/demo.mp4
    alt: "book cover 5",
  },
  {
    id: 6,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Get-Paid-To-Be-You-Cover-1-comp.mp4", // or /videos/demo.mp4
    alt: "book cover 6",
  },
    {
    id: 7,
  video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Get-Paid-To-Be-You-Cover-2-V2.mp4", // or /videos/demo.mp4
    alt: "book cover 7",
  },
  {
    id: 8,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/How-To-Talk-Money-Book-Cover-Animation-C1.mp4", // or /videos/demo.mp4
    alt: "book cover 8",
  },
   {
    id: 9,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/How-To-Talk-Money-Book-Cover-Animation-C2.mp4", // or /videos/demo.mp4
    alt: "book cover 9",
  },


];


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
         <SinglePortfolio title="Book Animation" items={bookAnimationPortfolio} />
          <ServicePricing id="animation-pricing" service="Animation" />
           <Testimonial />

         <LiveChatBanner />
      <Footer /> 
    </main>
  );
}





