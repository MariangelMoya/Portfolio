module.exports = {
    theme: {
        extend: {
            zIndex: {
                '0': '0',
            }
        }
    },
    plugins: [require('daisyui'), require('@tailwindcss/forms'),],
    daisyui: {
        themes: ["dark", "emerald", "lofi", "night", "winter"],
    },
};