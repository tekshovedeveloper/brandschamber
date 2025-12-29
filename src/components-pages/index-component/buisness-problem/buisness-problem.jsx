// import React,{useState, useRef, useEffect} from 'react';
// import { Box, Typography } from '@mui/material';
// import { useInView } from 'react-intersection-observer';
// import styles from './buisness-problem.module.css';

// const BuisnessProblem = () => {
//     const [selectedPoint, setSelectedPoint] = useState(0); // State for selected point
//     const [selectedImage, setSelectedImage] = useState('https://www.alphadesigncrew.com/assets/images/winning-laptop.png'); // State for selected image
//     const [headingInView, setHeadingInView] = useState(false); // State for heading visibility
//     const headingRef = useRef(null); // Reference for the heading

//     const points = [
//         { img: 'https://www.alphadesigncrew.com/assets/images/winning-laptop.png', text: 'Winning more clients?', imgSrc: 'https://www.alphadesigncrew.com/assets/images/winning-icon.png' },
//         { img: 'https://www.alphadesigncrew.com/assets/images/sustaining-lpatop.png', text: 'Sustaining the existing customer?', imgSrc: 'https://www.alphadesigncrew.com/assets/images/sustaining-icon.png' },
//         { img: 'https://www.alphadesigncrew.com/assets/images/being-laptop.png', text: 'Being visible on the internet?', imgSrc: 'https://www.alphadesigncrew.com/assets/images/being.png' },
//         { img: 'https://www.alphadesigncrew.com/assets/images/getting-laptop.png', text: 'Getting more revenue?', imgSrc: 'https://www.alphadesigncrew.com/assets/images/getting-icon.png' },
//         { img: 'https://www.alphadesigncrew.com/assets/images/surviving-laptop.png', text: 'Surviving the digital Landscape?', imgSrc: 'https://www.alphadesigncrew.com/assets/images/surviving-icon.png' }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (headingRef.current) {
//                 const { top } = headingRef.current.getBoundingClientRect();
//                 // Check if the heading is in the viewport and the user is scrolling down
//                 if (top < window.innerHeight && window.scrollY > 0) {
//                     setHeadingInView(true);
//                 } 
//                 else {
//                     setHeadingInView(false);
//                 }
//             }
//         };

//         // Add event listener for scroll
//         window.addEventListener('scroll', handleScroll);
        
//         // Cleanup on unmount
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
// return (
//     <Box className={styles.facinBox}>
// <Typography variant="h5" className={styles.facinBackHeading}>Buisness Facin</Typography>

// <Box
//             ref={headingRef}
//             className={`${styles.facinHeading} ${headingInView ? styles.animate : ''}`}
//         >
//             <h3>
//                 <span>
//                     Wait!
//                     <img
//                         className={styles.underline}
//                         src="https://www.alphadesigncrew.com/assets/images/wait-under-line.png"
//                         alt="wait-under-line"
//                     />
//                 </span>
//                 Is Your Business Facing Problems in?
//             </h3>
//         </Box>
// <Box className={styles.facinBody}>
// <Box className={styles.facinPoints}>
//                 {points.map((point, index) => {
//                     const { ref, inView } = useInView({
//                         triggerOnce: false,
//                         threshold: 0.1,
//                     });

//                     const isSelected = index === selectedPoint; // Check if the point is selected

//                     return (
//                         <Box
//                             key={index}
//                             ref={ref}
//                             className={`${styles.Point} ${inView ? styles.animateIn : ''} ${isSelected ? styles.selected : ''}`}
//                             onClick={() => {
//                                 setSelectedPoint(index); // Update selected point on click
//                                 setSelectedImage(point.img); // Set selected image source
//                             }}
//                         >
//                             <img 
//                                 src={point.imgSrc} 
//                                 className={`${styles.image} ${isSelected ? styles.selectedImage : ''}`} 
//                                 alt="point-icon" 
//                             />
//                             <Typography variant="body1" className={styles.facinText}>
//                                 {point.text}
//                             </Typography>
//                         </Box>
//                     );
//                 })}
//             </Box>

//             {/* Image Display Section */}
//             <Box className={styles.facinImage}>

//                 {selectedImage && <img src={selectedImage} alt="Selected" className={styles.selectedImageDisplay} />} {/* Render selected image */}
//             <Box className={styles.facinImageBoxCircle}></Box>
//             </Box>
// </Box>
//     </Box>
// )
// }

// export default BuisnessProblem























"use client";

 import styles from './buisness-problem.module.css';

export default function BusinessProblem({id}) {
  return (
    <section id={id} className={styles.facinBody}>
      {/* Left column: title + points */}
      <div className={styles.facinPoints}>
        <h1 className={styles.facinPointHeading}>WE PROVIDE</h1>

        <p className={styles.paragraphFacinPoint}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to
        </p>

        <div className={`${styles.point} ${styles.selected}`}>
          <p className={styles.facinText}>01 Branding and UI design</p>
        </div>

        <div className={styles.point}>
          <p className={styles.facinText}>02 Web and Mobile development</p>
        </div>

        <div className={styles.point}>
          <p className={styles.facinText}>03 Ebook Design</p>
        </div>

        <div className={styles.point}>
          <p className={styles.facinText}>04 2D Animation</p>
        </div>
      </div>

      {/* Middle column: image */}
      <div className={styles.facinImage}>
        <img
          src="/assets/home/branding-and-Ui-design.jpg"
          alt="Selected"
          className={styles.selectedImageDisplay}
        />
      </div>

      {/* Right column: 2 cards */}
      <div className={styles.facinLastContactDiv}>
        <div className={styles.firstContainerFacinLastContactDiv}>
          <p className={styles.facinLastContactDivText}>
            Creating unique and memorable brand identities.
          </p>
          <p className={styles.facinLastContactDivButtonText}>
            SEE HOW WE WORK
          </p>
        </div>

        <div className={styles.secondContainerFacinLastContactDiv}>
          <p className={styles.facinLastContactDivText}>
            Looking for design experts who can bring your vision to life?
          </p>
          <p className={styles.facinLastContactDivButtonText}>
            MEET OUR EXPERT
          </p>
        </div>
      </div>
    </section>
  );
}