/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        ink: '#111827',
        muted: '#6B7280',
        surface: '#F9FAFB',
        border: '#E5E7EB',
        accent: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        night: '#0F172A',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#111827',
            a: {
              color: '#2563EB',
              '&:hover': { color: '#1D4ED8' },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
