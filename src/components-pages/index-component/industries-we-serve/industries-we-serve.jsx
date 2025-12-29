// import React, { useState, useRef, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import styles from "./industries-we-serve.module.css"; // Ensure this path is correct
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const IndustriesWeServe = () => {
//     const headingRef = useRef(null);
//     const [industriesWeServeHeadingInView, setIndustriesWeServeHeadingInView] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//           if (headingRef.current) {
//             const { top } = headingRef.current.getBoundingClientRect();
//             if (top < window.innerHeight && window.scrollY > 0) {
//               setIndustriesWeServeHeadingInView(true);
//             } else {
//               setIndustriesWeServeHeadingInView(false);
//             }
//           }
//         };
    
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//           window.removeEventListener("scroll", handleScroll);
//         };
//       }, []);

//       const responsive = {
//         tablet: {
//           breakpoint: { max: 1000, min: 0 },
//           items: 1,
//         },
//       };
    

//       const productData = [
//         {
//           src: 'https://www.alphadesigncrew.com/assets/images/industries-icon1.png',
//           alt: 'Education',
//           name: 'Education',
      
//         },
//         {
//           src: 'https://www.alphadesigncrew.com/assets/images/industries-icon2.png',
//           alt: 'Business',
//           name: 'Business',
        
//         },
//         {
//           src: 'https://www.alphadesigncrew.com/assets/images/industries-icon3.png',
//           alt: 'Technology',
//           name: 'Technology',
          
//         },
//         {
//           src: 'https://www.alphadesigncrew.com/assets/images/industries-icon4.png',
//           alt: 'Real State',
//           name: 'Real State',
//         },
//         {
//           src: 'https://www.alphadesigncrew.com/assets/images/industries-icon5.png',
//           alt: 'Travel',
//           name: 'Travel',
//         },
//         {
//             src: 'https://www.alphadesigncrew.com/assets/images/industries-icon6.png',
//             alt: 'Automotive',
//             name: 'Automotive',
//           },
//           {
//             src: 'https://www.alphadesigncrew.com/assets/images/industries-icon7.png',
//             alt: 'Construction',
//             name: 'Construction',
//           },
       
//       ];
    
    

//     return(
//     <Box className={styles.industriesWeServeBox}>
//     <Typography variant="h5" className={styles.industriesWeServeBackHeading}>
//     Industries We Serve
//     </Typography>

//     <Box
//       ref={headingRef}
//       className={`${styles.industriesWeServeHeading} ${
//         industriesWeServeHeadingInView ? styles.industriesWeServeAnimate : ""
//       }`}
//     >
//       <h3>
       
//         <span>
//          Industries
//           <img
//             className={styles.industriesWeServeUnderline}
//             src="https://www.alphadesigncrew.com/assets/images/wait-under-line.png"
//             alt="wait-under-line"
//           />
//         </span>
//        We Serve
//       </h3>
//       </Box>


// <Box className={styles.industriesWeServeCarousel}>
//       <Carousel
//         responsive={responsive}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         ssr={true}
//         keyBoardControl={true}
//         transitionDuration={500}
//         partialVisible={false}
//         itemClass="carousel-item-padding-40-px"
//         containerClass="carousel-container"
//         // focusOnSelect={true}
//       >
//         {productData.map((item) => (
//           <div className="card" key={item.src}>
//             <a href="#">
//               <img src={item.src} alt={item.alt} />
//             </a>
//           </div>
//         ))}
//       </Carousel>
//       </Box>
//       </Box>
//     )

// }

// export default IndustriesWeServe






import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from 'react-multi-carousel'; // Import Carousel
import 'react-multi-carousel/lib/styles.css'; // Ensure this path is correct
import styles from "./industries-we-serve.module.css";

const productData = [
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon1.png', alt: 'Education', name: 'Education' },
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon2.png', alt: 'Business', name: 'Business' },
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon3.png', alt: 'Technology', name: 'Technology' },
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon4.png', alt: 'Real Estate', name: 'Real Estate' },
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon5.png', alt: 'Travel', name: 'Travel' },
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon6.png', alt: 'Automotive', name: 'Automotive' },
    { src: 'https://www.alphadesigncrew.com/assets/images/industries-icon7.png', alt: 'Construction', name: 'Construction' },
    
   
];

const IndustriesWeServe = () => {
    const headingRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headingRef.current) {
                const { top } = headingRef.current.getBoundingClientRect();
                setIsInView(top < window.innerHeight && window.scrollY > 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5, // Adjust number of items for desktop
        slidesToSlide: 1, 
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4, // Adjust number of items for tablet
        slidesToSlide: 1, 
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2, // Adjust number of items for mobile
        slidesToSlide: 1, 
      },
    };

    return (
        <Box className={styles.industriesWeServeBox}>
            <Typography variant="h5" className={styles.industriesWeServeBackHeading}>
                Industries We Serve
            </Typography>

            <Box
                ref={headingRef}
                className={`${styles.industriesWeServeHeading} ${isInView ? styles.industriesWeServeAnimate : ""}`}
            >
                <h3>
                    <span>
                        Industries
                        <img
                            className={styles.industriesWeServeUnderline}
                            src="https://www.alphadesigncrew.com/assets/images/wait-under-line.png"
                            alt="wait-under-line"
                        />
                    </span>
                    We Serve
                </h3>
            </Box>

            <Carousel
    responsive={responsive}
   
    keyBoardControl
    transitionDuration={500}
    partialVisible={false}
    itemClass={styles.carouselItem}
    containerClass={styles.carouselContainer}
    
    leftArrowClass={styles.reactMultiCarouselArrowLeft}
    rightArrowClass={styles.reactMultiCarouselArrowRight}
>
    {productData.map((item) => (
        <div className={styles.card} key={item.src}>
            <a href="#">
                <img src={item.src} alt={item.alt} />
                <h3>{item.name}</h3>
            </a>
        </div>
    ))}
</Carousel>


        </Box>
    );
};

export default IndustriesWeServe;
