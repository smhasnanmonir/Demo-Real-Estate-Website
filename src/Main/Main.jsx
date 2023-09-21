import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const Main = () => {
  return (
    <>
      <div className="mb-[85px]">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration />
    </>
  );
};

export default Main;
