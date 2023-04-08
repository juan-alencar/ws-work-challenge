import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      offWhite: "#F9F9F9",
      neutral: "#F1F9FD",

      gray100: "#E1E4E6",
      gray200: "#A9AFB2",
      gray400: "#7C858A",
      gray600: "#323238",
      gray800: "#202324",
      gray900: "#121314",

      orange100: "#FFA933",
      orange200: "#FF9300",

      blue100: "#337799",
      blue200: "#265973",
      blue300: "#193C4D",
    },

    fontSizes: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
