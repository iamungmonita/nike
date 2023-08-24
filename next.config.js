/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: 'http://localhost:3000/api',
    API_URL1: 'http://localhost:3000/api',
  },
  serverRuntimeConfig: {
    API_URL1: 'http://localhost:3000/api',
  },
  i18n: {
    locales: ['ENG', 'KHM'],
    defaultLocale: 'ENG'
  }
}
module.exports = nextConfig
