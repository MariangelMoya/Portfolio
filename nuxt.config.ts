// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: ['~/assets/css/main.css'],
    colorMode: {
        preference: 'dark', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
    },
})
