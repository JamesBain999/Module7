import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const greenTheme = createTheme({
  palette: {
    primary: { main: "#242ddf", contrastText: "#103934" },
    secondary: { main: "#637382", contrastText: "#743201" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
// in A
