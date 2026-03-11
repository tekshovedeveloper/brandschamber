import Stripe from "stripe";
import { SERVICE_PRICING_DATA } from "@/components/service-pricing-name/servicePricingData";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function parsePriceToCents(priceString) {
  if (!priceString) return null;

  const clean = String(priceString).replace(/,/g, "");
  const match = clean.match(/(\d+(\.\d+)?)/);

  if (!match) return null;

  const amount = Number(match[1]);
  if (Number.isNaN(amount)) return null;

  return Math.round(amount * 100);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { category, packageTitle } = req.body;

    if (!category || !packageTitle) {
      return res.status(400).json({ error: "Missing category or package title." });
    }

    const packages = SERVICE_PRICING_DATA[category];

    if (!packages || !Array.isArray(packages)) {
      return res.status(400).json({ error: "Invalid service category." });
    }

    const selectedPackage = packages.find((item) => item.title === packageTitle);

    if (!selectedPackage) {
      return res.status(400).json({ error: "Selected package not found." });
    }

    const amount = parsePriceToCents(selectedPackage.price);

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid package price." });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: `${category} - ${selectedPackage.title}`,
              description: selectedPackage.desc || `${selectedPackage.title} package`,
            },
          },
        },
      ],
      success_url: `${siteUrl}/payment/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/payment/payment-cancelled`,
      metadata: {
        category,
        packageTitle: selectedPackage.title,
        price: selectedPackage.price,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}