import UseData from "../Hooks/UseData";
import PropertyCard from "../PropertyCard/PropertyCard";

const ResidentialSection = () => {
  const [datas] = UseData();
  return (
    <div>
      <PropertyCard
        heading="Our Residential Apartments"
        type2Data={datas}
      ></PropertyCard>
    </div>
  );
};

export default ResidentialSection;
