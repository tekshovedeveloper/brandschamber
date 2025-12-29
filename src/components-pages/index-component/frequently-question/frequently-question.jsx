"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./frequently-question.module.css";

const FAQS = [
  {
    id: 1,
    q: "What services do you provide?",
    a: "We provide a variety of services including web design, logo design, video animation, NFT Designs, Mobile App development, SEO, and SMM (Social Media Marketing) services.",
  },
  {
    id: 2,
    q: "What makes Brands Chamber different from other web design companies?",
    a: "We provide a variety of services including web design, logo design, video animation, NFT Designs, Mobile App development, SEO, and SMM (Social Media Marketing) services.",
  },
  {
    id: 3,
    q: "How much does it cost to hire Brands Chamber for a project?",
    a: "The cost of our services varies depending on the complexity and scope of the project. We offer competitive pricing and will provide a detailed quote after discussing your specific needs and requirements.",
  },
  {
    id: 4,
    q: "Can you help me improve my website's search engine ranking?",
    a: "Yes, we offer SEO (Search Engine Optimization) services to help improve your website's visibility and ranking on search engines such as Google.",
  },
  {
    id: 5,
    q: "What is SMM and how can it help my business?",
    a: "SMM (Social Media Marketing) is the use of social media platforms to promote a business or product. Our team can help you develop and execute a comprehensive SMM strategy to increase brand awareness, engagement, and conversions.",
  },
];

export default function FrequentlyQuestion() {
  const headingRef = useRef(null);
  const [headingInView, setHeadingInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeadingInView(true);
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.faqBox} id="pricing">
      {/* Heading */}
      <div
        ref={headingRef}
        className={`${styles.faqHeading} ${
          headingInView ? styles.pricingAnimate : ""
        }`}
      >
        <h3>Frequently Asked Question</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>

      {/* Cards */}
      <div className={styles.faqBody}>
        {FAQS.map((item) => (
          <div key={item.id} className={styles.cardContainer}>
            <div className={styles.questionCard}>
              <h2>{item.id}</h2>
              <p>{item.q}</p>
              <img
                src="/assets/home/faq.svg"
                alt="plus icon"
                className={styles.icon}
              />
            </div>

            <div className={styles.answerCard}>
              <h2>{item.id}</h2>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}