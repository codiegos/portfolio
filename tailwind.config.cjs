/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      backgroundImage: {
        'linear-soft': "url('assets/images/background.webp')",
        'linear-soft-dark': "url('assets/images/dark-background.webp')",

      },
      keyframes: {
        // waviy: {
        //   '0%,40%,100%': {
        //     'transform': 'translateY(0)',
        //   },
        //   '20%': {
        //     'transform': 'translateY(-20px)'
        //   }
        // },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(-14deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(9deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(8.0deg)' },
          '60%': { transform: 'rotate(-4.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'default-paperplane': {
          '0%, 100%': { transform: 'rotate(-16deg)' },
          '50%': { transform: 'rotate(16deg)' },
        },
        'fast-paperplane': {
          '0%, 100%': { transform: 'rotate(-16deg)' },
          '50%': { transform: 'rotate(16deg)' },
          '10%,30%': { transform: 'translateX(-400px)' },
          '30%,50%': { transform: 'rotate(30deg) translate(-100px,150px)' },
          '50%,90%': { transform: 'translate(-1200px,-600px)' },
        },

      },
      animation: {
        // waviy:'waviy 1s',
        text: 'text 5s ease infinite',
        wave: 'wave 2s linear infinite',
        'default-paperplane': "default-paperplane 1s ease-in-out infinite",
        'fast-paperplane': "fast-paperplane 3s ease-in-out",
      },

    },
  },
  plugins: [],
}

