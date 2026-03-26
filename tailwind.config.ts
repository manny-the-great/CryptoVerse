import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
        background: 'var(--background)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
        accent: {
          green: 'var(--accent-green)',
          red: 'var(--accent-red)',
          purple: 'var(--accent-purple)'
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
