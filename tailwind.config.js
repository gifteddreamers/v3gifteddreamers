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
          DEFAULT: '#0891B2', // Darkened from #00B4D8 for WCAG AA contrast (4.5:1+)
          hover: '#06B6D4',
          light: '#67E8F9',
        },
        brand: {
          dark: '#0077B6',
          light: '#0891B2',
        }
      }
    }
  },
  plugins: [],
}
