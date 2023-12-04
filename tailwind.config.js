/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main": {
          "primary": "2B3674",
          "disabled": "#A3AED0",
          "background": "#F4F7FE",
        },
        "special": {
          "danger": "#EE5D50",
          "success": "#34A853",
          "info": "#4285F4",
          "btn": "#4318FF",
        },
      },
    },
  },
  plugins: [],
}
