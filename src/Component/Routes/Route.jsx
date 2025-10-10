import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hi everyone! </div>
  }
]);
