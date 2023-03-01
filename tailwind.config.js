/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        dark: '#010101',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
