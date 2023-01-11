import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./routes/LandingPage"
import ErrorPage from './routes/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';
import { Auth0Provider } from "@auth0/auth0-react";
import LandingPage from './routes/LandingPage';
import {createContext} from 'react';
const newContext = React.createContext({ loggedIn: false });
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "home",
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-at5wa91z.us.auth0.com"
      clientId="hYl3Xg5G4jcZICeuqEngh9E9oSvlB3Xf"
      redirectUri="http://localhost:3000/home"
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);


