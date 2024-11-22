/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // If using AppRouter
    "./pages/**/*.{js,ts,jsx,tsx}", // If using PagesRouter
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarycolor: "#FF4300",
        secondarycolor: "#C98383",
        thirdcolor: "#E5A159",
        bgcolor: "#1a1a36"
      },
      backgrounImage: {
        grid: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22%3E%3Crect width=%2220%22 height=%2220%22/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [ ],
};
