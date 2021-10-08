const withPWA = require("next-pwa"),
  disablePWA = process.env.DISABLE_PWA

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: disablePWA,
  },
  reactStrictMode: true,
})
