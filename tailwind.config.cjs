/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iran: ["Iran Nastaliq"],
        roboto: ["Roboto"],
      },
      colors: {
        "main-color": "#3B2D0D",
        "secondary-color": "#4E3C11",
      },
      blur: {
        xs: "1.5px",
      },
      screens: {
        xs: "400px",
        "2xs": "390px",
      },
    },
  },
  plugins: [],
};
