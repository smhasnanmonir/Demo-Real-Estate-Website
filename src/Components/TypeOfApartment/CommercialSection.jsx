import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import UseData from "../Hooks/UseData";
import PropertyCard from "../PropertyCard/PropertyCard";

const CommercialSection = () => {
  const [datas] = UseData();
  const commercialFilter = datas.filter((data) => data.type2 === "commercial");
  return (
    <div>
      <FloatingButton></FloatingButton>
      <PropertyCard
        heading="We have some commercial Apartments in these places"
        type2Data={commercialFilter}
      ></PropertyCard>
    </div>
  );
};

export default CommercialSection;
