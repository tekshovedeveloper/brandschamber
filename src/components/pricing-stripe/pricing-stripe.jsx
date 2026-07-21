// "use client";

// import { useState } from "react";
// import styles from "./pricing-stripe.module.css";
// import MeetingModal from "@/components/MeetingModal/MeetingModal";

// const PRICING_CARDS = [
//   {
//     title: "LOGO DESIGN",
//     desc: "100% custom — designed from scratch for your brand",
//     price: "$49",
//     amount: 4900,
//     features: [
//       "Primary logo + variations",
//       "2 initial concepts",
//       "Unlimited revisions",
//       "All file formats",
//     ],
//   },
//   {
//     title: "BRANDING",
//     desc: "Complete brand identity system — strategy to assets.",
//     price: "$249",
//     amount: 24900,
//     features: [
//       "Brand strategy",
//       "Full visual identity",
//       "Brand style guide",
//       "Stationery & social",
//     ],
//   },
//   {
//     title: "WEB DEVELOPMENT",
//     desc: "Custom, CMS, e-commerce, and Shopify builds.",
//     price: "$199",
//     amount: 19900,
//     features: [
//       "Mobile-responsive design",
//       "SEO-ready structure",
//       "CMS or custom build",
//       "Post-launch support",
//     ],
//   },
//   {
//     title: "MOBILE APPS",
//     desc: "iOS, Android, and cross-platform — end-to-end.",
//     price: "$599",
//     amount: 59900,
//     features: [
//       "UI/UX design included",
//       "iOS & Android options",
//       "App Store submission",
//       "Post-launch support",
//     ],
//   },
//   {
//     title: "SEO & MARKETING",
//     desc: "100% custom — designed from scratch for your brand",
//     price: "$299",
//     amount: 29900,
//     features: [
//       "Full channel strategy",
//       "Campaign management",
//       "Monthly reporting",
//       "Ongoing optimisation",
//     ],
//   },
//   {
//     title: "UI/UX DESIGN",
//     desc: "Research-first design — wireframes to final UI",
//     price: "$199",
//     amount: 19900,
//     features: [
//       "User research & personas",
//       "Wireframing & prototyping",
//       "High-fidelity UI design",
//       "Figma handoff files",
//     ],
//   },
//   {
//     title: "GRAPHIC DESIGN",
//     desc: "On-brand design for every marketing need.",
//     price: "$49",
//     amount: 4900,
//     features: [
//       "Marketing materials",
//       "Digital ad creatives",
//       "Social media graphics",
//       "Monthly retainer available",
//     ],
//   },
//   {
//     title: "VIDEO PRODUCTION",
//     desc: "Brand films, explainers, reels & motion graphics.",
//     price: "$99",
//     amount: 9900,
//     features: [
//       "Script & concept",
//       "Professional production",
//       "Editing & motion graphics",
//       "All platform formats",
//     ],
//   },
// ];

// export default function PricingStripe({ id }) {
//   const [showMeetingModal, setShowMeetingModal] = useState(false);
//   const [selectedService, setSelectedService] = useState("");
//   const [selectedPackage, setSelectedPackage] = useState("");
//   const [loadingTitle, setLoadingTitle] = useState("");

//   const handleInquiry = (card) => {
//     setSelectedService(card.title);
//     setSelectedPackage(card.title);
//     setShowMeetingModal(true);
//   };

//   const handleOrderNow = async (card) => {
//     try {
//       setLoadingTitle(card.title);

//       const response = await fetch("/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: card.title,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         alert(data?.error || "Failed to start checkout.");
//         return;
//       }

//       if (data?.url) {
//         window.location.href = data.url;
//       } else {
//         alert("Checkout URL not received.");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong while starting payment.");
//     } finally {
//       setLoadingTitle("");
//     }
//   };

//   return (
//     <section id={id} className={styles.pricingBox}>
//       <div className={styles.pricingHeading}>
//         <h3>NO SURPRISES. NO HIDDEN FEES.</h3>
//         <p>
//           A guide to our starting prices across every service. Every project is
//           scoped individually — final pricing after your free consultation.
//         </p>
//       </div>

//       <div className={styles.pricingContainer}>
//         {PRICING_CARDS.map((card) => (
//           <div key={card.title} className={styles.pricingCard}>
//             <div className={styles.cardInner}>
//               <div className={styles.mainTextDiv}>
//                 <h2 className={styles.websiteName}>{card.title}</h2>
//                 <p className={styles.mainText}>{card.desc}</p>
//               </div>

//               <h3 className={styles.websitePrice}>{card.price}</h3>

//               <div className={styles.servicesList}>
//                 <ul>
//                   {card.features.map((feature, index) => (
//                     <li key={`${card.title}-${index}`}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className={styles.buttonGroup}>
//                 <button
//                   className={styles.inquireButton}
//                   type="button"
//                   onClick={() => handleInquiry(card)}
//                 >
//                   Inquire Now
//                 </button>

