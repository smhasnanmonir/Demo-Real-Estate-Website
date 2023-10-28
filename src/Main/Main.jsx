import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";
import { MobileNavbar } from "../Home/MobileNavbar/MobileNavbar";

const Main = () => {
  return (
    <>
      <div className="mb-[85px] lg:block hidden">
        <Header></Header>
      </div>
      <div className="lg:hidden md:block block">
        <MobileNavbar></MobileNavbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration />
    </>
  );
};

export default Main;
