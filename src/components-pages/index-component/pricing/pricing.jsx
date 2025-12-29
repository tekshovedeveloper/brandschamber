"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./pricing.module.css";

const CATEGORIES = [
  "Logo",
  "Website",
  "Animation",
  "Branding",
  "SEO",
  "SMM",
  "Label Design",
];

// ✅ Your provided pricing cards (Logo category)
const LOGO_PACKAGES = [
  {
    title: "Logo Basic",
    price: "$49",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "4 Original Logo Concepts",
      "2 Dedicated Logo Designer",
      "4 Revisions",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG Only",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
  {
    title: "Logo Professional",
    price: "$199",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "12 Original Logo Concepts",
      "4 Dedicated Logo Designer (Industry Specific)",
      "Unlimited Revisions",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Email Signature Design",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
      "24/7 Support (Email, Chat, Call, SMS, Whatsapp)",
    ],
  },
  {
    title: "Logo Elite",
    price: "$399",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Unlimited Original Logo Concepts",
      "8 Dedicated Logo Designer (Industry Specific)",
      "Unlimited Revisions",
      "Social Media Page Design",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Email Signature Design",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
  {
    title: "Logo Infinite",
    price: "$1249",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Unlimited Original Logo Concepts",
      "12 Dedicated Logo Designer (Industry Specific)",
      "Unlimited Revisions",
      "5 Page Informative Website",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Brand Book",
      "Email Signature Design",
      "Social Media Designs (Facebook, Twitter, Instagram)",
      "2 Sided Flyer OR Bi-Fold Brochure Design",
      "With Grey Scale Format",
      "Free Icon Design",
      "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
      "24 - 48 Business Hours Turn Around Time",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
  {
    title: "Mascot Logo",
    price: "$599",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "2 Mascot Logo Concepts",
      "Unlimited Revisions",
      "Hand drawn Sketch",
      "Presentation on mockup",
      "24 - 48 Business Hours Turn Around Time",
      "File Formats: Ai,Eps,Png,Jpeg,pdf",
      "MORE FEATURES",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Money Back Guarantee",
      "Dedicated Account Manager",
    ],
  },
];

// ✅ Add other categories here (sample data)
const WEBSITE_PACKAGES =  [
  {
    title: "Basic Website",
    price: "$499",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "3 Page Website",
      "Custom Layout Design",
      "Contact/Query Form",
      "1 Banner Design",
      "2 Stock Photos",
      "FREE Favicon Design",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Website Initial Concepts in 48 Hours",
      "Complete Design & Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "Value Added Services",
      "Mobile Responsive will be Additional $200*",
      "CMS will be Additional $250*",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    title: "Startup Website",
    price: "$899",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "5 Page Website",
      "Custom Layout Design",
      "Contact/Query Form",
      "3 Banner Design",
      "5 Stock Photos",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Complete W3C Certified HTML",
      "Website Initial Concepts in 48 Hours",
      "Complete Design & Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "Value Added Services",
      "Mobile Responsive will be Additional $200*",
      "CMS will be Additional $250*",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    title: "Proffesional Website",
    price: "$1499",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Up to 10 Unique Pages Website",
      "CMS /Admin Panel Integration",
      "5+ Stock Photos & Banner Designs",
      "FREE Social Media Integration",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Website Initial Concepts in 48 Hours",
      "Complete Design & Deployment",
      "Custom, Interactive & Dynamic Web Design",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "Value Added Services",
      "Mobile Responsive will be Additional $200*",
      "CMS will be Additional $250*",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    title: "E-Commerce Website",
    price: "$1799",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Custom Ecommerce Website",
      "Up to 200 Products",
      "CMS /Admin Panel Integration",
      "Fully Mobile Responsive",
      "Shopping Cart Integration",
      "Payment Gateway Integration",
      "Product Listing & Management",
      "Order Management & Tracking",
      "Banner Designs",
      "Unlimited Revisions",
      "FREE Social Media Integration",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap Search Engine Submission",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    title: "Corporate Website",
    price: "$3999",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Up to 15 Unique Pages Website",
      "Custom Made, Interactive & Dynamic Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Up to 10 Custom Made Banner Designs",
      "10 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
      "Online Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    title: "Platinum Website",
    price: "$6999",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    features: [
      "Up to 20 Unique Pages Website",
      "Custom Made, Interactive & Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
      "Online Payment Integration (Optional)",
      "Multi Lingual (Optional)",
      "Custom Dynamic Forms (Optional)",
      "Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
];

const ANIMATION_PACKAGES = [
  {
    title: "Teaser",
    price: "$499",
    desc: "",
    features: [
      "30sec Duration",
      "Script Writing",
      "Custom Artwork",
      "Background Music",
      "HD Format Video",
      "Dedicated Support",
      "100% Ownership Rights",
      "100% Money-back Guarantee",
    ],
  },
  {
    title: "Startup",
    price: "$799",
    desc: "",
    features: [
      "30sec Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Hand-drawn Illustrations",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
      "100% Ownership Rights",
      "100% Money-back Guarantee",
    ],
  },
  {
    title: "Classic",
    price: "$999",
    desc: "",
    features: [
      "30sec Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Characters",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
      "100% Ownership Rights",
      "100% Money-back Guarantee",
    ],
  },
  {
    title: "3D Video",
    price: "$3999",
    desc: "",
    features: [
      "2 3D Object Models",
      "Unlimited Storyboard Revisions",
      "Professional Voice - Over",
      "Background Music",
      "Exotic Animations",
      "HD Video Format",
      "6 Weeks Delivery Time",
      "100% Ownership Rights",
      "100% Money-back Guarantee",
    ],
  },
];

const BRANDING_PACKAGES = [
  {
    title: "Branding Startup",
    price: "$499",
    desc: "",
    features: [
      "Logo Design",
      "6 Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Media",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Website Design",
      "5 Pages Custom Business Website",
      "Complete Deployment",
    ],
  },
  {
    title: "Branding Plus",
    price: "$999",
    desc: "",
    features: [
      "Logo Design",
      "12 Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Media",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Flyer Design / Label Design",
      "Website Design",
      "Custom 5 Pages Professional Website",
      "Content Management System (WordPress)",
      "Responsive Design (Mobile Compatible)",
      "Complete Deployment",
      "Social Media Design",
      "Facebook Fanpage Splash Page + Cover Photo",
    ],
  },
  {
    title: "Branding Classic",
    price: "$1499",
    desc: "",
    features: [
      "Logo Design",
      "12 Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Media",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Any Product of your Choice:",
      "Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile)",
      "Website Design",
      "10+ Page Website",
      "Content Management System (WordPress/Joomla)",
      "Complete Deployment",
      "Search Engine Submission",
      "Google, Bing, Yahoo and More",
      "Social Media Design",
      "Facebook Fanpage Splash Page + Cover Photo",
      "Twitter Background Design",
      "Google+ Profile Banner",
    ],
  },
  {
    title: "Branding Ultimate",
    price: "$1999",
    desc: "",
    features: [
      "Logo Design",
      "Infinite Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Media",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Any Product of your Choice:",
      "Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile)",
      "Website Design",
      "10+ Page Website",
      "Content Management System (WordPress/Joomla)",
      "Responsive Design (Mobile Compatible)",
      "Complete Deployment",
      "Social Media Design",
      "Facebook Fanpage Splash Page + Cover Photo",
      "Twitter Background Design",
      "Google+ Profile Banner",
      "Complete Storyboard, VoiceOver & Animation",
    ],
  },
];

const SEO_PACKAGES =  [
  {
    title: "SEO Basic",
    price: "$199/mo",
    desc: "Foundation SEO for visibility and indexing.",
    features: [
      "Technical Audit",
      "Keyword Research (Basic)",
      "On-page Optimization",
      "Google Search Console Setup",
      "Monthly Reporting",
      "MORE FEATURES",
      "100% Satisfaction",
    ],
  },
  {
    title: "SEO Growth",
    price: "$499/mo",
    desc: "Ongoing SEO to improve rankings and traffic.",
    features: [
      "Technical + On-page SEO",
      "Keyword Research (Advanced)",
      "Content Optimization",
      "Link Building (Starter)",
      "Monthly Reporting",
      "MORE FEATURES",
      "100% Satisfaction",
    ],
  },
  {
    title: "SEO Pro",
    price: "$999/mo",
    desc: "Aggressive SEO campaign for competitive niches.",
    features: [
      "Full SEO Strategy",
      "Content Plan",
      "Link Building",
      "Conversion Tracking",
      "Weekly Updates",
      "MORE FEATURES",
      "100% Satisfaction",
    ],
  },
];

const SMM_PACKAGES = [
  {
    title: "Bronze - Monthly",
    price: "$397",
    features: [
      "Optimize FB Page",
      "1 Social Cover",
      "Engagement",
      "Reviews",
      "Check-ins",
      "Posts",
      "3 Posts per Week",
      "1 Facebook Event",
      "Monthly Reporting",
      "Ad spend - Up to $50",
    ],
  },
  {
    title: "Silver- Monthly",
    price: "$597",
    features: [
      "Optimize FB Page",
      "1 Social Cover",
      "Engagement",
      "Reviews",
      "Check-ins",
      "Posts",
      "Shares",
      "Mentions",
      "Invite to Like",
      "Inbox Responses",
      "4 Posts per Week",
      "2 Facebook Event",
      "Monthly Reporting",
      "Ad spend - Up to $65",
    ],
  },
  {
    title: "Gold- Monthly",
    price: "$997",
    features: [
      "Optimize FB Page",
      "1 Social Cover",
      "Engagement",
      "Reviews",
      "Check-ins",
      "Posts",
      "Shares",
      "Mentions",
      "Invite to Like",
      "Inbox Responses",
      "5 Posts per Week",
      "2 Facebook Event",
      "1 Lead Generation Campaign",
      "Monthly Reporting",
      "Ad spend - Up to $120",
    ],
  },
  {
    title: "Platinum- Monthly",
    price: "$1497",
    features: [
      "Optimize FB Page",
      "1 Social Cover + Holiday Covers",
      "Engagement",
      "Reviews",
      "Check-ins",
      "Posts",
      "Shares",
      "Mentions",
      "Invite to Like",
      "Inbox Responses",
      "6 Posts per Week",
      "2 Facebook Event",
      "1 Lead Generation Campaign",
      "Monthly Reporting",
      "Ad spend - Up to $170",
    ],
  },
];

const LABEL_PACKAGES = [
  {
    title: "Label Starter",
    price: "$99",
    desc: "Clean label design for one product.",
    features: [
      "1 Label Concept",
      "2 Revisions",
      "Print-ready File",
      "MORE FEATURES",
      "100% Satisfaction",
      "Money Back Guarantee",
    ],
  },
  {
    title: "Label Pro",
    price: "$249",
    desc: "Professional label design with variants.",
    features: [
      "2 Concepts",
      "Unlimited Revisions",
      "Die-line Setup",
      "Print-ready Files",
      "MORE FEATURES",
      "100% Satisfaction",
      "Money Back Guarantee",
    ],
  },
  {
    title: "Packaging Suite",
    price: "$499",
    desc: "Full packaging/label suite for your brand.",
    features: [
      "3 Concepts",
      "Unlimited Revisions",
      "Multiple Variants",
      "Print-ready + Source Files",
      "MORE FEATURES",
      "100% Satisfaction",
      "Money Back Guarantee",
    ],
  },
];

// ✅ One source of truth (category => packages)
const PRICING_DATA = {
  Logo: LOGO_PACKAGES,
  Website: WEBSITE_PACKAGES,
  Animation: ANIMATION_PACKAGES,
  Branding: BRANDING_PACKAGES,
  SEO: SEO_PACKAGES,
  SMM: SMM_PACKAGES,
  "Label Design": LABEL_PACKAGES,
};

export default function Pricing({id}) {
  const [activeCategory, setActiveCategory] = useState("Logo");

  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const [headingInView, setHeadingInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHeadingInView(true),
      { threshold: 0.2 }
    );

    const obs2 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setCardsInView(true),
      { threshold: 0.15 }
    );

    if (headingRef.current) obs1.observe(headingRef.current);
    if (cardsRef.current) obs2.observe(cardsRef.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  const packages = useMemo(() => {
    return PRICING_DATA[activeCategory] ?? [];
  }, [activeCategory]);

  return (
    <section id={id} className={styles.pricingBox}>
      {/* Heading */}
      <div
        ref={headingRef}
        className={`${styles.pricingHeading} ${
          headingInView ? styles.pricingAnimate : ""
        }`}
      >
        <h3>Affordable Pricing</h3>
        <p>
          We at Brands Chamber thrive to ensure that our customers are Our
          packages have been meticulously created for all business. Obtain
          appealing design deals at special prices to elevate your brand. We
          guarantee the highest level of client satisfaction while providing our
          great services at the most competitive prices!
        </p>
      </div>

      {/* Category buttons */}
      <div className={styles.pricingButtonRow}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.pricingSingleButton} ${
              activeCategory === cat ? styles.activeCategory : ""
            }`}
            onClick={() => setActiveCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pricing cards */}
      <div
        ref={cardsRef}
        className={`${styles.pricingContainer} ${
          cardsInView ? styles.inView : ""
        }`}
      >
        {packages.map((pkg) => (
          <div key={`${activeCategory}-${pkg.title}`} className={styles.pricingCard}>
            <div className={styles.mainTextDiv}>
              <h2 className={styles.websiteName}>{pkg.title}</h2>
              <p className={styles.mainText}>{pkg.desc}</p>
            </div>

            <h3 className={styles.websitePrice}>{pkg.price}</h3>

            <div className={styles.servicesList}>
              <ul>
                {pkg.features.map((f, idx) => (
                  <li key={`${pkg.title}-${idx}`}>{f}</li>
                ))}
              </ul>
            </div>

            <button className={styles.orderButton} type="button">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}