import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const slimWidth = 700;
export const headerHeight = 64;
export const footerHeight = 100;
export const topMargin = 32;

const useStyles = makeStyles({
  root: {
    marginTop: topMargin,
    height: "100%",
    width: "100%",
    textAlign: "center",
    minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Viktor Enzell
      </Typography>
      <Typography variant="h3" gutterBottom>
        About me
      </Typography>
      <Typography gutterBottom>
        Software Developer based in Stockholm with a Bachelor's degree
        in Computer Science from Uppsala University and a Master's degree in
        Computer Science from KTH.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Contact
      </Typography>
      <Typography gutterBottom>
        Find me on LinkedIn, Github and Huggingface.
      </Typography>
    </div>
  );
}
