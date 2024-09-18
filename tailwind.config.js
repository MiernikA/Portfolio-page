/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#000000",
      secondary: "#b3b3b3",
    },
    boxShadow: {
      card: "0px 2px 60px -30px #f78c0a",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
      "section-pattern": "url('/src/assets/sectionbg.jpg')",
    },
  },
};
export const plugins = [];
