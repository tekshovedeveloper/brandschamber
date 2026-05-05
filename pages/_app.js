// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import Script from "next/script";

import SeoHead from "@/components/seo/SeoHead";
import { seoMeta, defaultSeoMeta } from "@/components/seo/seoMeta";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const cleanPath = router.pathname.replace(/\/$/, "") || "/";
  const meta = seoMeta[cleanPath] || defaultSeoMeta;
  return (
    <>
      <SeoHead {...meta} />

      <Script src="https://analytics.ahrefs.com/analytics.js" data-key="Ghi1WGCge8Rt2PL4cschnA" async></Script>
      
      <Component {...pageProps} />
    </>
  );
}