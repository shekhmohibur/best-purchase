import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Products from './components/products/Products';
import ContactUs from './components/contact/ContactUs';
import LoginSignup from './components/loginSignup/LoginSignup';
import Welcome from './components/home/Welcome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/products",
        element:<Products></Products>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/login",
        element:<LoginSignup></LoginSignup>
      },
      {
        path:"/welcome",
        element:<Welcome></Welcome>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
