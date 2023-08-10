import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import PropertiesDetail from "../Components/PropertiesDetails/PropertiesDetail";
import AboutUs from "../Components/AboutUs";
import PropertyCard from "../Components/PropertyCard/PropertyCard";
import PropertiesLocation from "../Components/Location/PropertiesLocation";
import ContactForm from "../Components/ContactForm/ContactForm";
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
        element: <PropertyCard></PropertyCard>,
      },
      {
        path: "/allproperties/:selectedValue",
        element: <PropertiesLocation></PropertiesLocation>,
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
