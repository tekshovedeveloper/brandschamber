// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="Ghi1WGCge8Rt2PL4cschnA" async></script>
      
      <Component {...pageProps} />
    </>
  );
}