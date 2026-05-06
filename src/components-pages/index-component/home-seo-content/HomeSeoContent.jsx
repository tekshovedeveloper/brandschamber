import styles from "./HomeSeoContent.module.css";

export default function HomeSeoContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Digital Growth Partner</span>

        <h2>Web Development, Branding, SEO, and Creative Services Under One Roof</h2>

        <p>
          Brands Chamber helps startups, small businesses, and growing companies
          build a stronger digital presence through strategy, design, development,
          and marketing. Our team creates custom websites, brand identities,
          mobile apps, UI/UX designs, SEO campaigns, graphics, videos, and digital
          experiences that support real business growth.
        </p>

        <p>
          Instead of working with separate freelancers or multiple agencies, our
          clients get a complete creative and technical team in one place. From
          your first logo to your full website, marketing strategy, and content
          production, every service is planned to make your brand look consistent,
          trustworthy, and ready to compete online.
        </p>

        <div className={styles.grid}>
          <article>
            <h3>Website Development Services</h3>
            <p>
              We build responsive business websites, CMS websites, Shopify stores,
              e-commerce websites, and custom web applications designed for speed,
              usability, and search visibility.
            </p>
            <a href="/services/website-service">Explore website development</a>
          </article>

          <article>
            <h3>SEO and Digital Marketing</h3>
            <p>
              Our SEO and marketing services help businesses improve search
              visibility, reach better customers, generate leads, and grow through
              content, technical SEO, local SEO, PPC, and campaign strategy.
            </p>
            <a href="/services/seo-and-marketing">Explore SEO services</a>
          </article>

          <article>
            <h3>Branding and Logo Design</h3>
            <p>
              We create logos, visual identities, brand guidelines, and creative
              systems that help businesses look professional, memorable, and
              consistent across every customer touchpoint.
            </p>
            <a href="/services/branding-service">Explore branding services</a>
          </article>

          <article>
            <h3>Mobile App and UI/UX Design</h3>
            <p>
              Our app development and UI/UX design services focus on clean user
              journeys, modern interfaces, mobile-friendly layouts, and digital
              products that are simple to use.
            </p>
            <a href="/services/app-service">Explore app development</a>
          </article>
        </div>

        <div className={styles.bottomText}>
          <h3>Why businesses choose Brands Chamber</h3>
          <p>
            Businesses choose Brands Chamber because we combine creative design,
            technical development, and marketing strategy in one process. Every
            project is built around your goals, your audience, and your brand
            message, so your website and digital presence can support long-term
            growth instead of just looking good.
          </p>
        </div>
      </div>
    </section>
  );
}