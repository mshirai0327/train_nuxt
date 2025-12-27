// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "nuxt-quasar-ui"
  ],
  quasar: {
    sassVariables: "assets/styles/quasar-variables.sass",
    plugins: [
      "Notify",
      "Dialog"
    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons', 'fontawesome-v6'],
    },
  },
  css: [
    "~/assets/styles/quasar.sass",
  ],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
  },
})