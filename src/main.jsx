import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLoayout from "./Componets/Main/MainLoayout";
import Home from "./Componets/Home";
import Login from "./Componets/Login";
import Register from "./Componets/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterRBS from "./Componets/RegisterRBS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLoayout></MainLoayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register-rbs",
        element: <RegisterRBS />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
