/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          primary: '#FFE4E1',
          secondary: '#FFC0CB',
          accent: '#FFB6C1',
          background: '#FFF0F5',
          interactive: '#FF69B4',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
        'gradient-y': 'gradient-y 6s ease infinite',
      },
      fontFamily: {
        cursive: ['Parisienne', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};