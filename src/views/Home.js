import React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const slimWidth = 700;
export const headerHeight = 48;
export const footerHeight = 100;
export const topMargin = 64;
export const smBreakpointWidth = 600;

const Root = styled('div')(({ theme }) => ({
  marginTop: topMargin,
  height: "100%",
  width: "100%",
  textAlign: "center",
  minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
}));

const ContactList = styled(List)({
  maxWidth: slimWidth,
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "0px",
});

const ContactListIcon = styled('div')({
  color: "black",
  marginRight: "1rem",
});

const VerticalDividerContainer = styled('div')({
  position: "relative",
});

const VerticalDividerStyled = styled(Divider)({
  position: "absolute",
  height: "100%",
});

const HorizontalDividerStyled = styled(Divider)({
  width: "100%",
  marginTop: "24px",
});

const HuggingFaceIcon = styled('span')({
  fontSize: "23px",
  filter: "grayscale(100%)",
});

const TextContainerSM = styled(Grid)(({ width }) => ({
  paddingRight: width > smBreakpointWidth ? "16px" : "0",
}));

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <Root>
      <Grid container>
        <TextContainerSM item xs={12} sm={8} width={width}>
          <Typography variant="h1" gutterBottom>
            Software
            <br />
            Developer
          </Typography>
          <Typography gutterBottom>
            Hello! My name is Viktor. I'm a full stack developer based in
            Stockholm who enjoys building products that utilize machine
            learning. I have a Master's degree in Computer Science from KTH,
            where I specialized in AI, primarily focusing on natural language
            processing and speech.
            <br />
            <br />
            Check out some of my previous projects in my portfolio or on GitHub
            and Hugging Face. Also, feel free to connect with me on LinkedIn!
          </Typography>
        </TextContainerSM>
        {width > smBreakpointWidth ? (
          <VerticalDividerContainer>
            <VerticalDividerStyled orientation="vertical" flexItem />
          </VerticalDividerContainer>
        ) : (
          <HorizontalDividerStyled />
        )}
        <Grid item xs={12} sm={4}>
          <ContactList component="nav" aria-label="contact links">
            <ListItem
              component="a"
              target="_blank"
              href="https://linkedin.com/in/viktor-enzell-66967913b/"
            >
              <ContactListIcon>
                <LinkedInIcon />
              </ContactListIcon>
              <ListItemText 
                primary="LinkedIn" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    color: "black"
                  }
                }} 
              />
            </ListItem>
            <Divider />
            <ListItem
              component="a"
              target="_blank"
              href="https://github.com/viktor-enzell"
            >
              <ContactListIcon>
                <GitHubIcon />
              </ContactListIcon>
              <ListItemText 
                primary="GitHub" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    color: "black"
                  }
                }} 
              />
            </ListItem>
            <Divider />
            <ListItem
              component="a"
              target="_blank"
              href="https://huggingface.co/viktor-enzell"
            >
              <ContactListIcon>
                <HuggingFaceIcon>
                  🤗
                </HuggingFaceIcon>
              </ContactListIcon>
              <ListItemText 
                primary="Hugging Face" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    color: "black"
                  }
                }} 
              />
            </ListItem>
          </ContactList>
        </Grid>
      </Grid>
    </Root>
  );
}
