import UseData from "../Hooks/UseData";
import PropertyCard from "./PropertyCard";

const PropertyNested = () => {
  const [datas] = UseData();
  return (
    <div>
      <PropertyCard></PropertyCard>
    </div>
  );
};

export default PropertyNested;
