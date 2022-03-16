/** @type {import('next-sitemap').IConfig} */

// export const siteUrl = process.env.SITE_URL || "https://example.com";
// export const generateRobotsTxt = true;

module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true, // (optional)
  sourceDir: "build",
  // ...other options
};
