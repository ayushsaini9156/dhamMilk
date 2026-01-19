/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dairy: {
          cream: '#FFF9F0',
          milk: '#FFFBF5',
          butter: '#FFE5B4',
          lightCream: '#FFFEF9',
          peach: '#FFE4D6',
          vanilla: '#F3E5AB',
          ivory: '#FFFFF0',
        }
      },
      backgroundImage: {
        'cream-gradient': 'linear-gradient(135deg, #ffffff 0%, #FFF9F0 50%, #ecfdf5 100%)',
        'nature-fresh': 'linear-gradient(to right, #d1fae5, #FFE4D6)',
        'soft-dairy': 'linear-gradient(to bottom, #ffffff, #ecfdf5, #FFF9F0)',
        'hero-gradient': 'linear-gradient(135deg, #6ee7b7 0%, #34d399 50%, #FFE4D6 100%)',
        'warm-glow': 'linear-gradient(135deg, #fef9c3 0%, #fed7aa 50%, #a7f3d0 100%)',
        'milk-splash': 'radial-gradient(circle at 50% 50%, #FFFBF5 0%, #ecfdf5 50%, #d1fae5 100%)',
        'creamy-swirl': 'conic-gradient(from 180deg at 50% 50%, #FFFBF5 0deg, #FFF9F0 120deg, #ecfdf5 240deg, #FFFBF5 360deg)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
        '4xl': '128px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
