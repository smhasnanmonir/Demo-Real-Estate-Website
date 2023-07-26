import CollectionType from "../../SharedComponents/CollectionType/CollectionType";
import FloatingButton from "../FloatingButton/FloatingButton";
import IntroDuction from "../IntroDuction/IntroDuction";
import OurProjectSection from "../OurProjectSection/OurProjectSection";
import SwipeBanner from "../SwipeBanner/SwipeBanner";

const Home = () => {
  return (
    <div className="bg-black">
      <FloatingButton></FloatingButton>
      <SwipeBanner></SwipeBanner>
      <IntroDuction></IntroDuction>
      <CollectionType></CollectionType>
      <OurProjectSection></OurProjectSection>
    </div>
  );
};

export default Home;
