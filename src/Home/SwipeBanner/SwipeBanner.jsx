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
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          onMouseEnter={() => onClick(card.id)}
          style={{ backgroundImage: `url(${card.url})` }}
        >
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SwipeBanner;
