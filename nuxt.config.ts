// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  runtimeConfig: {
    public: {
      FINANCE_API_KEY: process.env.NUXT_PUBLIC_FINANCE_API_KEY || ''
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
