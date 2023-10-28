import PropertyReuseCard from "./PropertyReuseCard";
import IntroDuctionWhite from "../../Home/IntroDuction/IntroductionWhite";
import UseData from "../Hooks/UseData";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import { useParams } from "react-router-dom";

const PropertyCard = ({ type2Data, heading }) => {
  return (
    <div className="bg-[#e9ecef] text-black">
      <FloatingButton></FloatingButton>
      <img src="https://i.ibb.co/DpvSdTR/FtFw0nN.jpg" alt="" />
      <IntroDuctionWhite></IntroDuctionWhite>
      <div className="px-[5%]">
      {heading ? (
        <h1 className="font-semibold text-center md:text-2xl text-xl md:py-8 py-5">
          {heading}
        </h1>
      ) : (
        <h1 className="font-semibold text-center md:text-2xl text-xl md:py-8 py-5">
          Our Properties
        </h1>
      )}
      </div>

      <div className="px-[5%] grid lg:auto-cols-[22%] auto-cols-auto justify-center lg:grid-flow-col lg:gap-5 md:gap-3 md:pb-[70px] pb-[35px] md:px-[30px] lg:max-w-full md:max-w-3xl mx-auto">
        {type2Data?.map((data) => (
          <PropertyReuseCard key={data?.id} data={data}></PropertyReuseCard>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
