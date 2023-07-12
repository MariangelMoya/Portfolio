// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
// @ts-ignore
    runtimeConfig: {
        public: {
            api: process.env.DOMAIN
        }
    },
// @ts-ignore
    css: ['~/assets/css/main.css'],
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
    },
})
