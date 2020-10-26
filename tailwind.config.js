const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        // sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        // serif: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "#454545",
        textDimmed: "#7B7B7B",
      },
    },
  },
  variants: {},
  plugins: [],
};
