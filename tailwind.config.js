/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown-deep': '#3E1F0E',
        'brown-mid': '#6B3A20',
        'brown-warm': '#8B4E27',
        'sandal': '#C9A87C',
        'sandal-light': '#E4CBA8',
        'sandal-pale': '#F5EDE0',
        'cream': '#FAF6EF',
        'text-dark': '#2A1508',
        'text-muted': '#7A5C40',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(62,31,14,0.10)',
        'card-hover': '0 8px 40px rgba(62,31,14,0.18)',
        'nav': '0 2px 20px rgba(62,31,14,0.12)',
        'btn': '0 4px 16px rgba(62,31,14,0.25)',
      },
    },
  },
  plugins: [],
};
