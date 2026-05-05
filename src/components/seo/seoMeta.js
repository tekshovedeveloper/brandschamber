const SITE_URL = "https://brandschamber.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brands Chamber",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Brands Chamber provides web development, SEO, branding, mobile app development, UI/UX design, and digital marketing services for business growth.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brands Chamber",
  url: SITE_URL,
  telephone: "+1-346-279-0995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12510 W. Airport Blvd, UNIT C01-B",
    addressLocality: "Sugar Land",
    addressRegion: "TX",
    postalCode: "77478",
    addressCountry: "US",
  },
  areaServed: ["Sugar Land", "Houston", "Texas", "United States"],
  serviceType: [
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "Branding",
    "Mobile App Development",
    "UI/UX Design",
    "Graphic Design",
    "Video Creation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Brands Chamber",
  url: SITE_URL,
};

const serviceSchema = (name, description, path) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  description,
  url: `${SITE_URL}${path}`,
  provider: {
    "@type": "Organization",
    name: "Brands Chamber",
    url: SITE_URL,
  },
  areaServed: ["United States", "Worldwide"],
});

export const seoMeta = {
  "/": {
    path: "/",
    title: "Web Development, SEO & Digital Marketing Services | Brands Chamber",
    description:
      "Grow your business with Brands Chamber’s web development, SEO, branding, mobile app development, UI/UX design, and digital marketing services.",
    schema: [organizationSchema, localBusinessSchema, websiteSchema],
  },

  "/contact": {
    path: "/contact",
    title: "Contact Brands Chamber | Web Design & SEO Agency in Sugar Land, TX",
    description:
      "Contact Brands Chamber for web development, SEO, branding, app development, UI/UX design, and digital marketing services.",
    schema: [organizationSchema, localBusinessSchema],
  },

  "/faq": {
    path: "/faq",
    title: "Frequently Asked Questions | Brands Chamber",
    description:
      "Find answers to common questions about Brands Chamber’s web development, SEO, branding, app development, and digital marketing services.",
    schema: [organizationSchema],
  },

  "/terms-and-conditions": {
    path: "/terms-and-conditions",
    title: "Terms and Conditions | Brands Chamber",
    description:
      "Read the terms and conditions for using Brands Chamber’s website, services, packages, and digital solutions.",
    schema: [organizationSchema],
  },

  "/services/website-service": {
    path: "/services/website-service",
    title: "Website Development Services for Small Businesses | Brands Chamber",
    description:
      "Custom websites, CMS websites, e-commerce stores, Shopify websites, and progressive web apps built for speed, SEO, and business growth.",
    schema: serviceSchema(
      "Website Development Services",
      "Custom websites, CMS websites, e-commerce stores, Shopify websites, and progressive web apps built for speed, SEO, and business growth.",
      "/services/website-service"
    ),
  },

  "/services/seo-and-marketing": {
    path: "/services/seo-and-marketing",
    title: "SEO & Digital Marketing Services | Brands Chamber",
    description:
      "SEO, PPC, content marketing, email marketing, social media marketing, and local SEO services to increase traffic, leads, and sales.",
    schema: serviceSchema(
      "SEO and Digital Marketing Services",
      "SEO, PPC, content marketing, email marketing, social media marketing, and local SEO services to increase traffic, leads, and sales.",
      "/services/seo-and-marketing"
    ),
  },

  "/services/search-engine-optimization": {
    path: "/services/search-engine-optimization",
    title: "Search Engine Optimization Services | Brands Chamber",
    description:
      "Technical SEO, keyword research, on-page SEO, local SEO, content strategy, and link-building services for long-term organic growth.",
    schema: serviceSchema(
      "Search Engine Optimization Services",
      "Technical SEO, keyword research, on-page SEO, local SEO, content strategy, and link-building services for long-term organic growth.",
      "/services/search-engine-optimization"
    ),
  },

  "/services/branding-service": {
    path: "/services/branding-service",
    title: "Branding Services for Startups & Businesses | Brands Chamber",
    description:
      "Build a strong brand identity with logo design, brand guidelines, visual identity, messaging, and complete branding services.",
    schema: serviceSchema(
      "Branding Services",
      "Logo design, brand guidelines, visual identity, messaging, and complete branding services for startups and growing businesses.",
      "/services/branding-service"
    ),
  },

  "/services/logo-service": {
    path: "/services/logo-service",
    title: "Logo Design Services | Custom Business Logos | Brands Chamber",
    description:
      "Professional logo design services for startups, small businesses, and growing brands that need a memorable visual identity.",
    schema: serviceSchema(
      "Logo Design Services",
      "Professional logo design services for startups, small businesses, and growing brands that need a memorable visual identity.",
      "/services/logo-service"
    ),
  },

  "/services/app-service": {
    path: "/services/app-service",
    title: "Mobile App Development Services | Brands Chamber",
    description:
      "Custom iOS, Android, and cross-platform mobile app development services for startups, businesses, and digital products.",
    schema: serviceSchema(
      "Mobile App Development Services",
      "Custom iOS, Android, and cross-platform mobile app development services for startups, businesses, and digital products.",
      "/services/app-service"
    ),
  },

  "/services/ui-ux-service": {
    path: "/services/ui-ux-service",
    title: "UI/UX Design Services for Websites & Apps | Brands Chamber",
    description:
      "User-focused UI/UX design services for websites, mobile apps, dashboards, SaaS products, and digital platforms.",
    schema: serviceSchema(
      "UI/UX Design Services",
      "User-focused UI/UX design services for websites, mobile apps, dashboards, SaaS products, and digital platforms.",
      "/services/ui-ux-service"
    ),
  },

  "/services/graphics-design-service": {
    path: "/services/graphics-design-service",
    title: "Graphic Design Services for Businesses | Brands Chamber",
    description:
      "Creative graphic design services for social media, ads, marketing collateral, presentations, print materials, and brand visuals.",
    schema: serviceSchema(
      "Graphic Design Services",
      "Creative graphic design services for social media, ads, marketing collateral, presentations, print materials, and brand visuals.",
      "/services/graphics-design-service"
    ),
  },

  "/services/video-creation-service": {
    path: "/services/video-creation-service",
    title: "Video Creation Services for Brands | Brands Chamber",
    description:
      "Promotional videos, brand videos, social media videos, motion graphics, and video content creation services for business marketing.",
    schema: serviceSchema(
      "Video Creation Services",
      "Promotional videos, brand videos, social media videos, motion graphics, and video content creation services for business marketing.",
      "/services/video-creation-service"
    ),
  },

  "/services/logo-animation-service": {
    path: "/services/logo-animation-service",
    title: "Logo Animation Services | Animated Logo Design | Brands Chamber",
    description:
      "Animated logo design and motion branding services for intros, outros, social media, videos, and brand presentations.",
    schema: serviceSchema(
      "Logo Animation Services",
      "Animated logo design and motion branding services for intros, outros, social media, videos, and brand presentations.",
      "/services/logo-animation-service"
    ),
  },

  "/services/book-cover": {
    path: "/services/book-cover",
    title: "Book Cover Design Services | Brands Chamber",
    description:
      "Professional book cover design services for authors, publishers, ebooks, print books, and marketing campaigns.",
    schema: serviceSchema(
      "Book Cover Design Services",
      "Professional book cover design services for authors, publishers, ebooks, print books, and marketing campaigns.",
      "/services/book-cover"
    ),
  },

  "/services/book-animation-service": {
    path: "/services/book-animation-service",
    title: "Book Cover Animation Services | Brands Chamber",
    description:
      "Animated book cover videos and promotional motion graphics for authors, publishers, book launches, and social media marketing.",
    schema: serviceSchema(
      "Book Cover Animation Services",
      "Animated book cover videos and promotional motion graphics for authors, publishers, book launches, and social media marketing.",
      "/services/book-animation-service"
    ),
  },

  "/checkout": {
    path: "/checkout",
    title: "Secure Checkout | Brands Chamber",
    description:
      "Complete your Brands Chamber order securely through the checkout page.",
    noindex: true,
  },

  "/payment/payment-success": {
    path: "/payment/payment-success",
    title: "Payment Successful | Brands Chamber",
    description:
      "Your payment was successful. Thank you for ordering from Brands Chamber.",
    noindex: true,
  },

  "/payment/payment-cancelled": {
    path: "/payment/payment-cancelled",
    title: "Payment Cancelled | Brands Chamber",
    description:
      "Your payment was cancelled. You can return to Brands Chamber and try again.",
    noindex: true,
  },
};

export const defaultSeoMeta = seoMeta["/"];