import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import PropertiesDetail from "../Components/PropertiesDetails/PropertiesDetail";
import AboutUs from "../Components/AboutUs";
import ContactForm from "../Components/ContactForm/ContactForm";
import PropertyReuseStructure from "../Components/PropertyCard/PropertyReuseStructure";
import PropertyCard from "../Components/PropertyCard/PropertyCard";
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
    ],
  },
]);

export default router;
