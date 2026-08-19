/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          950: '#030509',
          900: '#06080F',
          850: '#090D18',
          800: '#0D1322',
          750: '#121A2E',
          700: '#1A243D',
          600: '#263554',
        },
        neon: {
          cyan: '#00F2FE',
          emerald: '#05FFA1',
          purple: '#A855F7',
          magenta: '#FF007A',
          amber: '#FFB800',
          blue: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.4)',
        'neon-emerald': '0 0 25px -5px rgba(5, 255, 161, 0.4)',
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'glass-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glass-glow-cyan': '0 8px 32px 0 rgba(0, 242, 254, 0.15), inset 0 0 0 1px rgba(0, 242, 254, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'radar': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
