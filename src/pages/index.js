import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../styles/index.module.css";
import PortfolioView from "@/components-pages/index-component/achievements/achievements";
import BuisnessProblem from "@/components-pages/index-component/buisness-problem/buisness-problem";
import Testimonial from "@/components/testimonial/testimonial";
import ShowWorkIndex from "@/components-pages/index-component/show-work-index/showWorkIndex";
import ChooseUs from "@/components-pages/index-component/choose-us/choose-us";
import IndustriesWeServe from "@/components-pages/index-component/industries-we-serve/industries-we-serve";
import Pricing from "@/components-pages/index-component/pricing/pricing";
import FrequentlyQuestion from "@/components-pages/index-component/frequently-question/frequently-question";
// import LetsTalk from "@/components-pages/index-component/lets-talk/lets-talk";
import Footer from "@/components/footer/footer";
import LetsTalk from "@/components/Lets-Talk/LetsTalk";
import Contact from "@/components-pages/index-component/contact-us/contact-us";
import MainBanner from "@/components-pages/index-component/main-banner/main-banner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.mainBg} min-h-screen ${inter.className}`}>
      <MainNavbar />
      <MainBanner id="home" />
       <BuisnessProblem id="services" />
      <PortfolioView id="portfolio"/>
     
      <ShowWorkIndex />
      <ChooseUs id="about" />
      <Testimonial />
      <LetsTalk />
      <Pricing id="pricing" />
      <FrequentlyQuestion />
      <Contact id="contact"/>
      {/* <IndustriesWeServe /> */}
      {/* <LetsTalk /> */}
      <Footer />
    </main>
  );
}


// background: var(--white-color) url(../images/lets-talk-bg.png) top center / cover no-repeat;

