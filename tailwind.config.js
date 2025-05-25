/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for class names
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#2196f3",   // Blue
        secondary: "#f44336", // Red
      },
      boxShadow: {
        'bottom-right': '8px 8px 20px 2px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
