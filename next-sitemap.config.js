// module.exports = {
//   siteUrl: "https://brandschamber.com",
//   generateRobotsTxt: true,

//   exclude: [
//     "/checkout",
//     "/payment/*",
//   ],
// };

// module.exports = {
//   siteUrl: "https://brandschamber.com",
//   generateRobotsTxt: true,

//   exclude: [
//     "/checkout",
//     "/payment/*",
//   ],

//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//     ],
//     additionalSitemaps: [
//       "https://brandschamber.com/sitemap.xml",
//     ],
//   },
// };


module.exports = {
  siteUrl: "https://brandschamber.com",
  generateRobotsTxt: true,
  trailingSlash: false,

  exclude: [
    "/checkout",
    "/payment/*",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  transform: async (config, path) => {
    const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");

    return {
      loc: `${config.siteUrl}${cleanPath}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};