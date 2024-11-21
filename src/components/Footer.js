import React from "react";
import { styled } from "@mui/material/styles";

const StyledFooter = styled("div")({
  height: "100px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Footer() {
  return <StyledFooter></StyledFooter>;
}
