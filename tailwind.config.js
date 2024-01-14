/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html", "./pages/*html"],
  theme: {
    extend: {
      colors: {
        first: "#F2CEDAAA",
        third: "#150101",
        textcolor: "#D23166",
        color2: "#0F0101",
        color3: "#150101",
      },

      fontFamily: {
        roboto: "Roboto",
      },
    },
    screens: {
      sm: "370px",
      md: "768px",
      lg: "976px",
      xl: "1165px",
    },
  },
  plugins: [],
};
