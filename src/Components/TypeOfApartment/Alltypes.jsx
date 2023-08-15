import UseData from "../Hooks/UseData";
import PropertyCard from "../PropertyCard/PropertyCard";

const Alltypes = () => {
  const [data] = UseData();
  return (
    <div>
      <PropertyCard
        heading="We have some commercial Apartments in these places"
        type2Data={commercialFilter}
      ></PropertyCard>
    </div>
  );
};

export default Alltypes;
