import CollectionType from "../../SharedComponents/CollectionType/CollectionType";
import CustomerReview from "../CustomerReview/CustomerReview";
import FloatingButton from "../FloatingButton/FloatingButton";
import IntroDuction from "../IntroDuction/IntroDuction";
import OurProjectSection from "../OurProjectSection/OurProjectSection";
import ReasonWhy from "../ReasonWhy/ReasonWhy";
import SwipeBanner from "../SwipeBanner/SwipeBanner";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <div className="float-left">
        <FloatingButton></FloatingButton>
      </div>
      <SwipeBanner></SwipeBanner>
      <IntroDuction></IntroDuction>
      <ReasonWhy></ReasonWhy>
      <CustomerReview></CustomerReview>
      <CollectionType></CollectionType>
      <OurProjectSection></OurProjectSection>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
