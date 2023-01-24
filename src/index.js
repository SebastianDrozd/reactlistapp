import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './routes/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';
import { Auth0Provider } from "@auth0/auth0-react";
import LandingPage from './routes/LandingPage';
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Navbar from './components/Navbar';
import App from './routes/App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    <Provider store={store}>
      <Auth0Provider
        domain="dev-at5wa91z.us.auth0.com"
        clientId="hYl3Xg5G4jcZICeuqEngh9E9oSvlB3Xf"
        redirectUri="http://localhost:3000/home">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);


