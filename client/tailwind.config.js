/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        sand: '#E8DCC8',
        terracotta: '#C4714A',
        rust: '#A0522D',
        sage: '#7A9E7E',
        'warm-brown': '#5C3D2E',
        'off-white': '#FFFDF9',
        'muted-text': '#7A6A5A',
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
        card: '0 4px 20px rgba(92, 61, 46, 0.08)',
        'card-hover': '0 8px 32px rgba(92, 61, 46, 0.14)',
      },
    },
  },
  plugins: [],
}
