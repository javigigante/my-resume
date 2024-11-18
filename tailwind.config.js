/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // If using AppRouter
    "./pages/**/*.{js,ts,jsx,tsx}", // If using PagesRouter
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { },
  },
  plugins: [ ],
};
