// "use client";

// import styles from "./footer.module.css";

// export default function Footer() {
//   return (
//     <>
//       <footer className={styles.footer}>
//         <div className={styles.footerMainBox}>
//           <div className={styles.footerBox}>
//             <img
//               className={styles.footerLogo}
//               src="/assets/home/logo.svg"
//               alt="Brands Chamber Logo"
//             />

//             <p className={styles.footerText}>
//               Award Winning Creative Design Agency We’re a dedicated team of
//               designers, writers, strategists, developers and account
//               specialists who share a common passion for great design.
//             </p>

//             <div className={styles.footerIconDiv}>
//               <a
//                 href="https://www.facebook.com/tekshove/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.iconLink}
//               >
//                 <img
//                   src="/assets/home/facebook.svg"
//                   className={styles.icon}
//                   alt="facebook"
//                 />
//                 <img
//                   src="/assets/home/facebook2.svg"
//                   className={styles.onHoverIcon}
//                   alt="facebook"
//                 />
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/tekshove/posts/?feedView=all"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.iconLink}
//               >
//                 <img
//                   src="/assets/home/indeed.svg"
//                   className={styles.icon}
//                   alt="linkedin"
//                 />
//                 <img
//                   src="/assets/home/indeed2.svg"
//                   className={styles.onHoverIcon}
//                   alt="linkedin"
//                 />
//               </a>

//               <a href="#" className={styles.iconLink}>
//                 <img
//                   src="/assets/home/instagram.svg"
//                   className={styles.icon}
//                   alt="instagram"
//                 />
//                 <img
//                   src="/assets/home/instagram2.svg"
//                   className={styles.onHoverIcon}
//                   alt="instagram"
//                 />
//               </a>

//               <a href="#" className={styles.iconLink}>
//                 <img
//                   src="/assets/home/twitter.svg"
//                   className={styles.icon}
//                   alt="twitter"
//                 />
//                 <img
//                   src="/assets/home/twitter2.svg"
//                   className={styles.onHoverIcon}
//                   alt="twitter"
//                 />
//               </a>
//             </div>
//           </div>

//           <div className={styles.footerBox}>
//             <span className={styles.footerTitle}>QUICK LINKS</span>
//             <div className={styles.footerBoxOptions}>
//               <a href="https://brandschamber.com/">Home</a>
//               <a href="#about">About Us</a>
//               <a href="#services">Services</a>
//               <a href="#pricing">Pricing</a>
//               <a href="#contact">Contact Us</a>
//             </div>
//           </div>

//           <div className={styles.footerBox}>
//             <span className={styles.footerTitle}>USEFUL LINKS</span>
//             <div className={styles.footerBoxOptions}>
//               <a href="#">Terms &amp; Condition</a>
//               <a href="#">Privacy Policy</a>
//             </div>
//           </div>

//           <div className={styles.footerBox}>
//             <span className={styles.footerTitle}>CONTACT US</span>
//             <div className={styles.footerBoxOptions}>
//               <div className={styles.contactsShowDiv}>
//                 <img src="/assets/home/phone.svg" alt="phone" />
//                 <a href="tel:8555359320">+1 (385) 391-1875</a>
//               </div>

//               <div className={styles.contactsShowDiv}>
//                 <img src="/assets/home/mail.svg" alt="email" />
//                 <a href="mailto:contact@brandschamber.com">
//                   contact@brandschamber.com
//                 </a>
//               </div>

//               <div className={styles.contactsShowDiv}>
//                 <img
//                   src="/assets/home/location.svg"
//                   alt="location"
//                 />
//                 <a href="#">
//                   220 S Almaden Ave, San Jose, CA 95113, USA
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <section className={styles.footerRightsBar}>
//         © 2025 Brands Chamber. All rights reserved.
//       </section>
//     </>
//   );
// }


