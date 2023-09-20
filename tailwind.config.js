/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      FontRubic: ["Rubik", "sans-serif"],
      FontNews: ["Newsreader", "sans-serif"],
      FontCroissant: ["Croissant One", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
