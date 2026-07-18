// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   PaymentElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import styles from "./checkout.module.css";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// function CheckoutForm({ service, product }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${window.location.origin}/payment/payment-success`,
//       },
//       redirect: "if_required",
//     });

//     if (error) {
//       setErrorMessage(error.message || "Payment failed.");
//       setLoading(false);
//       return;
//     }

//     if (paymentIntent && paymentIntent.status === "succeeded") {
//       setSuccessMessage("Payment successful.");
//       setTimeout(() => {
//         router.push("/payment/payment-success");
//       }, 800);
//       return;
//     }

//     setLoading(false);
//   };

//   return (
//     <div className={styles.checkoutShell}>
//       <div className={styles.summaryCard}>
//         <div className={styles.summaryCardInner}>
//         <span className={styles.secureBadge}>Secure Payment</span>
//         <h1 className={styles.summaryTitle}>Complete Your Order</h1>
//         <p className={styles.summaryLabel}>You are purchasing:</p>
//         <h2 className={styles.summaryService}>{service}</h2>
//         {product?.description ? (
//           <p className={styles.summaryDesc}>{product.description}</p>
//         ) : null}
//         {product?.amount ? (
//           <div className={styles.summaryPrice}>
//             ${(product.amount / 100).toFixed(2)}
//           </div>
//         ) : null}

//         <Link href="/" className={styles.backButton}>
//           Back to Pricing
//         </Link>
//         </div>
//       </div>

//       <div className={styles.formCard}>
//         <div className={styles.formCardInner}>
//           <div className={styles.formHeader}>
//             <h2 className={styles.formTitle}>Checkout</h2>
//             <p className={styles.formSubheading}>
//               Pay securely without leaving your website.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className={styles.paymentForm}>
//             <div className={styles.paymentElementWrap}>
//               <PaymentElement />
//             </div>

//             {errorMessage ? (
//               <p className={styles.errorMessage}>{errorMessage}</p>
//             ) : null}

//             {successMessage ? (
//               <p className={styles.successMessage}>{successMessage}</p>
//             ) : null}

//             <button
//               type="submit"
//               className={styles.payButton}
//               disabled={!stripe || loading}
//             >
//               {loading ? "Processing..." : "Pay Now"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CheckoutPage() {
//   const router = useRouter();
//   const service = typeof router.query.service === "string" ? router.query.service : "";

//   const [clientSecret, setClientSecret] = useState("");
//   const [product, setProduct] = useState(null);
//   const [pageError, setPageError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!router.isReady || !service) return;

//     let ignore = false;

//     async function init() {
//       try {
//         setLoading(true);
//         setPageError("");

//         const res = await fetch("/api/create-payment-intent", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ service }),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data?.error || "Unable to initialize checkout.");
//         }

//         if (!ignore) {
//           setClientSecret(data.clientSecret);
//           setProduct(data.product);
//         }
//       } catch (err) {
//         if (!ignore) {
//           setPageError(err.message || "Something went wrong.");
//         }
//       } finally {
//         if (!ignore) {
//           setLoading(false);
//         }
//       }
//     }

//     init();

//     return () => {
//       ignore = true;
//     };
//   }, [router.isReady, service]);

//   const options = useMemo(() => {
//     if (!clientSecret) return null;

