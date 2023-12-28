import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import { Login, Signup } from '../Pages';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
]);

export default routes