export default {

    head: {
        title: 'EduToken',
        htmlAttrs: {
          lang: 'fr'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
      },

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-GB.js',
                name: 'English',
                country: 'United Kingdom',
                emoji: '🇬🇧'
            },
            {
                code: 'fr',
                file: 'fr-FR.js',
                name: 'Français',
                country: 'France',
                emoji: '🇫🇷'
            },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'fr',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            onlyOnRoot: true,
            alwaysRedirect: false,
            fallbackLocale: 'en',
        },
        vueI18nLoader: true,
    },
    modules: [
        'nuxt-i18n',
    ],
    buildModules: [
        '@nuxtjs/tailwindcss'
    ],
    components: true,
}