import styles from '../../src/styles/index.module.css'
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { breadcrumbItemsByPath } from "@/components/breadcrumbs/breadcrumbItems";


export default function PaymentCancelled() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "40px",
      }}
      className={`${styles.mainBg} min-h-screen`}
    >
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/home/brands-chamber-bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <div className={styles.paymentBreadcrumb}>
          <Breadcrumbs
            items={breadcrumbItemsByPath["/payment/payment-cancelled"]}
            variant="centered"
          />
        </div>
        <h1 style={{ fontSize: "42px", marginBottom: "14px", marginTop: "0" }} className={styles.paymentHeading}>
          Payment Cancelled
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.85 }}>
          Your checkout was cancelled. You can try again anytime.
        </p>
      </div>
    </main>
  );
}
