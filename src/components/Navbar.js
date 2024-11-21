import React from "react";
import { styled } from "@mui/material/styles";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { headerHeight } from "../views/Home";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { slimWidth } from "../views/Home";

const drawerWidth = 240;
const swapNavbarWidth = 960;
const activeButtonColor = "#eeeeee";
const toolBarMaxWidth = slimWidth - 48;

const Root = styled('div')({
  height: headerHeight,
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  maxWidth: toolBarMaxWidth,
  width: "100%",
  justifyContent: "flex-end",
  height: headerHeight,
  paddingLeft: 0,
  paddingRight: 0,
});

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
});

const AppBarDivider = styled(Divider)({
  width: "100%",
});

const StyledTab = styled(Tab)({
  minWidth: "100px",
  textDecoration: "none",
  color: "black",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

const MenuButtonStyled = styled(IconButton)({
  marginRight: "16px",
});

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();

  const tabValue = ["/", "/portfolio"].indexOf(pathname);

  return (
    <Root>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          {width > swapNavbarWidth ? (
            <Tabs value={tabValue}>
              {[
                { key: "/", name: "Home" },
                { key: "/portfolio", name: "Portfolio" },
              ].map((item) => (
                <StyledTab
                  label={item.name}
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
            <MenuButtonStyled
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </MenuButtonStyled>
          )}
        </StyledToolbar>
        <AppBarDivider />
      </StyledAppBar>
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={open}
        ModalProps={{ onBackdropClick: () => setOpen(false) }}
      >
        <List>
          {[
            { key: "/", name: "Home" },
            { key: "/portfolio", name: "Portfolio" },
          ].map((item) => (
            <StyledLink to={item.key} key={item.key}>
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
                <ListItemText primary={item.name} />
              </ListItem>
            </StyledLink>
          ))}
        </List>
      </StyledDrawer>
    </Root>
  );
}