//                 <button
//                   className={styles.orderNowButton}
//                   type="button"
//                   onClick={() => handleOrderNow(card)}
//                   disabled={loadingTitle === card.title}
//                 >
//                   {loadingTitle === card.title ? "Processing..." : "Order Now"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <MeetingModal
//         isOpen={showMeetingModal}
//         onClose={() => setShowMeetingModal(false)}
//         defaultService={selectedService}
//         defaultMessage={
//           selectedPackage
//             ? `Hi, I’m interested in the ${selectedPackage} package. Please share next steps.`
//             : ""
//         }
//       />
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./pricing-stripe.module.css";
import MeetingModal from "@/components/MeetingModal/MeetingModal";

const PRICING_CARDS = [
  {
    title: "LOGO DESIGN",
    desc: "100% custom — designed from scratch for your brand",
    price: "$49",
    amount: 4900,
    features: [
      "Primary logo + variations",
      "2 initial concepts",
      "Unlimited revisions",
      "All file formats",
    ],
  },
  {
    title: "BRANDING",
    desc: "Complete brand identity system — strategy to assets.",
    price: "$249",
    amount: 24900,
    features: [
      "Brand strategy",
      "Full visual identity",
      "Brand style guide",
      "Stationery & social",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    desc: "Custom, CMS, e-commerce, and Shopify builds.",
    price: "$499",
    amount: 49900,
    features: [
      "Mobile-responsive design",
      "SEO-ready structure",
      "CMS or custom build",
      "Post-launch support",
    ],
  },
  {
    title: "MOBILE APPS",
    desc: "iOS, Android, and cross-platform — end-to-end.",
    price: "$999",
    amount: 99900,
    features: [
      "UI/UX design included",
      "iOS & Android options",
      "App Store submission",
      "Post-launch support",
    ],
  },
  {
    title: "SEO & MARKETING",
    desc: "Monthly SEO strategy, optimization, reporting, and growth support.",
    price: "$199/mo",
    amount: 19900,
    features: [
      "Full channel strategy",
      "Campaign management",
      "Monthly reporting",
      "Ongoing optimisation",
    ],
  },
  {
    title: "UI/UX DESIGN",
    desc: "Research-first design — wireframes to final UI",
    price: "$199",
    amount: 19900,
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Figma handoff files",
    ],
  },
  {
    title: "GRAPHIC DESIGN",
    desc: "On-brand design for every marketing need.",
    price: "$49",
    amount: 4900,
    features: [
      "Marketing materials",
      "Digital ad creatives",
      "Social media graphics",
      "Monthly retainer available",
    ],
  },
  {
    title: "VIDEO PRODUCTION",
    desc: "Brand films, explainers, reels & motion graphics.",
    price: "$99",
    amount: 9900,
    features: [
      "Script & concept",
      "Professional production",
      "Editing & motion graphics",
      "All platform formats",
    ],
  },
];

export default function PricingStripe({ id }) {
  const router = useRouter();

  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [loadingTitle, setLoadingTitle] = useState("");

  const handleInquiry = (card) => {
    setSelectedService(card.title);
    setSelectedPackage(card.title);
    setShowMeetingModal(true);
  };

  const handleOrderNow = async (card) => {
    try {
      setLoadingTitle(card.title);
      router.push(`/checkout?service=${encodeURIComponent(card.title)}`);
    } finally {
      setLoadingTitle("");
    }
  };

  return (
    <section id={id} className={styles.pricingBox}>
      <div className={styles.pricingHeading}>
        <h2>NO SURPRISES. NO HIDDEN FEES.</h2>
        <p>
          A guide to our starting prices across every service. Every project is
          scoped individually — final pricing after your free consultation.
        </p>
      </div>

      <div className={styles.pricingContainer}>
        {PRICING_CARDS.map((card) => (
          <div key={card.title} className={styles.pricingCard}>
            <div className={styles.cardInner}>
              <div className={styles.mainTextDiv}>
                <h3 className={styles.websiteName}>{card.title}</h3>
                <p className={styles.mainText}>{card.desc}</p>
              </div>

              <p className={styles.websitePrice}>{card.price}</p>

              <div className={styles.servicesList}>
                <ul>
                  {card.features.map((feature, index) => (
                    <li key={`${card.title}-${index}`}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.buttonGroup}>
                <button
                  className={styles.inquireButton}
                  type="button"
                  onClick={() => handleInquiry(card)}
                >
                  Inquire Now
                </button>

                <button
                  className={styles.orderNowButton}
                  type="button"
                  onClick={() => handleOrderNow(card)}
                  disabled={loadingTitle === card.title}
                >
                  {loadingTitle === card.title ? "Processing..." : "Order Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MeetingModal
        isOpen={showMeetingModal}
        onClose={() => setShowMeetingModal(false)}
        defaultService={selectedService}
        defaultMessage={
          selectedPackage
            ? `Hi, I’m interested in the ${selectedPackage} package. Please share next steps.`
            : ""
        }
      />
    </section>
  );
}
