/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'font-family' : "'Chakra Petch', sans-serif"
    }
  },
  plugins: [require("daisyui")],
}

