import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const BusinessPage = () => {
  const [busiData, setBusiData] = useState([]);
  useEffect(() => {
    fetch("/BusinessData.json")
      .then((res) => res.json())
      .then((data) => setBusiData(data));
  }, []);
  console.log;
  return (
    <div className="bg-white text-black">
      <div className="max-w-6xl md:px-0 px-[5%] mx-auto">
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
                <img className="w-1/2 mx-auto" src={busi?.img} alt="logo1" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <h1 className="text-2xl font-semibold py-[25px]">Universe Group</h1>
          <p className="py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, ducimus voluptas veniam nulla libero voluptatem nam est
            accusamus impedit ratione eligendi doloribus! Deserunt voluptatem
            enim unde doloribus similique ipsum nemo! Eum, odit dignissimos rem
            quam eius, nostrum soluta maiores sed alias enim non! Accusamus
            perferendis rem provident magni repudiandae non praesentium
            reiciendis, voluptas obcaecati, assumenda debitis, modi aliquam quia
            laudantium? Vel eveniet non alias aliquam, soluta nemo voluptate
            ipsum provident optio rem voluptas cupiditate architecto eaque!
            Libero dicta rerum, hic repellat amet ut illo quod earum, provident
            minus nulla deleniti. Molestiae possimus omnis excepturi vel
            corrupti cupiditate exercitationem accusantium dicta repellat optio
            ratione placeat nostrum necessitatibus, facere obcaecati eaque eum.
            Blanditiis vero quis voluptatem odit iusto, ullam itaque ipsa eum.
            Repellat et dolor ratione minima, dicta harum distinctio ut cum
            dignissimos assumenda repudiandae officia suscipit obcaecati,
          </p>
        </div>
        <div className="max-w-3xl mx-auto py-[30px]">
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
            slidesPerView={3}
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
                  <img className="w-3/4" src={busi?.img} alt="logo1" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
