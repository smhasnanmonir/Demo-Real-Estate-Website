import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ServicePage from "../Components/ServicePage/ServicePage";

const BusinessPage = React.lazy(() =>
  import("../Components/BusinessPage/BusinessPage")
);
const BusinessDetailsPage = React.lazy(() =>
  import("../Components/BusinessPage/BusinessDetailsPage/BussinessDetailsPage")
);
// import BusinessPage from "../Components/BusinessPage/BusinessPage";
// import BusinessDetailsPage from "../Components/BusinessPage/BusinessDetailsPage/BussinessDetailsPage";
const Blog = React.lazy(() => import("../Components/Media/Blog"));
const Media = React.lazy(() => import("../Components/Media/Media"));
const Events = React.lazy(() => import("../Components/Media/Events"));
const NewsPage = React.lazy(() => import("../Components/Media/NewsPage"));

const Home = React.lazy(() => import("../Home/Home/Home"));
const PropertiesDetail = React.lazy(() =>
  import("../Components/PropertiesDetails/PropertiesDetail")
);
const ContactForm = React.lazy(() =>
  import("../Components/ContactForm/ContactForm")
);
const PropertyReuseStructure = React.lazy(() =>
  import("../Components/PropertyCard/PropertyReuseStructure")
);
const OurStory = React.lazy(() => import("../Components/AboutUs/OurStory"));
const OurClient = React.lazy(() => import("../Components/AboutUs/OurClient"));

const OurTeam = React.lazy(() => import("../Components/AboutUs/OurTeam"));

const MissionVision = React.lazy(() =>
  import("../Components/AboutUs/MissionVission")
);
const CareerPage = React.lazy(() =>
  import("../Components/CareerPage/CareerPage")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <Home></Home>
          </React.Suspense>
        ),
      },
      {
        path: "/allproperties",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <PropertyReuseStructure></PropertyReuseStructure>
          </React.Suspense>
        ),
      },
      {
        path: "/allproperties/:selectedValue",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <PropertyReuseStructure></PropertyReuseStructure>
          </React.Suspense>
        ),
      },
      {
        path: "/properties/:id",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <PropertiesDetail></PropertiesDetail>
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <ContactForm></ContactForm>
          </React.Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <CareerPage></CareerPage>
          </React.Suspense>
        ),
      },
      {
        path: "/business",
        // element: <BusinessPage></BusinessPage>,
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <BusinessPage></BusinessPage>
          </React.Suspense>
        ),
      },
      {
        path: "/business/details/:id",
        // element: <BusinessDetailsPage></BusinessDetailsPage>,
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <BusinessDetailsPage></BusinessDetailsPage>
          </React.Suspense>
        ),
      },
      {
        path: "/service",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/media",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <Media></Media>
          </React.Suspense>
        ),
      },
      {
        path: "/media/blog",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <Blog></Blog>
          </React.Suspense>
        ),
      },
      {
        path: "/media/news",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <NewsPage></NewsPage>
          </React.Suspense>
        ),
      },
      {
        path: "/media/events",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <Events></Events>
          </React.Suspense>
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
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <OurStory />
          </React.Suspense>
        ),
      },
      {
        path: "/aboutus/ourclients",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <OurClient></OurClient>
          </React.Suspense>
        ),
      },
      {
        path: "/aboutus/ourteam",
        element: (
          <React.Suspense
            fallback={
              <div className="grid place-items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            }
          >
            <OurTeam></OurTeam>
          </React.Suspense>
        ),
      },
      {
        path: "/aboutus/missionVision",
        element: (
          <React.Suspense fallback={<div>Loading</div>}>
            <MissionVision></MissionVision>
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
