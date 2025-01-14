/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B7A78", 
        secondary: "#3AAFA9",
        accent: "#DEF2F1",
        background: "#FEFFFF",
      },
    },
  },
  plugins: [],
}

