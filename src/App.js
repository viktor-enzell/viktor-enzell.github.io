import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid, CssBaseline } from "@mui/material";
import {grey} from "@mui/material/colors";
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
    primary: grey,
    background: {
      default: "white",
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
