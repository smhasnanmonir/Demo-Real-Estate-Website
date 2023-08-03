// import classic from "../../../src/assets/classic.jpg";
// import commercial from "../../../src/assets/commercial.jpg";
// import luxury from "../../../src/assets/luxery.jpg";
// import community from "../../../src/assets/community.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SwiperBanner.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseData from "../../Components/Hooks/UseData";

const SwipeBanner = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(10);
  const [datas] = UseData();
  const onClick = (id) => {
    setActiveId(id);
  };

  const navigateToProperty = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <div className="container ">
      {datas.map((card) => (
        <div
          key={card.numberId}
          className={`panel z-0 ${
            activeId === card?.numberId ? "active" : ""
          } md:h-[550px] h-[270px]`}
          // onClick={() => onClick(card.id)}
          onClick={() => {
            onClick(card?.numberId);
            navigateToProperty(card?.id);
          }}
          onMouseEnter={() => onClick(card.numberId)}
          onMouseLeave={() => onClick(card.numberId === 100)}
          style={{ backgroundImage: `url(${card?.slideimg})` }}
        >
          <h3 className="text-black p-2 font-semibold md:text-[18px] text-[8px] w-full">
            {card?.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SwipeBanner;
