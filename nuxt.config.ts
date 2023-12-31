export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
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
