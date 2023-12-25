export default {
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    vueI18n: '~/i18n.config.ts',
    locales: ['en', 'tr', 'el'],  // used in URL path prefix
    defaultLocale: 'en',
},

  postcss: {
    plugins: {
      'postcss-nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  css: ['~/assets/styles/main.scss'],
};
