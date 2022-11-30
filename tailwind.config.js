/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Audi_Bold: ['audi_bold', 'sans-serif'],
        Audi_Normal: ['audi_normal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
