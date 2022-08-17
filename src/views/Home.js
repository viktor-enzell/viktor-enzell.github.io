import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
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
  textContainerSM: {
    paddingRight: "16px",
  },
});

export default function Home() {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={8}
          className={width > smBreakpointWidth && classes.textContainerSM}
        >
          <Typography variant="h1" gutterBottom>
            Software
            <br />
            Developer
          </Typography>
          <Typography gutterBottom>
            Hi, my name is Viktor Enzell.
            <br />
            <br />
            I'm a full stack developer based in Stockholm, passionate about
            building great products that utilize the power of machine learning.
            I have a Master's degree in Computer Science from KTH, where I
            specialized in AI, primarily focusing on natural language processing
            and speech.
            <br />
            <br />
            Check out some of my previous projects in my portfolio or on GitHub
            and Hugging Face. Also, feel free to connect with me on LinkedIn!
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
              <ListItemText primary="GitHub" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component="a"
              target="_blank"
              href="https://huggingface.co/viktor-enzell"
            >
              <ListItemIcon className={classes.contactListIcon}>
                <span
                  role="img"
                  aria-label="hugging face emoji"
                  className={classes.huggingfaceIcon}
                >
                  🤗
                </span>
              </ListItemIcon>
              <ListItemText primary="Hugging Face" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
