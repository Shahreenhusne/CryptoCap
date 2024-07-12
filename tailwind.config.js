/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screns: {
        mobile:'1000px'
      },
      backgroundImage: {
        'custome-linear-one': 'linear-gradient(to right, #df9d33, #ebcdb0, #fbcb6e)',
      },
    },
  },
  plugins: [],
}
