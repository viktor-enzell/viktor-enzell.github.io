import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "100px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Footer() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}