//     return {
//       clientSecret,
//       appearance: {
//         theme: "night",
//         variables: {
//           colorPrimary: "#fff",
//           colorBackground: "#151515",
//           colorText: "#ffffff",
//           colorDanger: "#ff6b6b",
//           colorTextSecondary: "rgba(255,255,255,0.72)",
//           colorPrimaryText: "#ffffff",
//           colorIcon: "#ffffff",
//           colorSuccess: "#22c55e",
//           borderRadius: "12px",
//           fontFamily: "Archivo, system-ui, sans-serif",
//           spacingUnit: "4px",
//         },
//         rules: {
//           ".Input": {
//             backgroundColor: "#101010",
//             border: "1px solid rgba(255,255,255,0.12)",
//             boxShadow: "none",
//             color: "#ffffff",
//           },
//           ".Input:focus": {
//             border: "1px solid #2042C2",
//             boxShadow: "0 0 0 1px #2042C2",
//           },
//           ".Label": {
//             color: "#ffffff",
//             fontWeight: "600",
//           },
//           ".Tab": {
//             backgroundColor: "#101010",
//             border: "1px solid rgba(255,255,255,0.12)",
//             color: "#ffffff",
//           },
//           ".Tab:hover": {
//             color: "#ffffff",
//           },
//           ".Tab--selected": {
//             backgroundColor: "rgba(25, 65, 191, 0.35)",
//             border: "1px solid #C861FE",
//           },
//           ".Block": {
//             backgroundColor: "#151515",
//           },
//         },
//       },
//     };
//   }, [clientSecret]);

//   return (
//           <main className={`${styles.mainBg} min-h-screen `}>
//           <video
//             className={styles.videoBg}
//             autoPlay
//             muted
//             loop
//             playsInline
//           >
//             <source src="/assets/home/brands-chamber-bg2.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
    
//       <div className={styles.pageOverlay} />

//       <div className={styles.pageInner}>
//         {loading ? (
//           <div className={styles.stateBox}>Loading checkout…</div>
//         ) : pageError ? (
//           <div className={styles.stateBoxError}>{pageError}</div>
//         ) : clientSecret && options ? (
//           <Elements stripe={stripePromise} options={options}>
//             <CheckoutForm service={service} product={product} />
//           </Elements>
//         ) : (
//           <div className={styles.stateBoxError}>Unable to load checkout.</div>
//         )}
//       </div>
//     </main>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { breadcrumbItemsByPath } from "@/components/breadcrumbs/breadcrumbItems";
import styles from "./checkout.module.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

// function CheckoutForm({ service, product }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${window.location.origin}/payment/payment-success`,
//       },
//       redirect: "if_required",
//     });

//     if (error) {
//       setErrorMessage(error.message || "Payment failed.");
//       setLoading(false);
//       return;
//     }

//     if (paymentIntent && paymentIntent.status === "succeeded") {
//       setSuccessMessage("Payment successful.");
//       setTimeout(() => {
//         router.push("/payment/payment-success");
//       }, 800);
//       return;
//     }

//     setLoading(false);
//   };

//   return (
//     <div className={styles.checkoutShell}>
//       <div className={styles.summaryCard}>
//         <div className={styles.summaryCardInner}>
//           <span className={styles.secureBadge}>Secure Payment</span>

//           <h1 className={styles.summaryTitle}>Complete Your Order</h1>

//           <p className={styles.summaryLabel}>You are purchasing:</p>

//           <h2 className={styles.summaryService}>{service}</h2>

//           {product?.description ? (
//             <p className={styles.summaryDesc}>{product.description}</p>
//           ) : null}

//           {product?.amount ? (
//             <div className={styles.summaryPrice}>
//               ${(product.amount / 100).toFixed(2)}
//             </div>
//           ) : null}

//           <Link href="/" className={styles.backButton}>
//             Back to Pricing
//           </Link>
//         </div>
//       </div>

//       <div className={styles.formCard}>
//         <div className={styles.formCardInner}>
//           <div className={styles.formHeader}>
//             <h2 className={styles.formTitle}>Checkout</h2>
//             <p className={styles.formSubheading}>
//               Pay securely without leaving your website.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className={styles.paymentForm}>
//             <div className={styles.paymentElementWrap}>
//               <PaymentElement />
//             </div>

//             {errorMessage ? (
//               <p className={styles.errorMessage}>{errorMessage}</p>
//             ) : null}

//             {successMessage ? (
//               <p className={styles.successMessage}>{successMessage}</p>
//             ) : null}

