export default {
  devtools: {enabled: true},

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  i18n: {
    vueI18n: '~/i18n.config.ts',
    locales: ['en', 'tr', 'el'],  // used in URL path prefix
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },

  layoutTransition: 'layout',

  pageTransition: 'page',

  //Auto Import Components
  components: true,

  postcss: {
    plugins: {
      'postcss-nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/styles/main.scss'],

  head: {
    title: 'Aran Jannson Portfolio Site',
    meta: [
      {name: 'description', content: 'A portfolio website for Aran Jannson'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://beta.aranjannson.com/'},
      {property: 'og:title', content: 'Aran Jannson Portfolio Site'},
      {property: 'og:description', content: 'A portfolio website for Aran Jannson'},
      {property: 'og:image', content: 'https://beta.aranjannson.com/favicon.png'},

      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:url', content: 'https://beta.aranjannson.com/'},
      {name: 'twitter:title', content: 'Aran Jannson Portfolio Site'},
      {name: 'twitter:description', content: 'A portfolio website for Aran Jannson'},
      {name: 'twitter:image', content: 'https://beta.aranjannson.com/favicon.png'}
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  }
};