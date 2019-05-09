import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

export default {
  mode: 'spa',

  srcDir: __dirname,

  /*
   ** Headers of the page
   */
  head: {
    title: 'rails-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Description' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv', // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org
    '@nuxtjs/pwa', // Doc: https://pwa.nuxtjs.org
    '@/modules/spa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://axios.nuxtjs.org/options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        tailwindcss: path.join(__dirname, 'tailwind.js')
      },
      preset: { autoprefixer: { grid: true } }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

  /*
   ** Generate configuration
   *
   * Example:
   *
   * generate: {
   *   dir: 'public'
   * }
   */
}
