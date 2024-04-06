/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B3C8CF',
        'secondary': '#BED7DC',
        'pale': '#F1EEDC',
        'cream': '#E5DDC5'
      }
    },
  },
  plugins: [],
}

