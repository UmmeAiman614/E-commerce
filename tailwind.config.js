/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        'elysian': {
          cream: '#f5f0eb',
          burgundy: '#6b2c3e',
          pink: '#d4a5b8',
        },
      },
    },
  },
  plugins: [],
}

