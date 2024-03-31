const plugin = require("tailwindcss/plugin");

const headingStylesPlugin = plugin(function ({ addBase }) {
  addBase({
    h1: {
      "@apply text-[4.375rem]": {}, //70px
    },
    h2: {
      "@apply text-[3.75rem]": {}, //60px
    },
    h3: {
      "@apply text-[2.5rem]": {}, //40px
    },

    h4: {
      "@apply text-[2.19rem]": {}, //36px
    },

    h5: {
      "@apply text-[1.875rem]": {}, //30px
    },

    h6: {
      "@apply text-[1.56rem]": {}, //25px
    },

    p: {
      "@apply text-[1.44rem]": {}, //23px
    },
  });
});
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      "Noto Sans": ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#33C9F8",
        secondary: "",
        accent: "",
        neutral: "",
        tertiary: "",
        complementary: "",
      },
    },
  },
  plugins: [headingStylesPlugin],
};