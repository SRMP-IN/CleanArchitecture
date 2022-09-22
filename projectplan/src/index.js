import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout></MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
