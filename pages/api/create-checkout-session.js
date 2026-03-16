// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const PRODUCTS = {
//   "LOGO DESIGN": {
//     amount: 4900,
//     name: "LOGO DESIGN",
//     description: "100% custom — designed from scratch for your brand",
//   },
//   "BRANDING": {
//     amount: 24900,
//     name: "BRANDING",
//     description: "Complete brand identity system — strategy to assets.",
//   },
//   "WEB DEVELOPMENT": {
//     amount: 19900,
//     name: "WEB DEVELOPMENT",
//     description: "Custom, CMS, e-commerce, and Shopify builds.",
//   },
//   "MOBILE APPS": {
//     amount: 59900,
//     name: "MOBILE APPS",
//     description: "iOS, Android, and cross-platform — end-to-end.",
//   },
//   "SEO & MARKETING": {
//     amount: 29900,
//     name: "SEO & MARKETING",
//     description:
//       "Full channel strategy, campaign management, monthly reporting, and ongoing optimisation.",
//   },
//   "UI/UX DESIGN": {
//     amount: 19900,
//     name: "UI/UX DESIGN",
//     description: "Research-first design — wireframes to final UI",
//   },
//   "GRAPHIC DESIGN": {
//     amount: 4900,
//     name: "GRAPHIC DESIGN",
//     description: "On-brand design for every marketing need.",
//   },
//   "VIDEO PRODUCTION": {
//     amount: 9900,
//     name: "VIDEO PRODUCTION",
//     description: "Brand films, explainers, reels & motion graphics.",
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { title } = req.body;

//     if (!title || !PRODUCTS[title]) {
//       return res.status(400).json({ error: "Invalid product selected." });
//     }

//     const product = PRODUCTS[title];
//     const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           quantity: 1,
//           price_data: {
//             currency: "usd",
//             unit_amount: product.amount,
//             product_data: {
//               name: product.name,
//               description: product.description,
//             },
//           },
//         },
//       ],
//       success_url: `${siteUrl}/payment/payment-success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${siteUrl}/payment/payment-cancelled`,
//       metadata: {
//         service: product.name,
//       },
//     });

//     return res.status(200).json({ url: session.url });
//   } catch (error) {
//     console.error("Stripe Checkout error:", error);
//     return res.status(500).json({ error: "Unable to create checkout session." });
//   }
// }


import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  "LOGO DESIGN": {
    amount: 4900,
    name: "LOGO DESIGN",
    description: "100% custom — designed from scratch for your brand",
  },
  "BRANDING": {
    amount: 24900,
    name: "BRANDING",
    description: "Complete brand identity system — strategy to assets.",
  },
  "WEB DEVELOPMENT": {
    amount: 19900,
    name: "WEB DEVELOPMENT",
    description: "Custom, CMS, e-commerce, and Shopify builds.",
  },
  "MOBILE APPS": {
    amount: 59900,
    name: "MOBILE APPS",
    description: "iOS, Android, and cross-platform — end-to-end.",
  },
  "SEO & MARKETING": {
    amount: 29900,
    name: "SEO & MARKETING",
    description:
      "Full channel strategy, campaign management, monthly reporting, and ongoing optimisation.",
  },
  "UI/UX DESIGN": {
    amount: 19900,
    name: "UI/UX DESIGN",
    description: "Research-first design — wireframes to final UI",
  },
  "GRAPHIC DESIGN": {
    amount: 4900,
    name: "GRAPHIC DESIGN",
    description: "On-brand design for every marketing need.",
  },
  "VIDEO PRODUCTION": {
    amount: 9900,
    name: "VIDEO PRODUCTION",
    description: "Brand films, explainers, reels & motion graphics.",
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { title } = req.body;

    if (!title || !PRODUCTS[title]) {
      return res.status(400).json({ error: "Invalid product selected." });
    }

    const product = PRODUCTS[title];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4000";

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.amount,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        },
      ],
      return_url: `${siteUrl}/payment/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        service: product.name,
      },
    });

    return res.status(200).json({
      clientSecret: session.client_secret,
    });
  } catch (error) {
    console.error("Stripe embedded checkout error:", error);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}