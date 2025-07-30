/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // dekker React/TS/JS-prosjekter
    "./index.html", // viktig for Vite eller HTML-filer
  ],
  theme: {
    extend: {
      colors: {
        morningsky: "#FFCD70",
        daysky: "#70D6FF",
        nightsky: "#0D7097",
      },
    },
  },
  plugins: [],
};
