/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    localeDetection: false,
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: true
};

module.exports = nextConfig;
