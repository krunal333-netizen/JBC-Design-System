/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jbc: {
          cyan: 'var(--jbc-cyan)',
          gold: 'var(--jbc-gold)',
          dark: '#0B0E14',
          surface: '#161B22',
          light: '#F8F9FA',
          lightSurface: '#FFFFFF',
          error: '#DA3633',
          success: '#2EA043'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        'jbc-1': '4px',
        'jbc-2': '8px',
        'jbc-4': '16px',
        'jbc-8': '32px',
      }
    },
  },
  plugins: [],
}