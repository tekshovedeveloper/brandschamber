import React, { useState, useRef, useEffect } from 'react';
import styles from './frequently-question-div.module.css'; // Correct import for CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    { question: " What services do you provide?", answer: "We provide a variety of services including web design, logo design, video animation, NFT Designs, Mobile App development, SEO, and SMM (Social Media Marketing) services." },
    { question: "What makes AlphaDesign Crew different from other web design companies?", answer: "We focus on creating custom designs that reflect the unique style and needs of eachof our clients. Our team of experienced designers and developers work closely withour clients to ensure that every detail is considered and executed with precision." },
    { question: " How much does it cost to hire Alpha Design Crew for a project?", answer: "The cost of our services varies depending on the complexity and scope of the project. We offer competitive pricing and will provide a detailed quote after discussing your specific needs and requirements." },
    { question: " What services do you provide?", answer: "We provide a variety of services including web design, logo design, video animation, NFT Designs, Mobile App development, SEO, and SMM (Social Media Marketing) services." },
    { question: "What makes AlphaDesign Crew different from other web design companies?", answer: "We focus on creating custom designs that reflect the unique style and needs of eachof our clients. Our team of experienced designers and developers work closely withour clients to ensure that every detail is considered and executed with precision." },
    { question: " How much does it cost to hire Alpha Design Crew for a project?", answer: "The cost of our services varies depending on the complexity and scope of the project. We offer competitive pricing and will provide a detailed quote after discussing your specific needs and requirements." },
    { question: " What services do you provide?", answer: "We provide a variety of services including web design, logo design, video animation, NFT Designs, Mobile App development, SEO, and SMM (Social Media Marketing) services." },
    { question: "What makes AlphaDesign Crew different from other web design companies?", answer: "We focus on creating custom designs that reflect the unique style and needs of eachof our clients. Our team of experienced designers and developers work closely withour clients to ensure that every detail is considered and executed with precision." },
    { question: " How much does it cost to hire Alpha Design Crew for a project?", answer: "The cost of our services varies depending on the complexity and scope of the project. We offer competitive pricing and will provide a detailed quote after discussing your specific needs and requirements." },
    
    // Add more FAQs as needed
  ];


  const FrequentlyQuestionDiv = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
    const [inView, setInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const frequentlyQuestionRef = useRef(null);
  

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setInView(true);
                    setHasAnimated(true); // Ensure animation plays only when fully in view the first time
                } else if (!entry.isIntersecting) {
                    setInView(false); // Reset for re-triggering
                    setHasAnimated(false); // Allow reanimation when leaving and re-entering
                }
            },
            { threshold: 0.1 }
        );

        if (frequentlyQuestionRef.current) {
            observer.observe(frequentlyQuestionRef.current);
        }

        return () => {
            if (frequentlyQuestionRef.current) {
                observer.unobserve(frequentlyQuestionRef.current);
            }
        };
    }, [hasAnimated]);
    // const faqs = [
    //   { question: "What is your return policy?", answer: "Our return policy lasts 30 days..." },
    //   { question: "How do I track my order?", answer: "You can track your order using the tracking link..." },
    //   { question: "Can I change my shipping address?", answer: "Yes, you can change your address before shipping..." },
    //   // Add more FAQs as needed
    // ];
  
    const toggleQuestion = (index) => {
      setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div ref={frequentlyQuestionRef} className={`${styles.faqContainer} ${inView ? styles.inView : ""}`}>

        <div>
          {faqs.map((faq, index) => (
            <>
            <div key={index} className={styles.faqItem}>
              <div 
                onClick={() => toggleQuestion(index)} 
                className={styles.faqQuestion}
              >
                <p>{faq.question}</p>
                <button className={styles.arrowButton}>
                  {/* {openQuestionIndex === index ? '▼' : '▲' } */}
                  <FontAwesomeIcon icon={openQuestionIndex === index ? faChevronDown : faChevronUp } />
                </button>
              </div>
            
            </div>
            <p className={`${styles.faqAnswer} ${openQuestionIndex === index ? styles.show : ''}`}>
                {faq.answer}
              </p>
            </>
          ))}
        </div>
      </div>
    );
  };
  
  export default FrequentlyQuestionDiv;
  
