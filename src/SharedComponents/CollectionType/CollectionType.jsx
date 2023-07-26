import { useEffect, useState } from "react";
import CollectionDetails from "./CollectionDetails";

const CollectionType = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/collectionData.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  console.log(items);
  const luxury = items.filter((item) => item.name === "LUXURY");
  const classic = items.filter((item) => item.name === "CLASSIC");
  const commercial = items.filter((item) => item.name === "COMMERCIAL");
  const wellness = items.filter((item) => item.name === "WELLNESS");

  return (
    <div className="mt-[65px]">
      <CollectionDetails building={luxury}></CollectionDetails>
      <CollectionDetails building={classic}></CollectionDetails>
      <CollectionDetails building={commercial}></CollectionDetails>
      <CollectionDetails building={wellness}></CollectionDetails>
    </div>
  );
};

export default CollectionType;
