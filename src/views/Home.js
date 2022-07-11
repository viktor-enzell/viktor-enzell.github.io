import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const slimWidth = 700;
export const headerHeight = 64;
export const footerHeight = 100;
export const topMargin = 64;
export const smBreakpointWidth = 600;

const useStyles = makeStyles({
  root: {
    marginTop: topMargin,
    height: "100%",
    width: "100%",
    textAlign: "center",
    minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
  },
  contactList: {
    maxWidth: slimWidth,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "0px",
  },
  contactListIcon: {
    color: "black",
  },
  verticalDividerContainer: {
    position: "relative",
  },
  verticalDivider: {
    position: "absolute",
    height: "100%",
  },
  horizontalDivider: {
    width: "100%",
    marginTop: "24px",
  },
  huggingfaceIcon: {
    fontSize: "23px",
    filter: "grayscale(100%)",
  },
});

export default function Home() {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Typography variant="h1" gutterBottom>
            Software
            <br />
            Developer
          </Typography>
          <Typography gutterBottom>
            Software Developer based in Stockholm with a Bachelor's degree in
            Computer Science from Uppsala University and a Master's degree in
            Computer Science from KTH.
          </Typography>
        </Grid>
        {width > smBreakpointWidth ? (
          <div className={classes.verticalDividerContainer}>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.verticalDivider}
            />
          </div>
        ) : (
          <Divider className={classes.horizontalDivider} />
        )}
        <Grid item xs={12} sm={4}>
          <List
            component="nav"
            aria-label="contact links"
            className={classes.contactList}
          >
            <ListItem
              button
              component="a"
              target="_blank"
              href="https://linkedin.com/in/viktor-enzell-66967913b/"
            >
              <ListItemIcon className={classes.contactListIcon}>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component="a"
              target="_blank"
              href="https://github.com/viktor-enzell"
            >
              <ListItemIcon className={classes.contactListIcon}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component="a"
              target="_blank"
              href="https://huggingface.co/viktor-enzell"
            >
              <ListItemIcon className={classes.contactListIcon}>
                  <span role="img" className={classes.huggingfaceIcon}>🤗</span>
              </ListItemIcon>
              <ListItemText primary="Huggingface" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
