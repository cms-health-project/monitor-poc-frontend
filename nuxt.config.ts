export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, user-scalable=no',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n'
    ]
})
