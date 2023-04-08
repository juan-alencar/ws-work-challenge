import { styled } from "..";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",

  gap: "4rem",

  width: "100%",
  maxWidth: 1000,
  margin: "0 auto",
  padding: "4rem 0rem",

  "@media(max-width: 768px)": {
    padding: "4rem 2rem",
    paddingBottom: "10rem",
  },
});

export const Profile = styled("section", {
  display: "flex",
  gap: "2rem",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

    h1: {
      fontSize: "$xl",
    },
    h2: {
      fontSize: "$lg",
      color: "$orange200",
    },
    p: {
      fontSize: "$md",
      color: "$gray400",
      marginBottom: "1rem",
    },

    ul: {
      display: "flex",
      gap: "0.5rem",

      li: {
        listStyle: "none",
        a: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",

          padding: "0.25rem",
          backgroundColor: "$blue200",
          color: "$white",
        },
      },
    },
  },

  img: {
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "1rem",
  },

  "@media(max-width: 500px)": {
    flexDirection: "column",
  },
});

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  h1: {
    fontSize: "$md",
    color: "$blue300",
  },
  p: {
    color: "$gray600",
    lineHeight: 1.4,
  },

  div: {
    display: "flex",
    gap: "1rem",
  },

  "@media(max-width: 500px)": {
    div: {
      flexWrap: "wrap",
    },
  },
});
