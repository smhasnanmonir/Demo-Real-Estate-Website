// import classic from "../../../src/assets/classic.jpg";
// import commercial from "../../../src/assets/commercial.jpg";
// import luxury from "../../../src/assets/luxery.jpg";
// import community from "../../../src/assets/community.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SwiperBanner.css";
import { useEffect, useState } from "react";

const SwipeBanner = () => {
  const [activeId, setActiveId] = useState(10);
  const [data, setData] = useState([]);
  const onClick = (id) => {
    setActiveId(id);
  };
  useEffect(() => {
    fetch("./CardData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="container">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${
            activeId === card.id ? "active" : ""
          } md:h-[550px] h-[270px]`}
          onClick={() => onClick(card.id)}
          onMouseEnter={() => onClick(card.id)}
          onMouseLeave={() => onClick(card.id === 100)}
          style={{ backgroundImage: `url(${card.url})` }}
        >
          <h3 className="bg-black p-2 font-semibold md:text-[18px] text-[8px] w-full">
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SwipeBanner;
