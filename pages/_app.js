// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }



// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "@/styles/globals.css";
// import { useRouter } from "next/router";
// import Script from "next/script";

// import SeoHead from "@/components/seo/SeoHead";
// import { seoMeta, defaultSeoMeta } from "@/components/seo/seoMeta";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();

//   const cleanPath = router.pathname.replace(/\/$/, "") || "/";
//   const meta = seoMeta[cleanPath] || defaultSeoMeta;
//   return (
//     <>
//       <SeoHead {...meta} />

//       <Script src="https://analytics.ahrefs.com/analytics.js" data-key="Ghi1WGCge8Rt2PL4cschnA" async></Script>
      
//       <Component {...pageProps} />
//     </>
//   );
// }


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import SeoHead from "@/components/seo/SeoHead";
import { seoMeta, defaultSeoMeta } from "@/components/seo/seoMeta";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const cleanPath = router.pathname.replace(/\/$/, "") || "/";
  const meta = seoMeta[cleanPath] || defaultSeoMeta;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const handleRouteChange = (url) => {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SeoHead {...meta} />

      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="Ghi1WGCge8Rt2PL4cschnA"
        async
      />

      <Component {...pageProps} />
    </>
  );
}