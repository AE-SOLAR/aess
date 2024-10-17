const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    backgroundImage: {
      'block': 'url("/usr/src/app/src/static/images/backgrounds/block-bg.png")',
      'circle': 'url("/usr/src/app/src/static/images/backgrounds/circles-bg.png")',
      'inf0': 'url("/usr/src/app/src/static/images/backgrounds/info-bg.png")',
      'panel-flower': 'url("/usr/src/app/src/static/images/backgrounds/panel-flower-bg.png")',
    },
    extend: {
      colors: {
        brandRed: {
          100: "#fdccce",
          200: "#fb999d",
          300: "#fa676b",
          400: "#f8343a",
          500: "#f60109",
          600: "#c50107",
          700: "#940105",
          800: "#620004",
          900: "#310002",
        },
        brandGray: {
          100: "#d3d3d3",
          200: "#a8a8a8",
          300: "#7c7c7c",
          400: "#515151",
          500: "#252525",
          600: "#1e1e1e",
          700: "#161616",
          800: "#0f0f0f",
          900: "#070707",
        },
        brandDarkBG: "#000000",
        brandDarkText: "#FFFFFF",
        brandWhiteBG: "#FFFFFF",
        brandWhiteText: "#000000",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
