// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  vite: {
    optimizeDeps: {
      include: ["kinesis"],
    },
    ssr: {
      noExternal: ["kinesis"],
    },
  },
  plugins: ["~/plugins/kinesis.client.js"],

  modules: ['nuxt-aos', 'vue3-carousel-nuxt','@amineyarman/kinesis']
})