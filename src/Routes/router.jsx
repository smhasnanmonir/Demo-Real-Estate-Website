import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import PropertiesDetail from "../Components/PropertiesDetails/PropertiesDetail";
import AboutUs from "../Components/AboutUs";
import PropertyCard from "../Components/PropertyCard/PropertyCard";
import PropertiesLocation from "../Components/Location/PropertiesLocation";
import ContactForm from "../Components/ContactForm/ContactForm";
import ResidentialSection from "../Components/TypeOfApartment/ResidentialSection";
import CommercialSection from "../Components/TypeOfApartment/CommercialSection";
import PropertyReuseStructure from "../Components/PropertyCard/PropertyReuseStructure";
import Intregrated from "../Components/TypeOfApartment/Intregrated";
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
      {
        path: "/allproperties/residential",
        element: <ResidentialSection></ResidentialSection>,
      },
      {
        path: "/allproperties/commercial",
        element: <CommercialSection></CommercialSection>,
      },
      {
        path: "/allproperties/integrated",
        element: <Intregrated></Intregrated>,
      },
    ],
  },
]);

export default router;
