export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TrustXWallet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/bootstrap-vue.client",
    { src: '~/plugins/robin.js', mode: 'client' },
    { src: '~/plugins/socket.client.js' },
    { src: '~/plugins/vue-select', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxt/postcss8'
  ],
  script: [
    {
      src: 'https://checkout.squadco.com/widget/squad.min.js',
    },
  ],


  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'vue-sweetalert2/nuxt',
    "bootstrap-vue/nuxt",
    '@nuxtjs/toast',
    'nuxt-paystack'
  ],
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [], // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://trustwallet.onrender.com/api',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'TRUST X WALLET',
      author: 'Trust x wallet website',
    },
    manifest: {
      name: 'TRUST X WALLET',
      short_name: 'Trust X Wallet',
      description: 'TRUST X WALLET official website',
      lang: 'en',
      theme_color: "#8B4E96",
      background_color: "#8B4E96",
      orientation: 'portrait',
      display: 'standalone',
    },
    icon: {
      filename: 'trustxwallet.svg',
    },
  },
  generate: {
    fallback: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  env: {
    PAYSTACK_KEY: process.env.PAYSTACK_KEY
  }
}
