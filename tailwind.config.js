module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
