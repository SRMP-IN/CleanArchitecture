import React, { lazy } from 'react';
import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const AppRouter = [
    { index: true, element: <Dashboard />, path: "/" },
    { element: <Dashboard />, path: "/Dashboard" },
    { element: <Login />, path: "/login" },
    { element: <Error404 />, path: "/error404" },
    { element: <NotFound />, path: "*" },
];


export default AppRouter

export const AppRouterPageLayout = [
    { index: true, element: <Login />, path: "/" },
    { index: true, element: <Login />, path: "/login" },
    { element: <Error404 />, path: "/error404" },
    { element: <Login />, path: "*" },

]; 