import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import AboutUs from "../Components/AboutUs";
import PropertiesDetail from "../Components/PropertiesDetails/PropertiesDetail";
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
        path: "/properties/:id",
        element: <PropertiesDetail></PropertiesDetail>,
        loader: async ({ params }) => {
          const res = await fetch("/OurProject.json");
          const data = await res.json();
          const property = data.find((info) => info.id == params.id);
          return property;
        },
      },
    ],
  },
]);

export default router;
