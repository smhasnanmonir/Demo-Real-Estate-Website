import CollectionType from "../../SharedComponents/CollectionType/CollectionType";
import FloatingButton from "../FloatingButton/FloatingButton";
import OurProjectSection from "../OurProjectSection/OurProjectSection";
import SwipeBanner from "../SwipeBanner/SwipeBanner";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <div className="float-left">
        <FloatingButton></FloatingButton>
      </div>
      <SwipeBanner></SwipeBanner>
      {/* <IntroDuction></IntroDuction> */}
      <CollectionType></CollectionType>
      <OurProjectSection></OurProjectSection>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
