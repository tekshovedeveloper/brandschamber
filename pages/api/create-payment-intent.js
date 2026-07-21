import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  "LOGO DESIGN": {
    amount: 4900,
    name: "LOGO DESIGN",
    description: "100% custom — designed from scratch for your brand",
  },
  BRANDING: {
    amount: 24900,
    name: "BRANDING",
    description: "Complete brand identity system — strategy to assets.",
  },
  "WEB DEVELOPMENT": {
    amount: 49900,
    name: "WEB DEVELOPMENT",
    description: "Custom, CMS, e-commerce, and Shopify builds.",
  },
  "MOBILE APPS": {
    amount: 99900,
    name: "MOBILE APPS",
    description: "iOS, Android, and cross-platform — end-to-end.",
  },
  "SEO & MARKETING": {
    amount: 19900,
    name: "SEO & MARKETING",
    description:
      "Monthly SEO strategy, optimization, reporting, and growth support.",
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
    const { service } = req.body;

    if (!service || !PRODUCTS[service]) {
      return res.status(400).json({ error: "Invalid service selected." });
    }

    const product = PRODUCTS[service];

    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: {
        service: product.name,
      },
      description: product.description,
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      product,
    });
  } catch (error) {
    console.error("Stripe PaymentIntent error:", error);
    return res.status(500).json({ error: "Unable to create payment intent." });
  }
}
