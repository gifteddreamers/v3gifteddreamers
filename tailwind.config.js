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
          DEFAULT: '#0D729C',
          light: '#108BC7', // Lighter shade
          dark: '#0A5A7D', // Darker shade
        },
        accent: {
          DEFAULT: '#0D729C',
          hover: '#108BC7', // Lighter shade for hover
          light: '#0A5A7D',
        },
        brand: {
          blue: '#0D729C',
          red: '#A22131',
        }
      }
    }
  },
  plugins: [],
}
