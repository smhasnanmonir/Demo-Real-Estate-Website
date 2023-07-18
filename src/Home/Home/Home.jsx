import CollectionType from "../../SharedComponents/CollectionType/CollectionType";
import IntroDuction from "../IntroDuction/IntroDuction";
import SwipeBanner from "../SwipeBanner/SwipeBanner";

const Home = () => {
  return (
    <div>
      <SwipeBanner></SwipeBanner>
      <IntroDuction></IntroDuction>
      <CollectionType></CollectionType>
    </div>
  );
};

export default Home;
