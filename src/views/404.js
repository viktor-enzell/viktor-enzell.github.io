import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { headerHeight, footerHeight, topMargin } from "./Home";

const useStyles = makeStyles({
  root: {
    marginTop: topMargin,
    height: "100%",
    width: "100%",
    minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
  },
  textWrapper: {
    marginTop: "20vh",
  },
  statusCode: {
    fontSize: 54,
    textAlign: "center",
    marginBottom: 8,
  },
});

export default function Fallback() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}></div>
      <Typography variant="h2" component="h1" className={classes.statusCode}>
        404
      </Typography>
    </div>
  );
}
