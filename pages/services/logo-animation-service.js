import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import BannerSection from "../../src/components-pages/logo-animation-component/banner-section/banner-section";
import SinglePortfolio from "@/components/single-portfolio/single-portfolio";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

const logoAnimationPortfolio = [
  {
    id: 1,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/140Bpm-Animation-C2.mp4", // or /videos/demo.mp4
    alt: "book cover 1",
  },
  {
    id: 2,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Ai-Cities-01-Animation.mp4", // or /videos/demo.mp4
    alt: "book cover 2",
  },
    {
    id: 3,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Aivoxa-Animation-2.mp4", // or /videos/demo.mp4
    alt: "Logo 3",
  },
  {
    id: 4,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Anaya-Restaurant-Animation-Concept-2-Color.mp4", // or /videos/demo.mp4
    alt: "book cover 4",
  },
    {
    id: 5,
  video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Appalachian-Creatives-Theatrical-Society-ANIMATION.mp4", // or /videos/demo.mp4
    alt: "book cover 5",
  },
  {
    id: 6,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Auto-Detailing-Masterclass-Animation-C2-R2-WITH-SOUND-3.mp4", // or /videos/demo.mp4
    alt: "book cover 6",
  },
    {
    id: 7,
  video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Bee-Clean-Consept-2-COMP.mp4", // or /videos/demo.mp4
    alt: "book cover 7",
  },
  {
    id: 8,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/BoredomHub-ANIMATION-C3-WITH-SOUND.mp4", // or /videos/demo.mp4
    alt: "book cover 8",
  },
   {
    id: 9,
    video: "https://ladiesinnersense.com/wp-content/uploads/2026/02/Delightora-2-Animtion.mp4", // or /videos/demo.mp4
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
         <SinglePortfolio title="Logo Animation" items={logoAnimationPortfolio} />
          <LiveChatBanner />
      <Footer /> 
    </main>
  );
}





