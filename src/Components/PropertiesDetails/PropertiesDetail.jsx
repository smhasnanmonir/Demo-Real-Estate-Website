import React from "react";
import { useParams } from "react-router-dom";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import UseData from "../Hooks/UseData";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import "./projectswiper.css";
const PropertiesDetail = () => {
  const { id } = useParams();
  const [datas] = UseData();
  let dataPro = datas.filter((datas) => datas.id === id);
  const descriptionText = (
    <>
      <h1 className="text-[17px] text-black ">
        <span className="text-[18px] font-semibold">Description: </span>
        Green Living with urban lifestyle is no more a myth for tranquility
        mongers. The urban dwellers of Dhaka city are always dreaming for living
        accommodations accompanied by garden with plants, open spaces for
        wander, trees for oxygen and lakes for boating & fishing. A place
        belonging magic touch of green-living in an environment friendly
        community with complementary fresh & clean breathing air accompanied by
        caring & sharing neighbors throughout the year, is a dream coming true
        by the grace of heavenly initiative called Unveiling the imaginations of
        urban dwellers and introducing the eco-friendly environment,{" "}
        <span className="font-bold">{dataPro[0]?.name}</span> Town was developed
        with significant & dynamic aspects of green architecture which was
        meticulously planned and perfectly designed. The Best Brand of Living
        was flawlessly designed for the cream de la cream of societies finest.
        The architecture here is in creating spaces that interrelates, provokes
        and titillate the green senses. With the casual open layout, every
        composition of the architectural design exudes eminent and distinguished
        elegance.
      </h1>
    </>
  );
  return (
    <div className="bgColorGray2 md:pb-[65px] pb-[30px] overflow-hidden ">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        spaceBetween={350}
        navigation={true}
        pagination={{ clickable: false }}
        autoplay={{ delay: 2500 }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
      >
        <div className="w-screen">
          {dataPro[0]?.slideshow.map((slide, i) => (
            <div key={i}>
              <SwiperSlide>
                <>
                  <img
                    className="lg:h-[650px] md:h-[450px] h-[350px] object-cover w-screen overflow-hidden pointer-events-none"
                    src={slide}
                    alt=""
                  />
                </>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
      <div className="md:px-[45px] px-[25px] mt-4 flex flex-col gap-y-[25px]">
        <div className="space-y-5">
          <h1 className="md:text-3xl text-2xl font-semibold">
            {dataPro[0]?.name}
          </h1>
          <iframe
            className="w-full h-[310px] rounded-2xl border-[1px] border-black"
            src={dataPro[0]?.iframe}
          ></iframe>
        </div>
        <div className="">{descriptionText}</div>
      </div>
    </div>
  );
};

export default PropertiesDetail;
