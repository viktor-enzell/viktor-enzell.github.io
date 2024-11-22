import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid, CssBaseline } from "@mui/material";
import { green, grey, red, yellow, indigo } from "@mui/material/colors";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./views/Routes";
import { slimWidth } from "./views/Home";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Birch",
    ].join(","),
    h1: {
      fontSize: 60,
      textAlign: "left",
      fontFamily: "Helvetica",
      fontWeight: "bold",
      maxWidth: slimWidth,
      marginRight: "auto",
      marginLeft: "auto",
    },
    h2: {
      fontSize: 28,
      textAlign: "left",
      fontFamily: "Helvetica",
      fontWeight: "bold",
      maxWidth: slimWidth,
      marginRight: "auto",
      marginLeft: "auto",
    },
    h3: {
      fontFamily: "Helvetica",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "left",
      maxWidth: slimWidth,
      marginRight: "auto",
      marginLeft: "auto",
    },
    h4: {
      fontFamily: "Helvetica",
      fontSize: 24,
      textAlign: "left",
      maxWidth: slimWidth,
    },
    body1: {
      fontFamily: "Helvetica",
      textAlign: "left",
      maxWidth: slimWidth,
      marginRight: "auto",
      marginLeft: "auto",
    },
    body2: {
      fontSize: 36,
      textAlign: "center",
      fontFamily: "Helvetica",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
  palette: {
    primary: {
      darker: grey[900],
      dark: grey[700],
      main: "#000",
      light: grey[500],
      contrastText: "#fff",
    },
    secondary: {
      darker: grey[900],
      dark: grey[700],
      main: grey[500],
      light: grey[300],
      contrastText: "#fff",
    },
    error: {
      darker: red[900],
      dark: red[700],
      main: red[500],
      light: red[300],
      contrastText: "#fff",
    },
    warning: {
      darker: yellow[900],
      dark: yellow[700],
      main: yellow[500],
      light: yellow[300],
      contrastText: "#000",
    },
    info: {
      darker: indigo[900],
      dark: indigo[700],
      main: indigo[500],
      light: indigo[300],
      contrastText: "#fff",
    },
    success: {
      darker: green[900],
      dark: green[700],
      main: green[500],
      light: green[300],
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      secondary: grey[100],
      paper: "#fff",
      info: indigo[100],
      light: grey[50],
      dark: grey[900],
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Container maxWidth="md">
          <Grid container>
            <Navbar />
          </Grid>
          <Grid container>
            <Routes />
          </Grid>
          <Grid container>
            <Footer />
          </Grid>
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}
