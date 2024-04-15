import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componant/Root/Root.jsx';
import Home from './Componant/Pages/Home/Home.jsx';
import About from './Componant/Pages/About/About.jsx';
import Login from './Componant/Pages/Login/Login.jsx';
import Register from './Componant/Pages/Register/Register.jsx';
import AuthProvider from './Componant/AuthProvider/AuthProvider.jsx';
import Estates from './Componant/Pages/Estates/Estates.jsx';
import EstateDetails from './Componant/Pages/EstateDetails/EstateDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/estates',
        element: <Estates></Estates>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/estateDetails/:id',
        element: <EstateDetails></EstateDetails>
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
