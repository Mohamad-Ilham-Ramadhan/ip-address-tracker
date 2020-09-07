import { createMuiTheme, lighten } from "@material-ui/core/styles";
import { rubik400, rubik500, rubik700 } from "./fonts";

// <== Colors ==>

const veryDarkGray = "hsl(0, 0%, 17%)";
const darkGray = "hsl(0, 0%, 59%)";

// ### Body Copy

// - Font size (text input): 18px

const customizedTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Rubik, Roboto, Helvetica, Arial, sans-serif",
  },
  palette: {
    neutral: {
      veryDarkGray: veryDarkGray,
      darkGray: darkGray,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [rubik400, rubik500, rubik700],
        body: {
          fontFamily: "Rubik, Roboto, Helvetica, Arial, sans-serif",
          color: veryDarkGray,
        },
        button: {
          fontFamily: "inherit",
        },
      },
    },
  },
});
customizedTheme.typography.h1 = {
  fontSize: "1.6rem",
};
customizedTheme.overrides.MuiContainer = {
  maxWidthLg: {
    [customizedTheme.breakpoints.up("md")]: {
      maxWidth: 1150,
    },
  },
};

export default customizedTheme;
