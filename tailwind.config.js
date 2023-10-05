/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      primary: "#FFB800",
      secondary: "##1F1F1F"
    },
    backgroundColor:{
      primary: "#FFB800",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};