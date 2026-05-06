// module.exports = {
//   siteUrl: "https://brandschamber.com",
//   generateRobotsTxt: true,

//   exclude: [
//     "/checkout",
//     "/payment/*",
//   ],
// };

module.exports = {
  siteUrl: "https://brandschamber.com",
  generateRobotsTxt: true,

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
    additionalSitemaps: [
      "https://brandschamber.com/sitemap.xml",
    ],
  },
};