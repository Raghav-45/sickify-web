/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/*/**.tsx', './components/*/**.tsx'],
  theme: {
    extend: {
      extend: {
        colors: {
          dark: '#121212', // My Colors
          Darkest: '#191414', // My Colors
          light: '#282828', // My Colors
          lightest: '#B3B3B3', // My Colors
        },
      },
    },
  },
  plugins: [],
}
