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
          DEFAULT: '#036990',
          light: '#0487B8',
          dark: '#024B6B',
        },
        accent: {
          DEFAULT: '#9E212D',
          hover: '#B92837',
          light: '#C84D58',
        },
        brand: {
          blue: '#036990',
          red: '#9E212D',
        }
      }
    }
  },
  plugins: [],
}
