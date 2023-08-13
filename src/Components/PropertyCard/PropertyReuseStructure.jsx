import { useParams } from "react-router-dom";
import UseData from "../Hooks/UseData";
import PropertyCard from "./PropertyCard";

const PropertyReuseStructure = () => {
  const [datas] = UseData();
  const { selectedValue } = useParams();
  console.log(selectedValue);
  const filterSelectedValueLocation = datas.filter(
    (data) => data?.location == selectedValue
  );
  const commercialFilter = datas.filter((data) => data.type2 === "commercial");

  const uppercase =
    selectedValue?.charAt(0).toUpperCase() + selectedValue?.slice(1);

  if (selectedValue === undefined) {
    return <PropertyCard type2Data={datas}></PropertyCard>;
  } else if (filterSelectedValueLocation.length >= 1) {
    if (selectedValue == "dhanmondi" || selectedValue == "keraniganj") {
      return (
        <PropertyCard
          type2Data={filterSelectedValueLocation}
          heading={`Our Properties in ${uppercase}`}
        ></PropertyCard>
      );
    }
  } else if (selectedValue === "residential") {
    return (
      <PropertyCard
        heading="Our Residential Apartments"
        type2Data={datas}
      ></PropertyCard>
    );
  } else if (selectedValue === "commercial") {
    return (
      <PropertyCard
        heading="Our Commercial Apartments"
        type2Data={commercialFilter}
      ></PropertyCard>
    );
  } else if (selectedValue === "ongoing") {
    return (
      <PropertyCard
        heading="Our Ongoing Projects"
        type2Data={datas}
      ></PropertyCard>
    );
  } else if (selectedValue === "upcoming") {
    return (
      <PropertyCard heading="Some Lands, Projects and Apartments are coming soon"></PropertyCard>
    );
  } else if (selectedValue === "completed") {
    return <PropertyCard heading="Blank Page"></PropertyCard>;
  } else if (selectedValue === "mohammadpur") {
    return (
      <PropertyCard heading="We currently have no properties in Mohammadpur"></PropertyCard>
    );
  }
};

export default PropertyReuseStructure;
