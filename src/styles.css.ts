import { style } from "@vanilla-extract/css";

const breakpoints = {
  sm: "600px",
  md: "900px",
  lg: "1200px",
};

export const container = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  maxWidth: "1200px",
  marginInline: "auto",
});
