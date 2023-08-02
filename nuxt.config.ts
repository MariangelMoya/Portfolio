// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        public: {
            api: process.env.DOMAIN
        }
    },
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/i18n',],
    i18n: {
        // @ts-ignore
        legacy: false,
        locale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        },
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'es',
                file: 'es.json'
            },
            {
                code: 'it',
                file: 'it.json'
            }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
    },
    nitro: {
        prerender: {
            crawlLinks: true,
        },
    },
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
    },
})
