/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7FF',
        sand: '#EDE5F5',
        terracotta: '#8B5CF6',
        rust: '#6D28D9',
        sage: '#059669',
        'warm-brown': '#2E1065',
        'off-white': '#FDFBFF',
        'muted-text': '#7C6A99',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(46, 16, 101, 0.08)',
        'card-hover': '0 8px 32px rgba(46, 16, 101, 0.14)',
      },
    },
  },
  plugins: [],
}
