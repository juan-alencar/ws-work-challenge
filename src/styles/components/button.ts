import { styled } from "..";

export const Button = styled("button", {
  variants: {
    size: {
      sm: {
        fontSize: "$sm",
        padding: "0.25rem 1rem",
      },
      md: {
        fontSize: "$md",
        padding: "0.5rem 1.5rem",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },

  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  border: "none",
  backgroundColor: "$orange200",
  textTransform: "uppercase",
  fontWeight: 900,
  color: "$white",

  borderRadius: 8,
  cursor: "pointer",
  transition: "100ms",

  "&:hover": {
    transition: "100ms",
    backgroundColor: "$orange100",
  },
});
