import Head from "next/head";

const SITE_URL = "https://brandschamber.com";
const DEFAULT_IMAGE = "/og-image.png";

export default function SeoHead({
  path = "/",
  title = "Web Development, SEO & Digital Marketing Agency in Sugar Land, TX | Brands Chamber",
  description = "Grow your business in Sugar Land, TX with Brands Chamber’s web development, SEO, branding, mobile app development, UI/UX design, and digital marketing services.",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  schema,
}) {
  const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Brands Chamber" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemaItems.map((item, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}














// import Head from "next/head";

// const SITE_URL = "https://brandschamber.com";
// const DEFAULT_IMAGE = "/og-image.jpg";

// export default function SeoHead({
//   path = "/",
//   title = "Web Development, SEO & Digital Marketing Services | Brands Chamber",
//   description = "Brands Chamber provides web development, SEO, branding, mobile app development, UI/UX design, and digital marketing services for business growth.",
//   image = DEFAULT_IMAGE,
//   type = "website",
//   noindex = false,
//   schema,
// }) {
//   const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");
//   const canonicalUrl = `${SITE_URL}${cleanPath}`;
//   const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

//   const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];

//   return (
//     <Head>
//       <title>{title}</title>

//       <meta name="description" content={description} />
//       <meta
//         name="robots"
//         content={noindex ? "noindex,nofollow" : "index,follow"}
//       />

//       <link rel="canonical" href={canonicalUrl} />

//       <meta property="og:type" content={type} />
//       <meta property="og:site_name" content="Brands Chamber" />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:url" content={canonicalUrl} />
//       <meta property="og:image" content={imageUrl} />

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={imageUrl} />

//       {schemaItems.map((item, index) => (
//         <script
//           key={`schema-${index}`}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
//         />
//       ))}
//     </Head>
//   );
// }