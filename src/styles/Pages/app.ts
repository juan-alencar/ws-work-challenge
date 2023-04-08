import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
});

export const Sidebar = styled("div", {
  backgroundColor: "$white",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "4rem",

  h1: {
    color: "$orange100",
    fontWeight: 500,
    lineHeight: 0.5,

    span: {
      fontWeight: "bold",
      color: "$blue200",
    },
  },

  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",

    p: {
      color: "$gray400",
      fontSize: "$md",
    },
  },

  "@media(max-width: 768px)": {
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: 0,
    zIndex: 99,

    h1: {
      display: "none",
    },

    ul: {
      flexDirection: "row",
      gap: 0,
      justifyContent: "space-around",
      padding: "0.5rem 0",

      p: {
        display: "none",
      },
    },
  },
});

export const List = styled("li", {
  variants: {
    active: {
      true: {
        backgroundColor: "$neutral",
        a: {
          svg: {
            color: "$orange100",
          },
          color: "$blue100",
        },
      },
    },
    disabled: {
      true: {
        a: {
          svg: {
            color: "$gray200",
          },
          color: "$gray200",
          cursor: "not-allowed",
        },

        "&:hover": {
          backgroundColor: "white",
        },
      },
    },
  },

  display: "flex",
  borderRadius: "1rem",
  a: {
    padding: "1rem 4rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    color: "$blue200",
    textDecoration: "none",
    fontWeight: "bold",
  },

  "&:hover": {
    backgroundColor: "$neutral",
  },

  "@media(max-width: 768px)": {
    a: {
      padding: "0.5rem",
      flexDirection: "column",
      minWidth: 64,
    },
  },
});
