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
      return res.status(400).json({
        error: "Missing category or package title.",
      });
    }

    const packages = SERVICE_PRICING_DATA[category];

    if (!packages || !Array.isArray(packages)) {
      return res.status(400).json({ error: "Invalid service category." });
    }

    const selectedPackage = packages.find(
      (item) => item.title === packageTitle
    );

    if (!selectedPackage) {
      return res.status(400).json({ error: "Selected package not found." });
    }

    const amount = parsePriceToCents(selectedPackage.price);

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid package price." });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: {
        checkoutType: "service-package",
        category,
        packageTitle: selectedPackage.title,
        price: selectedPackage.price,
      },
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      product: {
        name: `${category} - ${selectedPackage.title}`,
        description:
          selectedPackage.desc || `${selectedPackage.title} package`,
        amount,
        category,
        packageTitle: selectedPackage.title,
        price: selectedPackage.price,
      },
    });
  } catch (error) {
    console.error("Stripe service payment intent error:", error);
    return res
      .status(500)
      .json({ error: "Unable to create payment intent." });
  }
}