
export default {
  
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ], 
  },
  /*
   ** Global CSS
   */
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css', 'assets/fonts/font.css','assets/css/style.scss'], 
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [ 
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         },
         {
          set:'@fortawesome/free-regular-svg-icons',
          icons: ['far']
        }
       ]
      }
],
'@nuxtjs/axios',
'@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: { 
  },
 /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  './plugins/mixins/validation', 
  './plugins/mixins/user', 
  './plugins/axios',
  './plugins/vue-slick-carousel.js',  
  './plugins/directive.js'
],

router: {
  middleware: [
    'clearValidationErrors', 
  ] 
},

env: {
  baseUrl: process.env.BASE_URL || 'http://localhost:8000/api/'
},

auth: {
  strategies: {
    local: {
      endpoints: {
        login: {
          url: 'auth/login', method: 'post', propertyName: 'token'
        },
        user: {
          url: 'me', method: 'get', propertyName: 'data'
        },
        logout: {
          method: 'get',
          url: 'auth/logout', method: 'get'
        }
      }
    }
  },
  redirect: {
    login: '/login',
    logout: '/',
    // callback: '/login',
    home: '/'
  },
  plugins: [
    './plugins/auth'
  ]
},
  /*
  ** Axios module configuration
  */
 axios: { 
  baseURL: "http://localhost:8000/api/",
},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/login',
        components: {
          default: resolve(__dirname, 'pages/auth/login') 
        } 
      });
      routes.push({
        path: '/register',
        components: {
          default: resolve(__dirname, 'pages/auth/register') 
        } 
      });
    }
  }
}
