import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const Main = () => {
  const location = useLocation();
  const noNavBar = location.pathname.includes("about");
  return (
    <div>
      <div className="md:block hidden">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      {noNavBar || <Footer></Footer>}
    </div>
  );
};

export default Main;
