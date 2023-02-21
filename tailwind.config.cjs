/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./resources/js/react/**/*.{js,ts,jsx,tsx}", "/resources/views/index.blade.php"],
  theme: {
    extend: {
      screens: {
        "xxsm": "420px",
        "xsm": "576px",
      },
      animation: {
        "slideIn": "slideIn 5s ease-in-out forwards ",
      },
      keyframes: {
        'slideIn': {
          '0%': {
            opacity: "0",
            transform: 'translateY(-32px)',
          },
          '33%': {
            opacity: "1",
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: "0",
            transform: 'translateY(-32px)',
          },
        },
      },
      textColor: ({ theme }) => ({
        regular: theme("colors.stone.900/ 1"),
        inverted: theme("colors.slate.100/ 1"),
        muted: theme("colors.gray.500/ 1"),
        primary: theme("colors.teal.500"),
        accent: theme("colors.teal.400"),
      }),
      backgroundColor:
        ({ theme }) => ({
          btn: {
            fill: theme("colors.teal.500"),
            active: theme("colors.teal.500"),
            hover: theme("colors.teal.400"),
            muted: theme("colors.gray.300"),
          },
          primary: theme("colors.teal.500"),
          accent: theme("colors.teal.400"),

        }),
      boxShadowColor: ({ theme }) => ({
        btn: {
          fill: theme("colors.teal.500/ 70%"),
          active: theme("colors.teal.400/ 70%"),
          accent: theme("colors.teal.500/30%"),
          muted: theme("colors.gray.300/ 70%"),
        }
      }),
      borderColor:
        ({ theme }) => ({
          btn: {
            fill: theme("colors.teal.500/ 1"),
            active: theme("colors.teal.400/ 1"),
            muted: theme("colors.gray.300/ 1"),
          }
        }),
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('tailwindcss-brand-colors'), require('tailwindcss-debug-screens'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
