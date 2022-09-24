import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <BrowserRouter basename={baseUrl}>
    <AuthProvider>
      <MainLayout>
        {/* <Routes>
        {AppRouter.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes> */}
      </MainLayout>
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
