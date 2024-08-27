/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile:'1000px'
      },
      colors: {
        'primary':'var(--primary)',
        'secondary':'var(--secondary)',
        'light':'var(--white)',
        'dark':'var(--black)',
        'border-dimmed':'var(--border-dimmed)',
      },
      backgroundImage: {
        'custome-linear-one': 'linear-gradient(to right, #df9d33, #ebcdb0, #fbcb6e)',
      },
    },
  },
  plugins: [],
}
