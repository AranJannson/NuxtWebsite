export default {
  devtools: { enabled: true },


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
