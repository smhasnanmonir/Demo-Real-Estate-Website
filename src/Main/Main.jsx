import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const Main = () => {
  const location = useLocation();
  const noNavBar = location.pathname.includes("about");
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {noNavBar || <Footer></Footer>}
    </div>
  );
};

export default Main;
