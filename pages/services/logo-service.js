import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar  from "@/components/main-nav-bar/main-nav-bar";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import styles from "../../src/styles/index.module.css";
import SinglePortfolio from "@/components/single-portfolio/single-portfolio";
import LiveChatBanner from "@/components/live-chat-banner/live-chat-banner"
import Footer from "@/components/footer/footer";
import Testimonial from "@/components/testimonial/testimonial";
import ServicePricing from "@/components/service-pricing-name/ServicePricing";
import BrandSection from "@/components/brand-section/banner-section";
import RunningSlider from "@/components/running-slider/running-slider";
import ServiceProcess from "@/components/service-process/service-process";
import { SERVICE_PROCESS_DATA } from "@/components/service-process/service-process-data";
import ServicePricingStripe from "@/components/service-pricing-stripe/ServicePricingStripe";
import RelatedServices from "@/components/related-services/RelatedServices";
import { breadcrumbItemsByPath } from "@/components/breadcrumbs/breadcrumbItems";
const inter = Inter({ subsets: ["latin"] });

// const logoPortfolio =[
//       { id: 1, image: "/assets/logo-service/logo 1.png", alt: "Logo 1" },
//       { id: 2, image: "/assets/logo-service/logo 2.png", alt: "Logo 2" },
//       { id: 3, image: "/assets/logo-service/logo 3.png", alt: "Logo 3" },
//       { id: 4, image: "/assets/logo-service/logo 4.png", alt: "Logo 4" },
//       { id: 5, image: "/assets/logo-service/logo 5.png", alt: "Logo 5" },
//       { id: 6, image: "/assets/logo-service/logo 6.png", alt: "Logo 6" },
//       { id: 5, image: "/assets/logo-service/logo 7.png", alt: "Logo 7" },
//       { id: 6, image: "/assets/logo-service/logo 1.png", alt: "Logo 8" },
//       { id: 5, image: "/assets/logo-service/logo 2.png", alt: "Logo 9" },
//       { id: 6, image: "/assets/logo-service/logo 3.png", alt: "Logo 10" },
//        { id: 5, image: "/assets/logo-service/logo 4.png", alt: "Logo 11" },
//       { id: 6, image: "/assets/logo-service/logo 5.png", alt: "Logo 12" },
//       { id: 6, image: "/assets/logo-service/logo 6.png", alt: "Logo 13" },
//       { id: 6, image: "/assets/logo-service/logo 7.png", alt: "Logo 14" },

  
// ]


const logoPortfolio =[
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
        <source src="/assets/home/brands-chamber-bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <MainNavbar />
         <BrandSection
  id="service-banner"
  title={`A Logo That Looks Like You Meant It.`}
  highlightText="No templates. No shortcuts. Just great design — made for you. "
  description={`Your logo is the face of your business. It's the first thing people see and the last thing they remember. At Brands Chamber, we design logos that are 100% custom, strategically crafted, and built to make your small business look like it belongs at the top. `}
  image="/assets/logo-service/logo-banner.gif"
  imageAlt="Custom logo design service showcase"
  buttonText="Book Your Free Consultation"
  buttonHref="#contact"
  defaultService="LOGO DESIGN"
  breadcrumbs={breadcrumbItemsByPath["/services/logo-service"]}
/>
<RunningSlider
    text="Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages Trusted by small business owners across industries  ·  100% Custom Every Time  ·  Fast Turnaround  ·  Unlimited Revisions  ·  Affordable Packages"
  />
         <SinglePortfolio
          title="Logo"
          heading="Logos That Work in the Real World"
          subheading="Every logo in our portfolio was built for a real business with a real goal. Browse our work and see how we've helped small businesses across industries establish identities that stand out, scale up, and stick. "
          items={logoPortfolio}
        />
         <ServiceProcess {...SERVICE_PROCESS_DATA.logo} />
         <ServicePricingStripe id="logo-pricing" service="Logo" currentService="LOGO DESIGN"/>
          <Testimonial />
         <LiveChatBanner />
<RelatedServices type="logo" />
      <Footer /> 
    </main>
  );
}
