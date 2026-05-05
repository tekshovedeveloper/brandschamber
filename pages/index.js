import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../src/styles/index.module.css"; 
import MainNavbar from "@/components/main-nav-bar/main-nav-bar";
import PortfolioView from "@/components-pages/index-component/achievements/achievements";
import Testimonial from "@/components/testimonial/testimonial";
import ChooseUs from "@/components-pages/index-component/choose-us/choose-us";
import Footer from "@/components/footer/footer";
import MainBanner from "@/components-pages/index-component/main-banner/main-banner";
import PopularServices from "@/components-pages/index-component/popular-services/PopularServices";
import OfferPopup from "@/components/offer-popup/OfferPopup";
import RevealBanner from "@/components/live-chat-banner/live-chat-banner";
import AwardsSection from "@/components/award-section/AwardsSection";
import ServicesGrid from "@/components/service-cards/services-grid";
import PricingStripe from "@/components/pricing-stripe/pricing-stripe";

 

const inter = Inter({ subsets: ["latin"] });



export default function Home() {




  return (
<>


 

      <main className={`${styles.mainBg} min-h-screen ${inter.className}`}>
<video
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
>
<source
            src="/assets/home/brands-chamber-bg2.mp4"
            type="video/mp4"
          />
</video>

 



 

<div className={styles.pageContent}>
<OfferPopup />
<MainNavbar />
<MainBanner id="home" />
<PortfolioView id="portfolio" />
<PopularServices id="services" />
<ServicesGrid />
<AwardsSection />
<ChooseUs id="about" />
<Testimonial id="testimonial" />
<PricingStripe id="pricing" />
<RevealBanner />
<Footer />
</div>
</main>
</>
  );
}