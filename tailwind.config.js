/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        display: ['Poppins']
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  darkMode: 'media',
  plugins: [],
  prefix: 'tw-',
  important: false,
}
