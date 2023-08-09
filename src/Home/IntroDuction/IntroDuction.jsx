import { FaHouse, FaSearchengin } from "react-icons/fa6";
import ReactReadMoreReadLess from "react-read-more-read-less";
import quote from "../../../src/assets/quote.png";
import dream from "../../../src/assets/penguin.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseData from "../../Components/Hooks/UseData";
const IntroDuction = () => {
  const [datas] = UseData();
  console.log(datas);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };
  console.log(selectedValue);

  return (
    <div className="mb-5  sm:max-w-full md:px-[450px] px-[25px] mx-auto bg-[#28282B] text-white">
      <div className="flex items-center justify-between py-4 md:flex-row flex-col">
        <div className="flex items-center gap-2">
          <FaHouse size={50}></FaHouse>
          <p className="text-3xl font-bold">Find a property</p>
        </div>
        <div className="flex gap-3 md:mt-0 mt-[20px]">
          <>
            <select
              onChange={handleSelectChange}
              className="select select-info w-full max-w-xs text-black"
            >
              <option disabled selected>
                Select Location
              </option>
              <option value="dhanmondi">Dhanmondi</option>
              <option value="mohammadpur">Mohammadpur</option>
              <option value="keraniganj">Keraniganj</option>
            </select>
          </>
          <>
            <Link
              to={`/allproperties/${selectedValue}`}
              className="btn btn-outline md:text-[16px] text-white hover:bg-slate-100 hover:text-black md:w-[150px] w-[75px]"
            >
              <FaSearchengin></FaSearchengin>
              Search
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default IntroDuction;
