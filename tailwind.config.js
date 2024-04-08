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
        'header': '3rem',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'coustard': ['Coustard', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive'],
        'reddit': ['Reddit Mono', 'cursive']
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(10deg)" }
        },
        check: {
          "0%": { transform: 'scale(1)' },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        wiggle: "wiggle 350ms ease-in-out",
        check: "check 300ms linear",
      },
    },
  },
  plugins: [],
}