"use client";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ===== TOP ROW ===== */}
        <div className={styles.topRow}>
          {/* Column 1 – Brand + description + badges */}
          <div className={styles.brandColumn}>
            <Link href="/">
            <img
              className={styles.footerLogo}
              src="/assets/home/logo.svg"
              alt="Brands Chamber Logo"
            />
            </Link>

            <p className={styles.footerText}>
              We blend creativity with technology to deliver exceptional
              results. Since our inception, we’ve been dedicated to pushing
              boundaries and setting new standards in digital design. Our
              passion drives us to turn your ideas into impactful, engaging
              experiences.
            </p>

            <div className={styles.badgesTopRow}>
              {/* <img
                src="/assets/home/platform1.svg"
                alt="DMCA Protected"
              /> */}


              <a href="//www.dmca.com/Protection/Status.aspx?ID=a8ea8bb6-f660-4766-8487-6f83b1ace9cf" title="DMCA.com Protection Status" class="dmca-badge"> <img  src ="https://images.dmca.com/Badges/DMCA_badge_grn_60w.png?ID=a8ea8bb6-f660-4766-8487-6f83b1ace9cf"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            </div>

            <div className={styles.badgesBottomRow}>
              <img
                src="/assets/home/platform2.svg"
                alt="Award 1"
              />
              <img
                src="/assets/home/platform3.svg"
                alt="Award 2"
              />
              <img
                src="/assets/home/platform4.svg"
                alt="Award 3"
              />
              <img
                src="/assets/home/platform5.svg"
                alt="Award 4"
              />
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>QUICK LINKS</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About Us</a>
              </li>
              <li>
                <a href="/#portfolio">Our Work</a>
              </li>
              <li>
                <a href="/#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="/contact/contact">Contact Us</a>
              </li>
              {/* <li>
                <a href="#blogs">Blogs</a>
              </li> */}
            </ul>
          </div>

          {/* Column 3 – Useful Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>USEFUL LINKS</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#">Terms &amp; Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQ&apos;s</a>
              </li>
            </ul>
          </div>

          {/* Column 4 – Contact Info + Social Icons */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>CONTACT INFO</h4>

            <ul className={styles.contactList}>
              <li className={styles.contactRow}>
                <img src="/assets/home/mail.svg" alt="email" />
                <a href="mailto:support@brandschamber.com">
                  support@brandschamber.com
                </a>
              </li>
              <li className={styles.contactRow}>
                <img src="/assets/home/phone.svg" alt="phone" />
                <a href="tel:+16282882456">(628) 288-2456</a>
              </li>

              <li className={styles.contactRow}>
                <img src="/assets/home/location.svg" alt="location" />
                <div>
                  <p>245 Riverside Avenue Suite 100</p>
                  <p>Jacksonville,</p>
                  <p>FL 32202 United States</p>
                </div>
              </li>

              <li className={styles.contactRow}>
                <img src="/assets/home/location.svg" alt="location" />
                <div>
                  <p>329 Howe St</p>
                  <p>Vancouver‑Ca, Canada V6C 3N2</p>
                </div>
              </li>
            </ul>

            <div className={styles.socialRow}>
              <a href="https://www.facebook.com/brandschamberofficial/" aria-label="Facebook">
                <img
                  src="/assets/home/footer_facebook.svg"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/brandschamberofficial/" aria-label="Instagram">
                <img
                  src="/assets/home/footer_instagram.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ===== PAYMENT LOGOS ROW ===== */}
        {/* <div className={styles.paymentRow}>
          <img src="/assets/footer/stripe.svg" alt="Stripe" />
          <img src="/assets/footer/visa.svg" alt="Visa" />
          <img src="/assets/footer/mastercard.svg" alt="Mastercard" />
          <img
            src="/assets/footer/american-express.svg"
            alt="American Express"
          />
          <img src="/assets/footer/discover.svg" alt="Discover" />
        </div> */}

        {/* ===== BOTTOM RIGHTS BAR ===== */}
        <div className={styles.bottomRow}>
          <span>© 2026 Brands Chamber. All rights reserved.</span>
          {/* <span>Designed and developed by .</span> */}
        </div>
      </div>
    </footer>
  );
}