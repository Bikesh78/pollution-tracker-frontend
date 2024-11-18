import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./styles.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: "Arial, sans-serif",
  color: "#333",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  // backgroundColor: "#f4f4f9",
  backgroundColor: theme.colors.primary,
});

globalStyle("p,h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: "normal",
  lineHeight: 1.4,
});
