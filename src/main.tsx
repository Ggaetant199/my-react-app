import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import Login from './pages/Login.tsx'
import About from './pages/About.tsx'
import ProductIndex from './pages/products/index.tsx'
import Products from './pages/products/Products.tsx'
import Product from './pages/products/product.tsx'
import AccountIndex from './pages/account/index.tsx'
import Account from './pages/account/Account.tsx'
import Setting from './pages/account/Setting.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "flowbite";
import "./index.css";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/products",
    element:<ProductIndex/>,
    children:[
      {
        path:"",
        element:<Products/>
      },
      {
        path:":productId",
        element:<Product/>
      },
    ]
  },
  {
    path:"/account",
    element:<AccountIndex/>,
    children:[
      {
        path:"",
        element:<Account/>
      },
      {
        path:"settings",
        element:<Setting/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
