import PropertyReuseCard from "./PropertyReuseCard";
import IntroDuctionWhite from "../../Home/IntroDuction/IntroductionWhite";
import UseData from "../Hooks/UseData";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import { useParams } from "react-router-dom";

const PropertyCard = ({ type2Data, heading }) => {
  return (
    <div className="bg-[#e9ecef] text-black">
      <FloatingButton></FloatingButton>
      <img src="https://i.imgur.com/FtFw0nN.jpg" alt="" />
      <IntroDuctionWhite></IntroDuctionWhite>
      {heading ? (
        <h1 className="font-semibold text-center text-2xl md:py-8 py-5">
          {heading}
        </h1>
      ) : (
        <h1 className="font-semibold text-center text-2xl md:py-8 py-5">
          Our Properties
        </h1>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 place-items-center grid-cols-1 lg:gap-5 md:gap-3 md:pb-[70px] pb-[35px] md:px-[30px] px-[25px] overflow-hidden lg:max-w-full md:max-w-3xl mx-auto max-w-full">
        {type2Data?.map((data) => (
          <PropertyReuseCard key={data?.id} data={data}></PropertyReuseCard>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
