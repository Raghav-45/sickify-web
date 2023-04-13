/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#121212',
        // 'Darkest': '#191414',
        // 'light': '#282828',
        // 'lightest': '#B3B3B3',
      },
    },
  },
  plugins: [],
}

