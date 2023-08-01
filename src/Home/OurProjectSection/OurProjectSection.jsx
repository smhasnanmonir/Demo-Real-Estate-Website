import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const OurProjectSection = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("./OurProject.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });
  return (
    <div className="z-[0] relative">
      <h1 className="OurProjects text-center text-3xl font-semibold text-white md:my-[45px] my-[25px]">
        Our Projects
      </h1>
      <div className="max-w-6xl mx-auto md:px-0 px-[25px]">
        <Swiper
          className="rounded-lg"
          effect="fade"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {datas.map((data) => (
            <SwiperSlide className=" md:p-6 rounded-lg" key={data?.img}>
              <div className="md:p-5 md:shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] text-white">
                <img className="rounded-lg" src={data?.img} alt="" />
                <h1 className="text-[16px] font-semibold mt-3 md:hidden block">
                  {data?.name.slice(0, 15)} ...
                </h1>
                <h1 className="text-[16px] font-semibold mt-3 md:block hidden">
                  {data?.name}
                </h1>
                <Link
                  to={`/properties/${data?.id}`}
                  className="btn btn-outline btn-sm text-white mt-3"
                >
                  Show Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProjectSection;
