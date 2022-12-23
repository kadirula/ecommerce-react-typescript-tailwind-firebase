/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth:{
        80: '20rem'
      },
    },
    fontFamily: {
      'righteous' : ['Righteous']
    },
  },
  plugins: [],
}