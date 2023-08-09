import { Link } from "react-router-dom";
import UseData from "../Hooks/UseData";
import PropertyReuseCard from "./PropertyReuseCard";

const PropertyCard = () => {
  const [datas] = UseData();
  console.log(datas);
  return (
    <>
      <h1 className="font-semibold text-center text-2xl py-8">
        Our Properties
      </h1>
      <div className="grid md:grid-cols-4 place-items-center grid-cols-1 gap-5 md:pb-[70px] pb-[35px] md:px-[30px] px-[25px] overflow-hidden">
        {datas.map((data) => (
          <PropertyReuseCard key={data?.id} data={data}></PropertyReuseCard>
        ))}
      </div>
    </>
  );
};

export default PropertyCard;
