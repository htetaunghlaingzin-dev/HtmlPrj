/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gradientColorStopPositions: {
        5: '1%',
      }
    },
  },
  plugins: [],
}

