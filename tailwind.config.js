/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        psAppBlue: {
          DEFAULT: '#04548B'
        },
        psAppYellow: {
          DEFAULT: '#F1D302'
        },
        grayLink: {
          DEFAULT: '#BEBEBE'
        },
        redButtonInput: {
          DEFAULT: '#C1292E'
        }
      }
    }
  },
  plugins: []
}
