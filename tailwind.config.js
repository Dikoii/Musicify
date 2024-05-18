/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        'Rich-Black': '#0c141b',
        'Dodger-Blue': '#111827',
        Gold: '#FFD700',
        'Light-Gray': '#CCCCCC',
        Silver: '#C0C0C0',
      },
      keyframes: {
        wave: {
          '0%': { height: '17px' },
          '50%': { height: '25px' },
          '100%': { height: '17px' },
        },
      },
      animation: {
        wave: 'wave 1s linear infinite',
      },
      borderRadius: {
        wave: '10px 10px 0px 0px',
      },
    },
  },
  plugins: [],
};
