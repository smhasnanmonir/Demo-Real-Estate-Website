import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import PropertiesDetail from "../Components/PropertiesDetails/PropertiesDetail";
import AboutUs from "../Components/AboutUs";
import ContactForm from "../Components/ContactForm/ContactForm";
import PropertyReuseStructure from "../Components/PropertyCard/PropertyReuseStructure";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/allproperties",
        element: <PropertyReuseStructure></PropertyReuseStructure>,
      },
      {
        path: "/allproperties/:selectedValue",
        element: <PropertyReuseStructure></PropertyReuseStructure>,
      },
      {
        path: "/properties/:id",
        element: <PropertiesDetail></PropertiesDetail>,
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "/business",
        element: (
          <div>
            <h1 className="text-center min-h-screen">This is business page</h1>
          </div>
        ),
      },
      {
        path: "/service",
        element: (
          <div>
            <h1 className="text-center min-h-screen">This is service page</h1>
          </div>
        ),
      },
      {
        path: "/career",
        element: (
          <div>
            <h1 className="text-center min-h-screen">This is career page</h1>
          </div>
        ),
      },
      {
        path: "/*",
        element: (
          <div className="text-center py-[10%]">
            <h1 className="text-center">
              Error 404! This page does not exists.
            </h1>
            <h1 className="btn btn-accent hover:text-white mt-3">
              <a href="/">Back to home</a>
            </h1>
          </div>
        ),
      },
    ],
  },
]);

export default router;
