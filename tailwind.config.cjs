/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1115px",
    },
    container: {
      center: true,
    },
    colors: {
      Dark_Cyan: "hsl(180, 29%, 50%)",
      Background: "hsl(180, 52%, 96%)",
      Filter_Tablets: "hsl(180, 31%, 95%)",
      Dark_Grayish_Cyan: "hsl(180, 8%, 52%)",
      Very_Dark_Grayish_Cyan: "hsl(180, 14%, 20%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      spartan: ["'League Spartan', sans-serif"],
    },

    extend: {
      fontSize: {
        small: {
          fontSize: "0.9375rem",
          lineHeight: "1.25rem",
        },
      },
    },
  },
  plugins: [],
}
