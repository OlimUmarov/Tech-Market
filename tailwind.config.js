/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '2xl': '80rem',
        'xs': '20rem'
      }
    },
  },
  plugins: [],
}