import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    color: "$gray600",
    backgroundColor: "$offWhite",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button, a": {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 400,
    textDecoration: "none",
  },
});
