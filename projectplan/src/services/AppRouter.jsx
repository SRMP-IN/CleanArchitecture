import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';



const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));

function AppRouter() {
    return (

        <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} ></Route>
            <Route exact path="/login" element={<Login />} ></Route>
            <Route index element={<Dashboard />} ></Route>
        </Routes>
    )
}

export default AppRouter