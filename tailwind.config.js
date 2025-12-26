/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0077B6',
          light: '#0096C7',
          dark: '#023E8A',
        },
        accent: {
          DEFAULT: '#00B4D8',
          hover: '#48CAE4',
          light: '#ADE8F4',
        },
        brand: {
          dark: '#0077B6',
          light: '#00B4D8',
        }
      }
    }
  },
  plugins: [],
}
