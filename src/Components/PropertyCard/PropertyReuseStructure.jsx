import UseData from "../Hooks/UseData";
import PropertyCard from "./PropertyCard";

const PropertyReuseStructure = () => {
  const [datas] = UseData();
  return (
    <div>
      <PropertyCard type2Data={datas}></PropertyCard>
    </div>
  );
};

export default PropertyReuseStructure;
