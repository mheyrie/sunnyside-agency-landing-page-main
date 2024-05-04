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
      brightBlue: '#3EBEFF',
    }, 
    screens:{
      sm: '480px',
      md: '850px',
      lg: '1440px'
    }
    },
  },
  plugins: [],
}