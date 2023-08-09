import { Link, useParams } from "react-router-dom";
import UseData from "../Hooks/UseData";
import PropertyReuseCard from "./PropertyReuseCard";
import IntroDuctionWhite from "../../Home/IntroDuction/IntroductionWhite";

const PropertyCard = () => {
  const [datas] = UseData();
  return (
    <div className="bg-[#e9ecef] text-black">
      <img src="https://i.imgur.com/BnlkC6F.jpg" alt="" />
      <IntroDuctionWhite></IntroDuctionWhite>
      <h1 className="font-semibold text-center text-2xl md:py-8 py-5">
        Our Properties
      </h1>
      <div className="grid md:grid-cols-4 place-items-center grid-cols-1 md:gap-5 md:pb-[70px] pb-[35px] md:px-[30px] px-[25px] overflow-hidden">
        {datas.map((data) => (
          <PropertyReuseCard key={data?.id} data={data}></PropertyReuseCard>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
