/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: { custom: ["Atkinson"] },
      backgroundSize: {
        visibleSmall: "100% 50%",
        visibleBig: "100% 100%",
        invisibleSmall: "0% 50%",
        invisibleBig: "0% 100%",
      },
      colors: {
        textColor: "#0D1F2D",
        greyColor: "#A9A6A0",
        backgroundColor: "#F8F1EA",
        primaryAccent: "#2AFC98",
        secondaryAccent: "#C1292E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
