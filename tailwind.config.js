/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], 
      },
      colors: {
        primary: "#2E7D32", 
        secondary: "#FFFFFF",
        third: "#D19C97",
        background: "#FEFFFF",
      },
    },
  },
  plugins: [],
}

