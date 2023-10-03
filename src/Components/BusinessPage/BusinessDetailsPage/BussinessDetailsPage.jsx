import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const BusinessDetailsPage = () => {
  const { id } = useParams();
  const [busiData, setBusiData] = useState([]);
  useEffect(() => {
    fetch("/BusinessData.json")
      .then((res) => res.json())
      .then((data) => setBusiData(data));
  }, []);
  const singleData = busiData?.find((data) => data?.id == id);
  console.log(singleData);
  return (
    <div className=" bg-white text-black">
      <div className="md:flex md:gap-[50px] md:w-3/4 w-full md:px-0 px-[5%] mx-auto md:pt-[65px] py-[35px] text-black items-center">
        <div className="md:pb-0 pb-[25px]">
          <img src={singleData?.img} alt="" />
        </div>
        <div>
          <h1 className="md:text-4xl text-2xl underline underline-offset-[10px] pb-[20px]">
            About our Company
          </h1>
          <h1>{singleData?.description}</h1>
          <h1>{singleData?.description}</h1>
          <h1>{singleData?.description}</h1>
        </div>
      </div>
      <div className="md:w-1/2 w-3/4 mx-auto pb-[45px]">
        <h1 className="uppercase text-2xl md:py-[35px] py-[25px] text-center">
          Our Other Business
        </h1>
        <Swiper
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2}
          loop={true}
          className="mySwiper"
        >
          {busiData?.map((busi, i) => (
            <SwiperSlide key={i}>
              <Link
                className="cursor-pointer"
                to={`/business/details/${busi?.id}`}
                key={i}
              >
                <img src={busi?.img} alt="logo1" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
