/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroSection: "url('assets/images/desktop/image-header.jpg')",
      },
      fontFamily: {
        barlow: ['Barlow'],
        fraunces: ['Fraunces'],
        roboto: ['Roboto'],
        sans:['sans-serif']
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },

    colors:{
      primary: {
        brightBlue: '#3EBEFF',
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        graphicDesignText: 'hsl(167, 40%, 24%)',
        photographicText: 'hsl(198, 62%, 26%)',
        footer: 'hsl(168, 34%, 41%)'
      },

      neutral: {
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)'
      }
      
    }, 
    screens:{
      sm: '375px',
      md: '850px',
      lg: '1440px'
    }
    },
  },
  plugins: [],
}