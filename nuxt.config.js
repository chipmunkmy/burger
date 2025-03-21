export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ztm-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyAfEqhC17eG7J-z7j6CNl0yoC_WhONp9h0",
      authDomain: "ztmburger-72f04.firebaseapp.com",
      projectId: "ztmburger-72f04",
      storageBucket: "ztmburger-72f04.appspot.com",
      messagingSenderId: "103869781417",
      appId: "1:103869781417:web:4df8888836e978b7c7e0b8",
      measurementId: "G-VJ06X1M424",
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  services: {
    auth: {
      persistence: 'local', // default
      initialize: {
        // onAuthStateChangedAction: 'onAuthStateChangeAction',
        subscribeManually: false,
      }
    }
  }
}