//             <button
//               type="submit"
//               className={styles.payButton}
//               disabled={!stripe || loading}
//             >
//               {loading ? "Processing..." : "Pay Now"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

function CheckoutForm({ service, product, breadcrumbs = [] }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // PayPal-specific state
  const [paypalError, setPaypalError] = useState("");
  const [paypalSuccess, setPaypalSuccess] = useState("");

  const amountForPaypal = useMemo(() => {
    if (!product?.amount) return null;
    return (product.amount / 100).toFixed(2); // Stripe cents -> PayPal dollars
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/payment-success`,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed.");
      setLoading(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      setSuccessMessage("Payment successful.");
      setTimeout(() => {
        router.push("/payment/payment-success");
      }, 800);
      return;
    }

    setLoading(false);
  };

  return (
    <div className={styles.checkoutShell}>
      <div className={styles.summaryCard}>
        <div className={styles.summaryCardInner}>
          <span className={styles.secureBadge}>Secure Payment</span>

          {hasBreadcrumbs && (
            <div className={styles.breadcrumbSlot}>
              <Breadcrumbs items={breadcrumbs} variant="inline" />
            </div>
          )}

          <h1
            className={`${styles.summaryTitle} ${
              hasBreadcrumbs ? styles.summaryTitleWithBreadcrumbs : ""
            }`}
          >
            Complete Your Order
          </h1>

          <p className={styles.summaryLabel}>You are purchasing:</p>

          <h2 className={styles.summaryService}>{service}</h2>

          {product?.description ? (
            <p className={styles.summaryDesc}>{product.description}</p>
          ) : null}

          {product?.amount ? (
            <div className={styles.summaryPrice}>
              ${(product.amount / 100).toFixed(2)}
            </div>
          ) : null}

          <Link href="/" className={styles.backButton}>
            Back to Pricing
          </Link>
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formCardInner}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Checkout</h2>
            <p className={styles.formSubheading}>
              Pay securely without leaving your website.
            </p>
          </div>

          {/* Stripe (card) checkout */}
          <form onSubmit={handleSubmit} className={styles.paymentForm}>
            <div className={styles.paymentElementWrap}>
              <PaymentElement />
            </div>

            {errorMessage ? (
              <p className={styles.errorMessage}>{errorMessage}</p>
            ) : null}

            {successMessage ? (
              <p className={styles.successMessage}>{successMessage}</p>
            ) : null}

            <button
              type="submit"
              className={styles.payButton}
              disabled={!stripe || loading}
            >
              {loading ? "Processing..." : "Pay with Card"}
            </button>
          </form>

          {/* Divider */}
          {/* <div className={styles.dividerOr}>
            <span>OR</span>
          </div> */}

          {/* PayPal checkout */}
          {/* <div className={styles.paypalSection}>
            <h3 className={styles.paypalTitle}>Pay with PayPal</h3>

            {amountForPaypal && (
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                  setPaypalError("");
                  setPaypalSuccess("");
                  if (!amountForPaypal) {
                    setPaypalError("Invalid amount for PayPal payment.");
                    return;
                  }
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: { value: amountForPaypal },
                        description: product?.description || service,
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order
                    .capture()
                    .then(() => {
                      setPaypalSuccess("Payment successful.");
                      setTimeout(
                        () => router.push("/payment/payment-success"),
                        800
                      );
                    })
                    .catch((err) => {
                      setPaypalError(
                        err?.message || "PayPal payment failed."
                      );
                    });
                }}
                onError={(err) => {
                  setPaypalError(err?.message || "PayPal payment failed.");
                }}
              />
            )}

            {paypalError ? (
              <p className={styles.errorMessage}>{paypalError}</p>
            ) : null}
            {paypalSuccess ? (
              <p className={styles.successMessage}>{paypalSuccess}</p>
            ) : null}
          </div> */}
        </div>
      </div>
    </div>
  );
}


export default function CheckoutPage() {
  const router = useRouter();

  const service =
    typeof router.query.service === "string" ? router.query.service : "";
  const type = typeof router.query.type === "string" ? router.query.type : "";
  const category =
    typeof router.query.category === "string" ? router.query.category : "";
  const packageTitle =
    typeof router.query.packageTitle === "string"
      ? router.query.packageTitle
      : "";

  const [clientSecret, setClientSecret] = useState("");
  const [product, setProduct] = useState(null);
  const [pageError, setPageError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    let ignore = false;

    async function init() {
      try {
        setLoading(true);
        setPageError("");

        let endpoint = "";
        let payload = {};
        let displayService = "";

        if (type === "service-package") {
          if (!category || !packageTitle) {
            throw new Error("Missing service package information.");
          }

          endpoint = "/api/create-service-payment-intent";
          payload = { category, packageTitle };
          displayService = `${category} - ${packageTitle}`;
        } else {
          if (!service) {
            throw new Error("Missing service information.");
          }

          endpoint = "/api/create-payment-intent";
          payload = { service };
          displayService = service;
        }

        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Unable to initialize checkout.");
        }

        if (!ignore) {
          setClientSecret(data.clientSecret);
          setProduct({
            ...data.product,
            displayService,
          });
        }
      } catch (err) {
        if (!ignore) {
          setPageError(err.message || "Something went wrong.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    init();

    return () => {
      ignore = true;
    };
  }, [router.isReady, service, type, category, packageTitle]);

  const options = useMemo(() => {
    if (!clientSecret) return null;

    return {
      clientSecret,
      appearance: {
        theme: "night",
        variables: {
          colorPrimary: "#ffffff",
          colorBackground: "#151515",
          colorText: "#ffffff",
          colorDanger: "#ff6b6b",
          colorTextSecondary: "rgba(255,255,255,0.72)",
          colorPrimaryText: "#ffffff",
          colorIcon: "#ffffff",
          colorSuccess: "#22c55e",
          borderRadius: "12px",
          fontFamily: "Archivo, system-ui, sans-serif",
          spacingUnit: "4px",
        },
        rules: {
          ".Input": {
            backgroundColor: "#101010",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "none",
            color: "#ffffff",
          },
          ".Input:focus": {
            border: "1px solid #2042C2",
            boxShadow: "0 0 0 1px #2042C2",
          },
          ".Label": {
            color: "#ffffff",
            fontWeight: "600",
          },
          ".Block": {
            backgroundColor: "#151515",
          },
        },
      },
      paymentMethodOrder: ["card"],
    };
  }, [clientSecret]);
  
  const paypalOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  currency: "USD",
};
  const displayTitle = product?.displayService || service || packageTitle || "";

  return (
    <main className={styles.mainBg}>
      <video className={styles.videoBg} autoPlay muted loop playsInline>
        <source src="/assets/home/brands-chamber-bg2.mp4" type="video/mp4" />
      </video>

      <div className={styles.pageOverlay} />

      <div className={styles.pageInner}>
        {/* {loading ? (
          <div className={styles.stateBox}>Loading checkout…</div>
        ) : pageError ? (
          <div className={styles.stateBoxError}>{pageError}</div>
        ) : clientSecret && options ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm service={displayTitle} product={product} />
          </Elements>
        ) : (
          <div className={styles.stateBoxError}>
            Unable to load checkout.
          </div>
        )} */}
        {loading ? (
          <div className={styles.stateBox}>Loading checkout…</div>
        ) : pageError ? (
          <div className={styles.stateBoxError}>{pageError}</div>
        ) : clientSecret && options ? (
          <PayPalScriptProvider options={paypalOptions}>
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm
                service={displayTitle}
                product={product}
                breadcrumbs={breadcrumbItemsByPath["/checkout"]}
              />
            </Elements>
          </PayPalScriptProvider>
        ) : (
          <div className={styles.stateBoxError}>Unable to load checkout.</div>
        )}
      </div>
    </main>
  );
}
