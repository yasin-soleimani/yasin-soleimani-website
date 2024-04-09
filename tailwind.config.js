/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    borderColor: false,
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom_black: "#18181B",
        custom_gray: "#F4F4F5",
        custom_text: "#A1A1AA",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["active"],
    },
  },

  plugins: [],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
