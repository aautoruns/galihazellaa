/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        alpha: '#B0233C',
        beta: '#808080',
        charlie: '#d1d5db',
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
