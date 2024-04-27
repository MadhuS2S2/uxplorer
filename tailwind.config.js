/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports= withMT ({
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
          'spin-slow': 'spin 5s linear infinite',
      },
        animation: {
          'gradient': 'gradient 8s linear infinite',
        },
        keyframes: {
          'gradient': {
            to: { 'background-position': '200% center' },
          }
        },                   
      
  },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
})

