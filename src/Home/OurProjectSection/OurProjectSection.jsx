import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import UseData from "../../Components/Hooks/UseData";
const OurProjectSection = () => {
  const [datas] = UseData();
  return (
    <div id="choice" className="z-[0] relative md:pb-[55px] pb-[25px]">
      <h1 className="OurProjects text-center text-3xl font-semibold text-white md:my-[45px] my-[25px]">
        Our Projects
      </h1>
      <div className="max-w-7xl mx-auto md:px-0 px-[25px]">
        <Swiper
          className="rounded-lg p-8"
          effect="card"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          navigation={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {datas.map((data) => (
            <SwiperSlide className=" md:p-6 rounded-lg" key={data?.img}>
              <div className="md:p-5 md:shadow-[0_3px_12px_rgba(8,_112,_184,_0.7)] text-white">
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
