/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#007BBA',
          600: '#0369a1',
          700: '#004F74',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundImage: {
        'elegant-gradient': 'linear-gradient(315deg, hsla(216, 100%, 88%, 1) 0%, hsla(280, 100%, 89%, 1) 25%, hsla(319, 86%, 91%, 1) 50%, hsla(319, 100%, 92%, 1) 75%, hsla(0, 0%, 100%, 1) 100%)',
        'elegant-gradient-animated': 'linear-gradient(315deg, hsla(216, 100%, 88%, 1) 0%, hsla(280, 100%, 89%, 1) 25%, hsla(319, 86%, 91%, 1) 50%, hsla(319, 100%, 92%, 1) 75%, hsla(0, 0%, 100%, 1) 100%)',
      }
    },
  },
  plugins: [],
};