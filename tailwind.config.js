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
          "primary": "#2B3674",
          "dark": "#1E1E1E",
          "disabled": "#A3AED0",
          "gray": "#8F9BBA",
          "background": "#F4F7FE",
          "cloud": "#96A3B0",
          "secondary": "#E5E8EB",
          "terteriary": "#F5F5F5",
        },
        "special": {
          "danger": "#EE5D50",
          "warning": "#FFAB00",
          "success": "#34A853",
          "info": "#4285F4",
          "btn": "#4318FF",
        },
      },
      borderRadius: {
        "5": "5px",
        "10": "10px",
        "14": "14px",
        "20": "20px",
      },
      fontSize: {
        "tiny": "13px",
      }
    },
  },
  plugins: [],
}
