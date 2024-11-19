import { createGlobalTheme, keyframes, style } from "@vanilla-extract/css";

const breakpoints = {
  sm: "600px",
  md: "900px",
  lg: "1200px",
};

export const theme = createGlobalTheme(":root", {
  colors: {
    primary: "#e0f2fe",
    secondary: "#2ecc71",
    background: "#f4f4f9",
    text: {
      dark: "#333",
      medium: "#555",
      soft: "#4A90E2",
    },
    border: "#ddd",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    headingFontSize: "24px",
  },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  maxWidth: "1200px",
  marginInline: "auto",
});

export const header = style({
  textAlign: "center",
  paddingBlock: theme.spacing.large,
  fontWeight: 600,
});

export const cardGrid = style({
  display: "flex",
  gap: theme.spacing.large,
  marginBlock: theme.spacing.medium,
  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

export const card = style({
  background: "#fff",
  flexGrow: 1,
  borderRadius: "32px",
  color: "#0c4a6e",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
});

export const cardHeader = style({
  background: "#38bdf8",
  color: "#fff",
  padding: theme.spacing.large,
});

export const cardSubHeader = style({
  fontSize: "14px",
  fontWeight: 400,
});

export const cardTitle = style({
  fontSize: "24px",
  color: "white",
  fontWeight: 700,
  lineHeight: 1.8,
  selectors: {
    [`.weather-card &`]: {
      fontWeight: 700,
    },
  },
});

export const cardFooter = style({
  backgroundColor: "#f9fafb",
  padding: "16px",
});

export const cardContent = style({
  padding: theme.spacing.large,
  marginBottom: "auto",
});

export const cardSubtitle = style({
  fontWeight: 600,
  fontSize: "14px",
});

export const flexBetween = style({
  display: "flex",
  justifyContent: "space-between",
});

export const chartContainer = style({
  width: "100%",
  height: "450px",
  background: "white",
  padding: "32px",
  borderRadius: "8px",
});

export const responsiveChartContainer = style({
  marginBlock: "8px",
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loaderContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
});

export const spinner = style({
  width: "50px",
  height: "50px",
  border: "5px solid rgba(0, 0, 0, 0.1)",
  borderTopColor: "black",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});
