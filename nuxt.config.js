
let path = require('path')

module.exports = {
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `http://localhost:8000/api/graphql`,
        httpLinkOptions: {
          credentials: 'same-origin'
        }
      }
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        tokenType: false
      }
    },
    token: {
      prefix: 'fsis.'
    },
    localStorage: false,
    rewriteRedirects: true,
    fullPathRedirect: true
  },
  axios: {},
  build: {
    extend: function (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'inline-source-map'
      }
    },
    extractCSS: true
  },
  env: {},
  css: [
    '../node_modules/vuetify/dist/vuetify.css',
    '@/assets/application.scss'
  ],
  head: {
    title: 'Freeswitch Integration Server'
  },
  mode: 'spa',
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],
  plugins: [
    // 'plugins/decycle.js',
    // 'plugins/vee-validate.js',
    'plugins/vuetify.js'
    // 'plugins/startup.js',
    // 'plugins/graphClient.js'
  ],
  rootDir: path.join(__dirname),
  router: {
    middleware: [
      'auth'
    ]
  },
  srcDir: path.join(__dirname, 'client')
}
