import React,{useState, useRef, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import {LocationOn} from '@mui/icons-material';
import styles from './portfolio.module.css';

const Portfolio = ({images}) => {
    
    const portfolioRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // Add the 'animate' class to trigger the animation
              portfolioRef.current.classList.add(styles.animatePortfolio);
            } else {
              // Optionally remove the class if you want to reset the animation
              portfolioRef.current.classList.remove(styles.animatePortfolio);
            }
          },
          { threshold: 0.2 } // Trigger when 20% of the container is visible
        );
    
        if (portfolioRef.current) {
          observer.observe(portfolioRef.current);
        }
    
        return () => {
          if (portfolioRef.current) {
            observer.unobserve(portfolioRef.current);
          }
        };
      }, []);
  
    return (
      <div
      ref={portfolioRef}
      className={`${styles.portfolioGallery}`}
     
      >
        {/* Your portfolio items */}
        {/* <div className={styles.col2}>
          {images.map((image, index) => (
            <a key={index} className={styles.portImg} href={image.url} data-fancybox="allportfolio">
              <img alt={`Portfolio Image ${index + 1}`} src={image.url} />
              <div className={styles.portfolioIcon}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </a>
          ))}
        </div> */}

<div className={styles.col2}>
        <a className={styles.portImg} href={images[0]?.url} data-fancybox="allportfolio">
          <img alt="Portfolio Image 1" src={images[0]?.url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
        <a className={styles.portImg} href={images[1].url} data-fancybox="allportfolio">
          <img alt="Portfolio Image 1" src={images[1].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>

        <a className={styles.portImg} href={images[2].url} data-fancybox="allportfolio">
          <img alt="Portfolio Image 1" src={images[2].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
      </div>
    
      <div className={styles.col2}>
      <a className={styles.portImg} href={images[3].url} data-fancybox="allportfolio">
      <img alt="Portfolio Image 1" src={images[3].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
        <a className={styles.portImg} href={images[4].url} data-fancybox="allportfolio">
          <img alt="Portfolio Image 1" src={images[4].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
      </div>

      <div className={styles.col2}>
      <a className={styles.portImg} href={images[5].url} data-fancybox="allportfolio">
          <img alt="Portfolio Image 1" src={images[5].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
        <a className={styles.portImg} href={images[6].url} data-fancybox="allportfolio">
        <img alt="Portfolio Image 1" src={images[6].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
      </div>


      <div className={styles.col2}>
      <a className={styles.portImg} href={images[7].url} data-fancybox="allportfolio">
      <img alt="Portfolio Image 1" src={images[7].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
        <a className={styles.portImg} href={images[8].url} data-fancybox="allportfolio">
        <img alt="Portfolio Image 1" src={images[8].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
        <a className={styles.portImg} href={images[9].url} data-fancybox="allportfolio">
        <img alt="Portfolio Image 1" src={images[9].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
      </div>


      <div className={styles.col2}>
      <a className={styles.portImg} href={images[10].url} data-fancybox="allportfolio">
      <img alt="Portfolio Image 1" src={images[10].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
        <a className={styles.portImg} href={images[11].url} data-fancybox="allportfolio">
        <img alt="Portfolio Image 1" src={images[11].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>

        <a className={styles.portImg} href={images[12].url} data-fancybox="allportfolio">
        <img alt="Portfolio Image 1" src={images[12].url} />
          <div className={styles.portfolioIcon}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </a>
      </div>
      </div>
    );
  };



export default Portfolio