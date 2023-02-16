/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#CDCDCD', //them color
        'dusty-gray': '#F4F4F4', // card bg color 
        'dusty-gray-100': '#9C9C9C', // text muted color 
        'dusty-gray-500': '#494949', // text muted color 
        'dusty-gray-900': '#F0F0F0', // text muted color
        'robin-egg-blue': '#00CDD4' //top navigation color
      },
    },
  },
  plugins: []
}