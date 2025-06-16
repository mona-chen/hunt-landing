/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC5500',
          light: '#FF7A33',
          dark: '#B8470A'
        },
        secondary: {
          DEFAULT: '#7E3107',
          light: '#A64A1A',
          dark: '#5A2205'
        },
        accent: {
          DEFAULT: '#FF8C42',
          light: '#FFA366',
          dark: '#E6732A'
        },
        background: {
          DEFAULT: '#FEEFE6',
          light: '#FFF8F3',
          dark: '#F5E0D3'
        },
        burnt: {
          50: '#FFF8F3',
          100: '#FEEFE6',
          200: '#FDD5C4',
          300: '#FCBBA2',
          400: '#FA875E',
          500: '#CC5500',
          600: '#B8470A',
          700: '#A63D0F',
          800: '#7E3107',
          900: '#5A2205'
        }
      },
      fontFamily: {
        primary: ['DM Mono', 'monospace'],
        secondary: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};