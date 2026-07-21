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
              <a href="//www.dmca.com/Protection/Status.aspx?ID=a8ea8bb6-f660-4766-8487-6f83b1ace9cf" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca-badge-w250-2x1-01.png?ID=a8ea8bb6-f660-4766-8487-6f83b1ace9cf"  alt="DMCA.com Protection Status" style={{height:"65px"}}/></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            </div>

            <div className={styles.badgesBottomRow}>
              <img
                src="/assets/home/platform2.svg"
                alt="Brands Chamber trust badge"
              />
              <img
                src="/assets/home/platform3.svg"
                alt="Brands Chamber platform badge"
              />
              <img
                src="/assets/home/platform4.svg"
                alt="Brands Chamber review badge"
              />
              <img
                src="/assets/home/platform5.svg"
                alt="Brands Chamber rating badge"
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
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
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
                <a href="/terms-and-conditions">Terms &amp; Condition</a>
              </li>
              {/* <li>
                <a href="#">Privacy Policy</a>
              </li> */}
              <li>
                <a href="/faq">FAQ&apos;s</a>
              </li>
            </ul>
          </div>

          {/* Column 4 – Contact Info + Social Icons */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>CONTACT INFO</h4>

            <ul className={styles.contactList}>
              <li className={styles.contactRow}>
                <img src="/assets/home/mail.svg" alt="Brands Chamber email icon" />
                <a href="mailto:contact@brandschamber.com">
                  contact@brandschamber.com
                </a>
              </li>
              <li className={styles.contactRow}>
                <img src="/assets/home/phone.svg" alt="Brands Chamber phone icon" />
                <a href="tel:+13852150936">+1 385-215-0936</a>
              </li>

              <li className={styles.contactRow}>
                <img src="/assets/home/location.svg" alt="Brands Chamber location icon" />
                <div>
                  <p>12510 W. Airport Blvd,</p>
                  <p>UNIT C01-B Sugar Land,</p>
                  <p>TX 77478</p>
                </div>
              </li>

              {/* <li className={styles.contactRow}>
                <img src="/assets/home/location.svg" alt="location" />
                <div>
                  <p>329 Howe St</p>
                  <p>Vancouver‑Ca, Canada V6C 3N2</p>
                </div>
              </li> */}
            </ul>

            <div className={styles.socialRow}>
              <a href="https://www.facebook.com/brandschamberofficial/" aria-label="Facebook">
                <img
                  src="/assets/home/footer_facebook.svg"
                  alt="Brands Chamber Facebook icon"
                />
              </a>
              <a href="https://www.instagram.com/brandschamberofficial/" aria-label="Instagram">
                <img
                  src="/assets/home/footer_instagram.svg"
                  alt="Brands Chamber Instagram icon"
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
