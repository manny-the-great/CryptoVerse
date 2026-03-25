import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        bricolage: ['var(--font-bricolage)', 'sans-serif'],
      },
      colors: {
        background: '#050505',
        surface: '#0B0F1A',
        primary: '#ffffff',
        secondary: '#9CA3AF', // text-gray-400
        accent: {
          green: '#10B981', // profit
          red: '#EF4444', // loss
          purple: '#8B5CF6'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, #050505, #0a0a0a, #050505)'
      }
    },
  },
  plugins: [],
}

export default config
