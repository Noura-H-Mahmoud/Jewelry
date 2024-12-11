import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import Home from './pages/Home/Home.jsx';


  const title='LIVE & TRAVEL';
  const para='Special offers to suit your plan';
  const router = createBrowserRouter([
    {
      path: "/Jewelry/",
      element: <App />,
      children:[
        {
        path: "/Jewelry/",
        element: <Home 
          title={title} para={para}/>,
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
) 
