
// const faqData = {
//   title: "Frequently Asked Questions",
//   subtitle:
//     "Everything you need to know about working with Brands Chamber — from getting started to what happens after delivery. If your question isn't answered here, book a free consultation or email us at contact@brandschamber.com.",

//   groups: [
//     {
//       id: "getting-started",
//       label: "Getting Started",
//       items: [
//         {
//           id: "gs-1",
//           question: "Is this design good with dark theme?",
//           answer:
//             "Yes, our layouts are optimized for both dark and light themes. We focus on contrast, readability and accessibility.",
//         },
//         {
//           id: "gs-2",
//           question: "Can you customize the design for my brand?",
//           answer:
//             "Absolutely. We adapt colors, typography and visual language to match your brand guidelines and audience.",
//         },
//         {
//           id: "gs-3",
//           question: "Do you provide content or do I have to write it?",
//           answer:
//             "We can work with your existing content or help you create new copy that fits your goals and tone of voice.",
//         },
//       ],
//     },

//     {
//       id: "our-services",
//       label: "Our Services",
//       items: [
//         {
//           id: "sv-1",
//           question: "What services are included in your packages?",
//           answer:
//             "We offer web design & development, branding, e‑commerce, SEO, and ongoing maintenance. Packages can be customized.",
//         },
//         {
//           id: "sv-2",
//           question: "Do you work with existing websites?",
//           answer:
//             "Yes, we can redesign or extend your existing site, migrate content, and improve performance and UX.",
//         },
//       ],
//     },

//     {
//       id: "process-timeline",
//       label: "Process & Timeline",
//       items: [
//         {
//           id: "pt-1",
//           question: "How long does a typical project take?",
//           answer:
//             "Most projects take 3–6 weeks depending on scope, content readiness, and feedback speed.",
//         },
//         {
//           id: "pt-2",
//           question: "What does your process look like?",
//           answer:
//             "We start with a discovery call, then move into strategy, design, development, feedback rounds, and finally launch.",
//         },
//       ],
//     },

//     {
//       id: "pricing-payment",
//       label: "Pricing & Payment",
//       items: [
//         {
//           id: "pp-1",
//           question: "How much does a project usually cost?",
//           answer:
//             "Pricing depends on complexity. After a short call we’ll send a clear quote so you know exactly what to expect.",
//         },
//         {
//           id: "pp-2",
//           question: "Do you offer payment plans?",
//           answer:
//             "Yes, we usually split payments into milestones: deposit, design approval, and launch.",
//         },
//       ],
//     },

//     {
//       id: "support-maintenance",
//       label: "Support & Maintenance",
//       items: [
//         {
//           id: "sm-1",
//           question: "Do you provide ongoing support after launch?",
//           answer:
//             "We offer maintenance plans that include updates, backups, security monitoring and small content changes.",
//         },
//         {
//           id: "sm-2",
//           question: "Can I make changes myself later?",
//           answer:
//             "Yes. We build with user‑friendly tools and can provide training so you can edit content on your own.",
//         },
//       ],
//     },
//   ],
// };

// export default faqData;


// src/components/faq/faq-data.js

