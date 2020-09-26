const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {
      fontFamily: {
        // display copy
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        // serif (body copy)
        serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        // monospaced
        mono: ['iA Writer Mono S', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        sky: {
          black: '#222222', // text
          'gray-700': '#282c47', // heading
          'gray-500': '#5b617c', // sub-title/text of lower importance
          'gray-300': '#f4f4f6', // alternative page bg
          'gray-100': '#fbfcfe', // page bg
          'blue-700': '#0064fe', // primary/acccent
          'blue-300': '#e9f3ff', // primary-muted
        },
        // peach
        pch: {},
        // carbon
        cbn: {
          100: '#D6E2ED', // text color
          200: '#A6A9AB', // inactive text in button and in input, also placeholder text
          500: '#3E4345', // button and input bg, overlay bg (overlay, not modal or anything that can have atomic elements in it)
          600: '#353839', // button pressed or focused, input focused
          700: '#2B2C2D', // card, section bg, separator color for bg color #500
          800: '#1B1C1D', // background
          900: '#101111', // overflow bg
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
