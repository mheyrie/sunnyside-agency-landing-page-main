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
        barlow: ['Barlow', 'Fraunces', 'Roboto'],
        sans:['Roboto', 'sans-serif']
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

      neutral:{
        
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