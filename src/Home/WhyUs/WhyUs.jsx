import "./WhyUs.css";
import bg from "../../../src/assets/SimpleShiny.svg";
import { Link } from "react-router-dom";
const WhyUs = () => {
  return (
    <div className="bg-whyUS md:px-[250px] md:py-[110px] px-[50px] py-[90px] grid place-items-center space-y-3 mt-[50px]">
      <h1 className="text-center text-3xl font-bold text-white">
        Like What You See?
      </h1>
      <h1 className="text-center text-3xl font-bold text-white">
        {" "}
        Get us Now!
      </h1>
      <Link to="/contact" className="button-contact">
        Contact us
      </Link>
    </div>
  );
};

export default WhyUs;
