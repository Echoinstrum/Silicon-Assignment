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
      screens: { // breakpoints
        sm: "576px",
        md: '768px',
        lg: '1320px',
      },
      colors: {
        dark: "#0B0F19",
        primary: "#6366F1",
        white: "#ffffff",
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
        // Du kan lägga till fler färger här om det behövs
      },
      container: { // Anpassad container
        center: true,
        padding: "1rem",
        screens: { 
          sm: "100%",
          md: "768px",
          lg: "1320px",
        }
      },
      fontSize: {
        "h1": ["40px", { lineHeight: "1.2", fontWeight: "bold" }],
        "h2": ["32px", { lineHeight: "1.3", fontWeight: "bold" }],
        "h3": ["28px", { lineHeight: "1.3", fontWeight: "bold" }],

        //Responsive sizes
        // Removed fontWeight: extrabold property not getting it working. using inline style instead
        "h3-sm": ["20px", { lineHeight: "1.3"}],
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(0deg, rgba(99,102,241,0.099) 0%, rgba(218,70,239,0.05) 42%, rgba(241,244,253,0.07) 83%)"
      },
      gridTemplateAreas: {
        // Definiera layouten
        'layout': [
          "header header",
          "content images",
        ],
        "desktop-layout": [
          "header", "images",
          "content", "images"
        ],
        "info-lg-layout": [
          "info-header", "accordion",
          "contact", "accordion"
        ],
        "info-md-layout": [
          "info-header",
          "accordion",
          "contact"
        ],
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),  
    require('@savvywombat/tailwindcss-grid-areas'),
    function ({ addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme("colors.primary"),  
          color: theme("colors.white"), 
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': { 
            backgroundColor: '#f3f3f3', 
          },
        },
        '.btn-black': {
          backgroundColor: theme("colors.dark"),
          color: theme("colors.white"),
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          "&:hover": {
            backgroundColor: theme("colors.primary")
          },
        },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.grid-info-lg-layout': {
          'display': 'grid',
          'grid-template-columns': '400px 1fr',
          'grid-template-areas': `"info-header accordion" "contact accordion"`,
        },
        '.grid-info-md-layout': {
          'display': 'grid',
          'grid-template-columns': '1fr',
          'grid-template-areas': `"info-header" "accordion" "contact"`,
        },
        '.info-header': {
          'grid-area': 'info-header',
        },
        '.accordion': {
          'grid-area': 'accordion',
        },
        '.contact': {
          'grid-area': 'contact',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}
