import React, { lazy } from 'react';
import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const AppRouter = [
    { index: true, element: <Dashboard />, path: "/" },
    { element: <Dashboard />, path: "/Dashboard" },
    { element: <Login />, path: "/login" },
    { element: <Error404 />, path: "/error404" }
];
export default AppRouter