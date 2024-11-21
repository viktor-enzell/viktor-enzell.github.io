import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Fallback from "./404";

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<Fallback />} />
    </RouterRoutes>
  );
}
