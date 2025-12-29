/** @type {import('next').NextConfig} */
const nextConfig = {

  // IMPORTANT: do NOT use output: "export" if you need API routes
  images: {
    // If you were using static export only for images:
    // you can usually remove this too; keep it only if you truly need it.
    unoptimized: true,
  },
};

export default nextConfig;
