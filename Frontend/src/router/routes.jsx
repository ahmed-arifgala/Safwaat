import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import { Login, Signup } from '../pages';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/hello",
        element: <Signup/>,
    },
]);

export default routes