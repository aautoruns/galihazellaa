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
        primary: '#B0233C',
        secondary: '#64748b',
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
