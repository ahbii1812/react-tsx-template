import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../../features/home";
import ListingScreen from "../../features/listing";
import AppHeader from "../layout/app-header.component";
import routes from "./routes";

function Navigator() {
  return (
    <BrowserRouter>
      <AppHeader>
        <Routes>
          <Route path={routes.HOME} element={<HomeScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/listing" element={<ListingScreen />} />
        </Routes>
      </AppHeader>
    </BrowserRouter>
  );
}

export default Navigator;
