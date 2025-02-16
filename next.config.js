// next.config.js
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
});

const nextConfig = {
  images: {
    domains: ["media2.dev.to", "dev-to-uploads.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
