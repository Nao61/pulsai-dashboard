/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales avec variantes
        primary: {
          DEFAULT: '#3590E3',
          light: '#5BA8EC',
          dark: '#2A7AC9',
        },
        secondary: {
          DEFAULT: '#BAF09D',
          light: '#D0F5B8',
          dark: '#9FD77E',
        },
        // Palette neutre complète
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Couleurs de statut
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'intercom': '0 0 0 1px rgba(0,0,0,.05), 0 1px 3px rgba(0,0,0,.1), 0 6px 16px rgba(0,0,0,.1)',
        'intercom-hover': '0 0 0 1px rgba(0,0,0,.05), 0 2px 4px rgba(0,0,0,.1), 0 12px 24px rgba(0,0,0,.12)',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}