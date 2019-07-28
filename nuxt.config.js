
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],

  router: {
      middleware: ["clearValidationErrors"]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["./plugins/mixins/user.js", "./plugins/axios.js", "./plugins/mixins/validation.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth'
  ],

  axios: {
    baseURL: "http://localhost:80/api"
  },

  auth:{
    strategies: {
        local: {
            endpoints: {
                login: {
                    url: 'login',
                    method: 'post',
                    propertyName: "meta.token"
                },

                user:{
                    url: 'user',
                    method: 'get',
                    propertyName: 'data'
                },

                logout:{
                    url: 'logout',
                    method: 'post'
                }
            }
        }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
