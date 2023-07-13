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
        vueI18n: './i18n.config.ts',
    },
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
    },
})
