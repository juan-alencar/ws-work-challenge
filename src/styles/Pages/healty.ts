import { styled } from "..";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: "4rem",

  width: "100%",
  maxWidth: 1000,
  margin: "0 auto",
  padding: "4rem 1rem",

  "@media(max-width: 768px)": {
    padding: "4rem 2rem",
  },
});

export const CardLg = styled("div", {
  display: "flex",
  width: "100%",
  gap: "1.5rem",

  img: {
    objectFit: "cover",
    objectPosition: "center",
    width: "60%",
    borderRadius: "1rem",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",

    h1: {
      fontSize: "$xl",
      fontWeight: "900",
    },
    h2: {
      fontSize: "$lg",
      fontWeight: "900",
      color: "$orange200",
    },
    p: {
      fontSize: "$md",
      color: "$gray400",
    },
  },

  "@media(max-width: 768px)": {
    flexDirection: "column",
    div: { gap: "1rem" },

    img: {
      width: "100%",
    },
  },
});
export const CardMd = styled("div", {
  display: "flex",
  width: "100%",
  position: "relative",
  backgroundColor: "$white",
  borderRadius: "1rem",

  span: {
    position: "absolute",
    right: 0,
    top: 0,

    padding: "0.5rem 1rem",
    backgroundColor: "$blue100",
    color: "$white",
    fontWeight: "bold",
    borderRadius: "0 1rem",
    fontSize: "$md",
    lineHeight: 1,
  },

  img: {
    objectFit: "cover",
    objectPosition: "center",
    width: "30%",
    maxWidth: "200px",
    borderRadius: "1rem 0 0 1rem",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "1.5rem",

    h1: {
      fontSize: "$xl",
      fontWeight: "900",
    },
    h2: {
      fontSize: "$lg",
      fontWeight: "900",
      color: "$orange200",
    },
    p: {
      fontSize: "$md",
      color: "$gray400",
    },
    div: {
      display: "flex",
      gap: "0.75rem",

      padding: 0,
    },
  },

  "@media(max-width: 400px)": {
    span: {
      padding: "0.25rem 1rem",
      fontSize: "$sm",
    },
  },
});

export const CardSm = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "0.5rem",

  img: {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    borderRadius: "1rem",
    maxHeight: 120,
  },

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "0.5rem",

    h1: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "$md",
      fontWeight: "900",
      span: {
        color: "$orange200",
      },
    },
    h2: {
      fontSize: "$lg",
      fontWeight: "900",
      color: "$orange200",
    },
    p: {
      fontSize: "$md",
      color: "$gray400",
    },
  },
});

export const Carousel = styled("div", {
  display: "flex",
});

export const Section = styled("section", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: "2rem",

  "@media(max-width: 768px)": {
    flexDirection: "column",
    justifyContent: "inherit",
    div: { gap: "1rem" },
  },
});
