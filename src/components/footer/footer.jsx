"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerMainBox}>
          {/* Column 1 */}
          <div className={styles.footerBox}>
            <img
              className={styles.footerLogo}
              src="/assets/home/logo.svg"
              alt="Brands Chamber Logo"
            />

            <p className={styles.footerText}>
              Award Winning Creative Design Agency We’re a dedicated team of
              designers, writers, strategists, developers and account
              specialists who share a common passion for great design.
            </p>

            <div className={styles.footerIconDiv}>
              <a
                href="https://www.facebook.com/tekshove/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <img
                  src="/assets/home/facebook.svg"
                  className={styles.icon}
                  alt="facebook"
                />
                <img
                  src="/assets/home/facebook2.svg"
                  className={styles.onHoverIcon}
                  alt="facebook"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/tekshove/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <img
                  src="/assets/home/indeed.svg"
                  className={styles.icon}
                  alt="linkedin"
                />
                <img
                  src="/assets/home/indeed2.svg"
                  className={styles.onHoverIcon}
                  alt="linkedin"
                />
              </a>

              <a href="#" className={styles.iconLink}>
                <img
                  src="/assets/home/Instagram.svg"
                  className={styles.icon}
                  alt="instagram"
                />
                <img
                  src="/assets/home/instagram2.svg"
                  className={styles.onHoverIcon}
                  alt="instagram"
                />
              </a>

              <a href="#" className={styles.iconLink}>
                <img
                  src="/assets/home/Twitter.svg"
                  className={styles.icon}
                  alt="twitter"
                />
                <img
                  src="/assets/home/twitter2.svg"
                  className={styles.onHoverIcon}
                  alt="twitter"
                />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className={styles.footerBox}>
            <span className={styles.footerTitle}>QUICK LINKS</span>
            <div className={styles.footerBoxOptions}>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#contactFormDiv">Contact Us</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className={styles.footerBox}>
            <span className={styles.footerTitle}>USEFUL LINKS</span>
            <div className={styles.footerBoxOptions}>
              <a href="#">Terms &amp; Condition</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          {/* Column 4 */}
          <div className={styles.footerBox}>
            <span className={styles.footerTitle}>CONTACT US</span>
            <div className={styles.footerBoxOptions}>
              <div className={styles.contactsShowDiv}>
                <img src="/assets/home/phone.svg" alt="phone" />
                <a href="tel:8555359320">(855) 535-9320</a>
              </div>

              <div className={styles.contactsShowDiv}>
                <img src="/assets/home/mail.svg" alt="email" />
                <a href="mailto:contact@brandschamber.com">
                  contact@brandschamber.com
                </a>
              </div>

              <div className={styles.contactsShowDiv}>
                <img
                  src="/assets/home/location.svg"
                  alt="location"
                />
                <a href="#">
                  220 S Almaden Ave, San Jose, CA 95113, USA
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom rights bar */}
      <section className={styles.footerRightsBar}>
        © 2025 Brands Chamber. All rights reserved.
      </section>
    </>
  );
}