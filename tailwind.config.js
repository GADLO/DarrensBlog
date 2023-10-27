import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    autoprefixer: {},
    tailwindcss: {},
  ],
}

