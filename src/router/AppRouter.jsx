import React from "react";
import { Helmet } from "react-helmet";
import pageThumbnail from "../assets/pageThumbnail.jpg";
import HomePage from "../pages/HomePage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <>
      <Helmet>
        <meta name="og:image" content={pageThumbnail} />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}
