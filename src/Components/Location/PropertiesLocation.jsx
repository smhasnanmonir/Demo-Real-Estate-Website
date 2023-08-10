import { useParams } from "react-router-dom";
import UseData from "../Hooks/UseData";
import IntroDuction from "../../Home/IntroDuction/IntroDuction";
import PropertyReuseCard from "../PropertyCard/PropertyReuseCard";
import IntroDuctionWhite from "../../Home/IntroDuction/IntroductionWhite";

const PropertiesLocation = () => {
  const [datas] = UseData();
  const { selectedValue } = useParams();
  console.log(selectedValue);
  const filterSelectedValue = datas.filter(
    (data) => data?.location == selectedValue
  );
  console.log(filterSelectedValue);
  const uppercase =
    selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);
  return (
    <div className="bg-[#e9ecef] mx-auto md:pb-[40px] px-[25px] md:px-0 min-h-[80vh] text-black overflow-hidden">
      <img src="https://i.imgur.com/FtFw0nN.jpg" alt="" />
      <IntroDuctionWhite></IntroDuctionWhite>
      {filterSelectedValue.length > 0 ? (
        <h1 className="text-center md:text-3xl text-xl font-semibold mt-[12px]">
          Our Projects in {uppercase}
        </h1>
      ) : (
        <h1 className="text-center md:text-3xl text-xl font-semibold mt-[12px]">
          We Currenty have no project in {uppercase}
        </h1>
      )}
      <div className="grid md:grid-cols-2 grid-cols-1 py-[45px] place-items-center max-w-3xl mx-auto">
        {filterSelectedValue?.map((data) => (
          <PropertyReuseCard key={data?.id} data={data}></PropertyReuseCard>
        ))}
      </div>
    </div>
  );
};

export default PropertiesLocation;
