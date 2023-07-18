import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import Login from './pages/Login.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[

    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
