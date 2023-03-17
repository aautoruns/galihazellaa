/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', 'en.html', './node_modules/flowbite/**/*.js'],
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
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1320px',
      },
      fontSize: {
        xxs: '1px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
