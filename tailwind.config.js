/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        80: '20rem'
      },
      rotate: {
        '360': '360deg'
      }
    },
    fontFamily: {
      'righteous': ['Righteous']
    },
  },
  plugins: [],
}