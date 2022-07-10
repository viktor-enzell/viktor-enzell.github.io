import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItemText,
  ListItem,
  IconButton,
  Divider,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { headerHeight } from "../views/Home";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { slimWidth } from "../views/Home";

const drawerWidth = 240;
const swapNavbarWidth = 960;
const activeButtonColor = "#eeeeee";
const toolBarMaxWidth = slimWidth - 24;

const useStyles = makeStyles({
  root: {
    height: headerHeight,
  },
  appBar: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
  },
  toolBar: {
    maxWidth: toolBarMaxWidth,
    width: "100%",
    justifyContent: "flex-end",
    height: headerHeight,
    paddingLeft: 0,
    paddingRight: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBarDivider: {
    width: "100%",
  },
  tab: {
    minWidth: "100px",
    textDecoration: "none",
    color: "black",
  },
  link: { textDecoration: "none", color: "black" },
});

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {width > swapNavbarWidth ? (
            <Tabs>
              {[
                { key: "/", name: "Home" },
                { key: "/portfolio", name: "Portfolio" },
              ].map((item) => (
                <Tab
                  label={item.name}
                  className={classes.tab}
                  style={{
                    backgroundColor: pathname === item.key && activeButtonColor,
                  }}
                  component={Link}
                  to={item.key}
                  key={item.key}
                />
              ))}
            </Tabs>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
        <Divider className={classes.appBarDivider} />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ onBackdropClick: () => setOpen(false) }}
      >
        <List>
          {[
            { key: "/", name: "Home" },
            { key: "/portfolio", name: "Portfolio" },
          ].map((item) => (
            <Link to={item.key} key={item.key} className={classes.link}>
              <ListItem
                button
                key={item.key}
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  backgroundColor: pathname === item.key && activeButtonColor,
                }}
              >
                <ListItemText
                  primary={item.name}
                  classes={{ primary: classes.listItem }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
