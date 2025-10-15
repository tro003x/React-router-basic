import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Root from '../../Pages/Root/Root';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Bookdetails from '../../Pages/BookDetails/Bookdetails';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: ()=> fetch('booksData.json'),
            path: '/',
            Component: Home,
        },
        {
          path: '/about',
          Component: About,
        },
        {
          path: '/bookDetails/:id',
           loader: ()=> fetch('./booksData.json'),
          Component: Bookdetails,
        }
    ]
  }
]);