const faqData = {
  title: "FREQUENTLY ASKED QUESTIONS",
  subtitle:
    "Everything you need to know about working with Brands Chamber — from getting started to what happens after delivery. If your question isn't answered here, book a free consultation or email us at contact@brandschamber.com.",

  groups: [
    /* =========================
       GETTING STARTED
       ========================= */
    {
      id: "getting-started",
      label: "GETTING STARTED",
      items: [
        {
          id: "gs-1",
          question: "How do I get started with Brands Chamber?",
          answer:
            "The best first step is to book a free consultation. During this call, we'll listen to your goals, understand your business, and recommend the right services and approach for your specific situation. There's no commitment, no pressure, and no obligation — just an honest conversation about what your business needs.",
        },
        {
          id: "gs-2",
          question:
            "Do I need to know exactly what I want before reaching out?",
          answer:
            "Not at all. Many of our clients come to us with a general problem — 'my brand doesn't look professional' or 'I need a website but don't know where to start' — rather than a fully formed brief. That's exactly what our discovery process is for. We ask the right questions and help you define what you need before any work begins.",
        },
        {
          id: "gs-3",
          question:
            "What information should I prepare before our consultation?",
          answer:
            "It helps to have a general sense of your business, your target audience, and what you're hoping to achieve. Any existing brand materials — a current logo, website, or examples of work you like — are useful to share, but not required. The more context you can give us, the more useful the consultation will be.",
        },
        {
          id: "gs-4",
          question: "Do you work with businesses outside the United States?",
          answer:
            "Yes — we work with clients remotely across the world. Our entire process is online, and we've successfully delivered projects for businesses in North America, Europe, the Middle East, South Asia, and beyond. Time zone differences are managed through clear communication and agreed response windows.",
        },
        {
          id: "gs-5",
          question:
            "Do you work with startups that have a very limited budget?",
          answer:
            "Yes. We built Brands Chamber specifically to serve small businesses and startups at every stage of growth. We offer services at different price points and can work with you to scope a project that delivers the most value within your budget. Tell us what you're working with during your consultation and we'll find the right approach.",
        },
      ],
    },

    /* =========================
       OUR SERVICES
       ========================= */
    {
      id: "our-services",
      label: "OUR SERVICES",
      items: [
        {
          id: "sv-1",
          question: "What services does Brands Chamber offer?",
          answer:
            "We offer a complete range of creative and digital services: Logo Design, Branding, Website Development, Mobile App Development, SEO & Digital Marketing, UI/UX Design, Graphic Design, and Video Production & Motion Graphics. All services are available individually or as part of a combined package.",
        },
        {
          id: "sv-2",
          question:
            "Do you offer ongoing monthly services or retainers?",
          answer:
            "Yes. Several of our services are available on a monthly retainer basis, including SEO & Digital Marketing, Graphic Design, Social Media Management, and Website Maintenance. Retainer arrangements give you consistent, dedicated support at a predictable monthly cost.",
        },
      ],
    },

    /* =========================
       PROCESS & TIMELINES
       ========================= */
    {
      id: "process-timelines",
      label: "PROCESS & TIMELINES",
      items: [
        {
          id: "pt-1",
          question:
            "What does the project process look like from start to finish?",
          answer:
            "Every project follows four stages: (1) Discovery — we understand your business, goals, and requirements; (2) Scoping — we define exactly what will be delivered, when, and at what cost; (3) Production — we design, develop, or produce the agreed deliverables with regular updates and feedback rounds; (4) Delivery — we hand over all final files, walk you through everything, and ensure you're set up for success.",
        },
        {
          id: "pt-2",
          question: "How long does a typical project take?",
          answer:
            "Timelines vary by service and scope. Logo design typically takes 2–4 business days. A full brand identity takes 1–2 weeks. Website development ranges from 2–6 weeks depending on complexity. Mobile apps take 8–16 weeks. SEO campaigns show meaningful results in 3–6 months. We'll give you a precise timeline for your specific project during scoping.",
        },
        {
          id: "pt-3",
          question: "How do you communicate during a project?",
          answer:
            "We communicate primarily via email, with scheduled calls at key milestones — project kickoff, design review, and final delivery. For ongoing clients, we use project management tools to keep everything organised and visible. You'll always know what stage your project is at and what's coming next.",
        },
        {
          id: "pt-4",
          question: "How many revisions do I get?",
          answer:
            "This depends on the service. Many of our services include unlimited revisions within the agreed scope, meaning we revise until you're genuinely satisfied with the direction. For services where revision rounds are specified, these will be clearly outlined in your project scope before work begins. We never pressure clients to accept work they're not happy with.",
        },
        {
          id: "pt-5",
          question: "What happens if my project takes longer than expected?",
          answer:
            "If a delay is caused by factors on our side, we will communicate proactively and work to resolve it as quickly as possible. If a delay is caused by late client feedback, additional scope requests, or factors outside our control, we will revise the timeline accordingly and keep you informed throughout.",
        },
      ],
    },

    /* =========================
       PRICING & PAYMENT
       ========================= */
    {
      id: "pricing-payment",
      label: "PRICING & PAYMENT",
      items: [
        {
          id: "pp-1",
          question: "How is pricing determined for my specific project?",
          answer:
            "Pricing is based on the scope, complexity, and timeline of your project. After your free consultation, we'll provide a detailed, itemised quote with no hidden fees. You'll know exactly what you're paying for before any work begins.",
        },
        {
          id: "pp-2",
          question: "What payment methods do you accept?",
          answer:
            "We accept payment via Credit or Debit Card (Visa, Mastercard, American Express), Bank Transfer, and PayPal. All payment details are provided on your invoice. If you have a specific payment requirement, let us know and we'll do our best to accommodate it.",
        },
        {
          id: "pp-3",
          question: "Are there any hidden fees I should be aware of?",
          answer:
            "No. Our quotes are transparent and itemised. The only additional costs that may arise are: (a) scope changes requested by the Client after work has commenced; (b) third-party costs such as premium stock photography, fonts, plugins, or hosting that fall outside our standard deliverables; or (c) rush fees if an urgent turnaround is required. Any additional costs are always communicated and agreed upon before being incurred.",
        },
      ],
    },

    /* =========================
       OWNERSHIP & FILE DELIVERY
       ========================= */
    {
      id: "ownership-delivery",
      label: "OWNERSHIP & FILE DELIVERY",
      items: [
        {
          id: "od-1",
          question: "Who owns the work once the project is complete?",
          answer:
            "You do — completely. Upon receipt of full payment, all intellectual property rights to the final approved deliverables are transferred to you. You have full ownership to use, modify, reproduce, and distribute the work for any lawful business purpose, with no ongoing fees or licencing restrictions from Brands Chamber.",
        },
        {
          id: "od-2",
          question: "What file formats will I receive?",
          answer:
            "File formats depend on the service. Logo and brand design deliverables are provided in AI, EPS, SVG, PNG, and PDF formats — covering both print and digital use. Website deliverables include all source files and database exports. App projects include full source code. Video projects are delivered in MP4, MOV, and platform-specific formats. All files are organised, labelled, and ready to use from day one.",
        },
        {
          id: "od-3",
          question: "Will I receive editable source files?",
          answer:
            "Yes. Editable source files — including Adobe Illustrator, Photoshop, Figma, or relevant development files — are included as standard in all deliverables. You will not be locked into using Brands Chamber for future changes. Your files are yours to use with any designer or developer in the future.",
        },
      ],
    },

    /* =========================
       WORKING TOGETHER
       ========================= */
    {
      id: "working-together",
      label: "WORKING TOGETHER",
      items: [
        {
          id: "wt-1",
          question: "What do you need from me to get the project started?",
          answer:
            "Once the scope and payment are agreed, we'll send you a project brief or onboarding questionnaire to gather everything we need — your business details, target audience, brand preferences, references, and any existing assets. The more detailed your input, the stronger our output will be.",
        },
        {
          id: "wt-2",
          question: "What if I'm not happy with the initial concepts?",
          answer:
            "We work collaboratively until we get it right. If the initial concepts don't feel like the right direction, we'll discuss your feedback, understand what's missing, and explore a new direction. Our process is built around getting to a result you genuinely love — not pressuring you to accept something that doesn't feel right.",
        },
        {
          id: "wt-3",
          question: "Do you sign non-disclosure agreements (NDAs)?",
          answer:
            "Yes — we're happy to sign an NDA before any project discussions if your business requires it. Contact us at contact@brandschamber.com and we'll arrange this before any sensitive information is shared.",
        },
      ],
    },
  ],

  footerTitle: "Still Have Questions?",
  footerText:
    "If you didn't find the answer you were looking for, we'd love to hear from you. Reach out through any of the following:\n\n• Email: contact@brandschamber.com — we aim to respond within 1 business day.\n• Free Consultation: Book a no-obligation call directly through our website.\n• Website: www.brandschamber.com\n\nBrands Chamber  ·  www.brandschamber.com  ·  contact@brandschamber.com",
};

export default faqData;