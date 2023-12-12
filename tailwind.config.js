/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(-200px)' },
          '50%': { transform: 'translateY(0px)' },
          '80%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-200px)'},
        }},
        animation: {
          'appear': 'appear 3s ease-in-out forwards',
        },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#fff',
        secondary: '#F5F5F5',
        blackButton: '#000',
        redButton: '#DB4444',
        redButtonHover: '#E07575',
        greenButtonColor: '#00FF66',
      },
      fontFamily: {
        base: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}