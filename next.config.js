/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

module.exports = nextConfig;
