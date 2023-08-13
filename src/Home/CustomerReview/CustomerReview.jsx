import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/customerReview.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-semibold text-center pt-[30px]">
        Customer Reviews
      </h1>
      <div className=" text-white px-[25px] md:px-[50px] mb-[25px]">
        <Swiper
          className="rounded-lg p-8"
          effect="card"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
            EffectCoverflow,
          ]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review?.id}>
              <div className="">
                <div className="flex lg:px-[250px] md:px-[50px] px-[35px]">
                  <div className="border-l-[5px] border-blue-300 mt-[35px]">
                    <div className="ml-5">
                      <img
                        className="w-[64px]"
                        src="https://i.imgur.com/N8LfvpO.png"
                        alt=""
                      />
                      <p className="text-2xl font-bold mb-2">{review?.title}</p>
                      <p className="text-[18px]">{review?.review}</p>
                      <img
                        className="w-[75px]"
                        src="https://i.ibb.co/tp7xsBc/travel.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CustomerReview;
