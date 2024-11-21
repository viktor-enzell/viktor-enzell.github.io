import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { headerHeight, footerHeight, topMargin } from "./Home";

const Root = styled('div')({
  marginTop: topMargin,
  height: "100%",
  width: "100%",
  minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${topMargin}px)`,
});

const TextWrapper = styled('div')({
  marginTop: "20vh",
});

const StatusCode = styled(Typography)({
  fontSize: 54,
  textAlign: "center",
  marginBottom: 8,
});

export default function Fallback() {
  return (
    <Root>
      <TextWrapper />
      <StatusCode variant="h2" component="h1">
        404
      </StatusCode>
    </Root>
  );
}
