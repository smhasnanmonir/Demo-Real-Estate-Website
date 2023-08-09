import { useParams } from "react-router-dom";
import UseData from "../Hooks/UseData";
import IntroDuction from "../../Home/IntroDuction/IntroDuction";
import PropertyReuseCard from "../PropertyCard/PropertyReuseCard";

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
    <div className="max-w-7xl mx-auto md:pb-[40px] min-h-[80vh]">
      <IntroDuction></IntroDuction>
      {filterSelectedValue.length > 0 ? (
        <h1 className="text-center text-3xl font-semibold">
          Our Projects in {uppercase}
        </h1>
      ) : (
        <h1 className="text-center text-3xl font-semibold">
          We Currenty have no project in {uppercase}
        </h1>
      )}
      <div className="grid md:grid-cols-2 grid-cols-1 py-[45px] place-items-center max-w-4xl mx-auto">
        {filterSelectedValue?.map((data) => (
          <PropertyReuseCard key={data?.id} data={data}></PropertyReuseCard>
        ))}
      </div>
    </div>
  );
};

export default PropertiesLocation;
