/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1A5276', // deep blue
          600: '#1565C0',
          700: '#0D47A1',
          800: '#0A3871',
          900: '#072140',
        },
        secondary: {
          50: '#E1F5FE',
          100: '#B3E5FC',
          200: '#81D4FA',
          300: '#4FC3F7',
          400: '#29B6F6',
          500: '#2E86C1', // medium blue
          600: '#0288D1',
          700: '#0277BD',
          800: '#01579B',
          900: '#014377',
        },
        accent: {
          50: '#FFF5F2',
          100: '#FFE9E2',
          200: '#FFD4C6',
          300: '#FFB59D',
          400: '#FF9776',
          500: '#FF7F50', // coral
          600: '#FF5733',
          700: '#E8391A',
          800: '#C12F17',
          900: '#9A2A17',
        },
        sand: {
          50: '#FEFBF7',
          100: '#FEF6EA',
          200: '#FDF0DC',
          300: '#F5DEB3', // sand
          400: '#F0D19A',
          500: '#E4C580',
          600: '#D4B363',
          700: '#C19D45',
          800: '#A0802F',
          900: '#7A6023',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};