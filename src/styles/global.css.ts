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

globalStyle("button", {
  padding: "8px",
  background: "white",
  outline: "transparent",
  border: "transparent",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  borderRadius: "8px",
});

globalStyle("input", {
  padding: "8px",
  fontSize: "12px",
  lineHeight: 1.4,
});
