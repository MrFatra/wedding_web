/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'danger': '#FF204E'
      },
      fontSize: {
        'header': '2.5rem',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'coustard': ['Coustard', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive'],
        'reddit': ['Reddit Mono', 'cursive']
      }
    },
  },
  plugins: [],
}

