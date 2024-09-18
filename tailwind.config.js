/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      screens: { //breakpoints
        sm: "576",
        md: '720px',
        lg: '1320px',
      },
      colors: {
        dark: "#0B0F19",
        primary: "#6366F1",
        gray: "#",
        white: "#ffffff"
      },
      container: { //Got help from ChatGPT how to set custom value to the tailwind "container-class".
        center: true,
        padding: "1rem",
        screens: { 
          sm: "100%",
          md: "768px",
          lg: "1320px",
        }
      },
      fontSize: {
        "h1": ["40px", {lineHeight: "1.2", fontWeight: "bold"}],
        "h2": ["32px", {lineHeight: "1.3", fontWeight: "bold"}],
        "h3": ["28px", {lineHeight: "1.3", fontWeight: "bold"}],
      },
      colors: {
        gray: {
          100: '#F3F6FF',
          200: '#EFF2FC',
          300: '#E2E5F1',
          400: '#D4D7E5',
          500: '#B4B7C9',
          600: '#9397AD',
          700: '#565973',
          800: '#33354D',
          900: '#0B0F19',
        },
        primary: '#6366F1',
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(360deg, rgba(99,102,241,0.09976798143851506) 0%, rgba(218,70,239,0.05) 42%, rgba(241,244,253,0.07) 83%)"
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),  

    function ({ addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme("colors.primary"),  
          color: theme("colors.white"), 
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          '&:hover': { 
            backgroundColor: '#f3f3f3', 
          },
        },
      });
    }
  ]

}
