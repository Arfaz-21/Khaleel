/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f0f2f0',
          100: '#dce1db',
          200: '#b5bfb3',
          300: '#8e9d8c',
          400: '#5f7260',
          500: '#465444',
          600: '#3a4638',
          700: '#29372D',
          800: '#1e2a21',
          900: '#141c16',
        },
        ivory: {
          DEFAULT: '#F7F1E6',
          light: '#FFFDF8',
          dark: '#EDE5D4',
        },
        champagne: {
          DEFAULT: '#C5A46D',
          light: '#D4BA8E',
          dark: '#A88B55',
        },
        beige: {
          DEFAULT: '#D8C7AF',
          light: '#E8DDD0',
          dark: '#C2AB8D',
        },
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', 'serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        arabic: ['"Amiri"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
