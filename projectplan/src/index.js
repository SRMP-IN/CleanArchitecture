import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./services/AppRouter";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    // <React.StrictMode>
    <BrowserRouter basename={baseUrl}>
        <MainLayout>
            <Routes>
                {AppRouter.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </MainLayout>
    </BrowserRouter>
    // </React.StrictMode>
);