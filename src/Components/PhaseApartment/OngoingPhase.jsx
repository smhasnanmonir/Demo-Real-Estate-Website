import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import UseData from "../Hooks/UseData";
import PropertyCard from "../PropertyCard/PropertyCard";

const OngoingPhase = () => {
  const [datas] = UseData();
  const ongoingFilter = datas.filter((data) => data.phase === "ongoing");
  return (
    <div>
      <FloatingButton></FloatingButton>
      <PropertyCard
        heading="Our Ongoing Projects"
        type2Data={ongoingFilter}
      ></PropertyCard>
    </div>
  );
};

export default OngoingPhase;
