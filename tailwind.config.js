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
          navy: '#102B59',
          royal: '#1769AA',
          yellow: '#FFD51B',
          yellowHover: '#F0C50B',
          lightGrey: '#F5F7FB',
          darkBlue: '#0A1D3C',
          accentBlue: '#2085D8',
          slate: '#334155',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 43, 89, 0.08), 0 2px 6px -1px rgba(16, 43, 89, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(16, 43, 89, 0.16), 0 4px 12px -2px rgba(16, 43, 89, 0.08)',
        'badge': '0 2px 8px rgba(255, 213, 27, 0.3)',
      }
    },
  },
  plugins: [],
}
