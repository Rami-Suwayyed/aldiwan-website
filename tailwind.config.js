/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#361F13', // Dark brown - primary visual identity color
        secondary: {
          light: '#F5E6D3', // Warm cream - inspired by traditional architecture
          dark: '#4A2E1F', // Darker brown for secondary
        },
        accent: {
          red: '#CD5C5C', // Indian red - inspired by traditional tiles
          gold: '#DAA520', // Goldenrod - traditional gold accents
        },
        text: {
          heading: '#2C1810', // Dark brown
          body: '#4A3429', // Medium brown
          light: '#8B7355', // Light brown
        },
        background: {
          default: '#FFFEF7', // Off-white with warm undertone
          warm: '#FDF8F0', // Warm background
        },
        neutral: {
          100: '#F7F3ED',
          200: '#E8E0D1',
          300: '#D4C4AB',
          400: '#B8A082',
          500: '#9C7C5C',
          600: '#7A5D3F',
          700: '#5A4330',
          800: '#3D2E22',
          900: '#2C1810',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', '1.2'],
        'h2': ['36px', '1.2'],
        'h3': ['24px', '1.2'],
        'body': ['16px', '1.6'],
        'sm': ['14px', '1.6'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '32px',
        'xl': '64px',
      },
      borderRadius: {
        'custom': '16px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(54,31,19,0.9), rgba(74,46,31,0.8))',
        'primary-gradient': 'linear-gradient(135deg, #361F13, #4A2E1F)',
        'secondary-gradient': 'linear-gradient(135deg, #CD5C5C, #DAA520)',
        'warm-gradient': 'linear-gradient(135deg, #FDF8F0, #F5E6D3)',
        'moroccan-pattern': 'radial-gradient(circle at 50% 50%, rgba(54,31,19,0.1) 2px, transparent 2px)',
        'geometric-pattern': 'conic-gradient(from 0deg at 50% 50%, rgba(54,31,19,0.1) 0deg, transparent 120deg, rgba(205,92,92,0.1) 240deg, transparent 360deg)',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(54,31,19,0.15)',
        'custom': '0 4px 12px rgba(0,0,0,0.1)',
        'hover': '0 8px 30px rgba(54,31,19,0.2)',
      },
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}