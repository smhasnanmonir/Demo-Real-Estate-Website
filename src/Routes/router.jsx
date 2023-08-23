import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import PropertiesDetail from "../Components/PropertiesDetails/PropertiesDetail";
import ContactForm from "../Components/ContactForm/ContactForm";
import PropertyReuseStructure from "../Components/PropertyCard/PropertyReuseStructure";
import OurStory from "../Components/AboutUs/OurStory";
import OurClient from "../Components/AboutUs/OurClient";
import OurTeam from "../Components/AboutUs/OurTeam";
import MissionVision from "../Components/AboutUs/MissionVission";
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
      {
        path: "/aboutus/ourstory",
        element: <OurStory></OurStory>,
      },
      {
        path: "/aboutus/ourclients",
        element: <OurClient></OurClient>,
      },
      {
        path: "/aboutus/ourteam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/aboutus/missionVision",
        element: <MissionVision></MissionVision>,
      },
    ],
  },
]);

export default router;
