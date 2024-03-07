/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cagliostro: ['Cagliostro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poiretOne: ['Poiret One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
    },
      theme: {
        screens: {

          'sm': '640px',
    
          'md': '768px',
    
          'lg': '1024px',
    
          'xl': '1280px',
    
          '2xl': '1536px',
          
        }
      }
    },
  },
  plugins: [],  
}