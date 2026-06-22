/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#800020', // Burgundy / Deep spicy red
          redDark: '#5c0017', // Deeper spicy red
          redLight: '#A31D34', // Lighter red
          gold: '#C5A059', // Warm champagne/pickle gold
          goldDark: '#A8833E', // Darker gold
          goldLight: '#E8D4A2', // Soft pale gold
          green: '#0C3E1F', // Forest cardamon green
          greenDark: '#082a15', // Deeper green
          cream: '#FCFAF6', // Soft luxury off-white
          clay: '#D27D2D', // Traditional clay pot color
          charcoal: '#1C1917', // Rich warm black
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
