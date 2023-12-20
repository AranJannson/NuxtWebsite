export default {
  devtools: { enabled: true },


  postcss: {
    plugins: {
      'postcss-nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      // Add other PostCSS plugins if needed
    },
  },

  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  css: ['~/assets/styles/main.scss'],
};
