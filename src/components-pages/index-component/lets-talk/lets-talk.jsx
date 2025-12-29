import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import styles from "./lets-talk.module.css"; // Ensure this path is correct
import { Label } from "@mui/icons-material";

const LetsTalk = () => {
    const contentRef = useRef(null);
    const [contentInView, setContentInView] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setContentInView(true);
                } else {
                    setContentInView(false);
                }
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );
    
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
    
        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };
    return (
        <Box className={styles.letsTalkBox}>
            <Box className={`${styles.bodyContainer} ${contentInView ? styles.contentLetsTalkAnimate : ""}`} ref={contentRef} >
           <Box className={`${styles.contentContainer} ${contentInView ? styles.leftLetsTalkAnimate : ""}`}>
           <Box
       
        className={styles.letsTalkHeading} >
        <h3>
       Let's
          <span>
            Talk
            <img
              className={styles.letsTalkHeadingUnderline}
              src="https://www.alphadesigncrew.com/assets/images/wait-under-line.png"
              alt="wait-under-line"
            />
          </span>
         
        </h3>
      </Box>


                <Typography variant="body1" gutterBottom className={styles.letsTalkText}>
                Have an idea? Fill in the form to get in touch with us.
                </Typography>
                <Button className={styles.letsTalkButton} variant="contained" color="primary" onClick={() => alert('Button Clicked!')}>
                    Lets Started
                </Button>
            </Box>
            <Box component="form" className={`${styles.formContainer} ${contentInView ? styles.rightLetsTalkAnimate : ""}`} onSubmit={handleSubmit}>
            <h2 className={styles.letsTalkFormHeading}>Don't be shy, say hi!</h2>
              <label>Full Name *</label>
                <TextField
                    name="name"
                    // label="Text Field Label"
                    placeholder="Name"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.textField}
                    InputProps={{
                        classes: {
                            input: styles.placeholder
                        },
                       
                    }}
                />
                  <label>Email Address *</label>
                <TextField
                    name="email"
                    // label="Email Address"
                    placeholder="Email Address"
                   variant="standard"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.textField}
                    InputProps={{
                        classes: {
                            input: styles.placeholder
                        }
                    }}
                />
                  <label>Phone *</label>
                <TextField
                    name="phone"
                    // label="Phone Number"
                    placeholder="Phone Number"
                     variant="standard"
                    fullWidth
                    margin="normal"
                    value={formData.phone}
                    className={styles.textField}
                    onChange={handleChange}
                    InputProps={{
                        classes: {
                            input: styles.placeholder
                        }
                    }}
                />
                  <label>Message *</label>
                <TextField
                    name="message"
                    // label="Message"
                    placeholder="Message"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    // multiline
                    // rows={4}
                    value={formData.message}
                    className={styles.textField}
                    onChange={handleChange}
                    InputProps={{
                        classes: {
                            input: styles.placeholder
                        }
                    }}
                />
                <Button variant="contained" color="primary" type="submit" className={styles.submitLetsTalkButton}>
                    Submit Now
                </Button>
            </Box>
            </Box>
        </Box>
    );
}

export default LetsTalk;