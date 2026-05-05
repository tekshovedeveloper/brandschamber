/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not add output: "export" because your project uses API/server features.
  // Static export disables API routes; use `next build` for production instead.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/pricing",
        destination: "/#pricing",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;