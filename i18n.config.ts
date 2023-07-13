export default defineI18nConfig(() => ({
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
}))