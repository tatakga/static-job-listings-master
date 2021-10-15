const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      desaturatedDarkCyan: "hsl(180, 29%, 50%)",
      bgLightGrayishCyan: "hsl(180, 52%, 96%)",
      lightGrayishCyan: "hsl(180, 31%, 95%)",
      darkGrayishCyan: "hsl(180, 8%, 52%)",
      veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
    },
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
