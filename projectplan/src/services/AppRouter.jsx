import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

function AppRouter() {
    return (

        <Routes>
            <Route exact index path="/dashboard" element={<Dashboard />} ></Route>
            <Route exact  path="/login" element={<Login />} ></Route>
            <Route index element={<Dashboard />} ></Route>
        </Routes>
    )
}

export default AppRouter