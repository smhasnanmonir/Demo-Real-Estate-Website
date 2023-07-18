import { Carousel } from "react-responsive-carousel";
import classic from "../../../src/assets/classic.jpg";
import commercial from "../../../src/assets/commercial.jpg";
import luxury from "../../../src/assets/luxery.jpg";
import community from "../../../src/assets/community.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SwipeBanner = () => {
  return (
    <div className="z-20">
      <Carousel infiniteLoop stopOnHover>
        <div>
          <img src={classic} />
          <p className="legend text-[25px] md:mb-[200px]">Classic</p>
        </div>
        <div>
          <img src={commercial} />
          <p className="legend text-[25px] md:mb-[200px]">Commercial</p>
        </div>
        <div>
          <img src={luxury} />
          <p className="legend text-[25px] md:mb-[200px]">Luxury</p>
        </div>
        <div>
          <img src={community} />
          <p className="legend text-[25px] md:mb-[200px]">Community</p>
        </div>
      </Carousel>
    </div>
  );
};

export default SwipeBanner;
