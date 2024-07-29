import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Porttofolio from "./Components/Porttofolio/Porttofolio.jsx";

const router = createBrowserRouter([
  {
    path: "/vite/",
    element: <Layout />,
    children: [
      {
        path: "/vite/",
        element: <App />,
      },
      {
        path: "/vite/Home",
        element: <App />,
      },
      {
        path: "/vite/About",
        element: <About />,
      },
      {
        path: "/vite/Portfolio",
        element: <Porttofolio />,
      },
      {
        path: "/vite/Contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
