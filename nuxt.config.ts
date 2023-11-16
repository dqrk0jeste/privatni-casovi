export default defineNuxtConfig({
  routeRules: {
    '/admin/dashboard': { ssr: false }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    connectionString: process.env.POSTGRES_URL,
    tokenSecret: process.env.TOKEN_SECRET,
  }
})
