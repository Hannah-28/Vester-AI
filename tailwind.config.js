/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#39ACAC',
          dark: '#2C698D',
        },
        secondary: {
          light: '#FFFFFF',
          DEFAULT: '#0f1624',
          dark: '#000000',
        },
      },
      fontSize: {
        small: '0.5em',
        DEFAULT: '1.5em',
        large: '2em',
        extra: '2.5em',
      },
    },
  },
  plugins: [],
};
