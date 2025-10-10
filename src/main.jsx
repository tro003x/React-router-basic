import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Component/Route/Route';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
