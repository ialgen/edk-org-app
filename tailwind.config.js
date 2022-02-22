export const content = [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
];
export const theme = {
    extend: {
        dropShadow: {
            '3xl': '0 35px 35px rgba(128, 174, 249, 0.25)'
        },
        colors: {
            blue: {
                edk: '#000366'
            },
            palette: {
                cyan: '#80D9FF',
                ciel: '#80AEF9',
                bleu: '#8083F3',
                violet: '#9E6EFF',
                vert: '#C0F0C3'
            }
        }
    }
};
