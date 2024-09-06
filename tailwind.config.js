/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile:'1000px',
       
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
      backgroundSize: {
        '200%': '200% 100%',
      },
      backgroundPosition: {
        '-100%': '-100%',
      },
    
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover-custom-border-shadow': {
          '@apply hover:border-b-4 hover:border-r-4 hover:border-[#ebcdb0] hover:shadow-lg': {},
        },
        '.hover-heading': {
          '&:hover': {
            '-webkit-text-stroke-width': '3px', // Set text stroke width on hover
            '-webkit-text-stroke-color': 'var(--secondary)', // Set text stroke color on hover
            'color': 'var(--white)', // Set text color on hover
            'transition': 'all 0.3s'
          },
        },
      };

      addUtilities(newUtilities, ['hover']);
    },
  
  
  ]
}


//ustom Utility (hover-custom-border-shadow):
// The custom utility class .hover-custom-border-shadow is created using the @apply directive, which combines multiple hover-related classes into one.
// The @apply directive in the plugin allows you to bundle these hover states into a single class.
