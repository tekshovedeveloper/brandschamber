import styles from '../../src/styles/index.module.css'
import { Inter } from "next/font/google";

export default function PaymentSuccess() {
    
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


      <div >
        <img src='/assets/payment/payment-verify.svg'  style={{display:'flex', justifySelf:'center', alignItems:'center', height:'130px', width:'130px'}}/>
        <h1 style={{ fontSize: "42px", marginBottom: "14px" , marginTop:"14px"}} className={styles.paymentHeading}>
          Payment Successful
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.85 }}>
          Thank you. Your order has been received.
        </p>
      </div>
    </main>
  );
}