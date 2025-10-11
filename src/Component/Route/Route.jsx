import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Root from '../../Pages/Root/Root';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: ()=> fetch(booksData.json),
            path: '/',
            Component: Home,
        }
    ]
  }
]);