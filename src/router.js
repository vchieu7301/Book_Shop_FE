import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import LoginForm from "./Component/LoginForm";
import NotFound from "./Component/NotFound";
import DashBoard from "./Layout/DashBoard"

const router = createBrowserRouter([

    {
        path: '/login',
        element: <LoginForm/>
    },

    {
        path: '/',
        element: <Dashboard/>
    },

    {
        path: '*',
        element: <NotFound/>
    },

])

export default router;

