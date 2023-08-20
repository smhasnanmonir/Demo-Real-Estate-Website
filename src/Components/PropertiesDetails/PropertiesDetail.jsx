import React from "react";
import { useParams } from "react-router-dom";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import UseData from "../Hooks/UseData";
import school from "../../../src/assets/details/school.jpg";
import college from "../../../src/assets/details/college.jpg";
import university from "../../../src/assets/details/uni.jpg";
import hospital from "../../../src/assets/details/hospital.jpg";
import mall from "../../../src/assets/details/mall.jpg";
import mosque from "../../../src/assets/details/mosque.jpg";
import helipad from "../../../src/assets/details/helipad.jpg";
import gym from "../../../src/assets/details/gym.jpg";
import food from "../../../src/assets/details/food.jpg";
import convention from "../../../src/assets/details/convention.jpg";
import park from "../../../src/assets/details/park.jpg";
import field from "../../../src/assets/details/field.jpg";

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
import FormReuse from "../ContactForm/FormReuse/FormReuse";
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
    <div className="bgColorGray2  overflow-hidden ">
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
                    className="lg:h-[670px] md:h-[450px] h-[350px] object-cover w-screen overflow-hidden pointer-events-none"
                    src={slide}
                    alt=""
                  />
                </>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
      <h1 className="md:text-4xl bg-white text-center text-2xl font-semibold pt-6 md:px-[25px] md:py-[25px] py-[25px] px-[25px]">
        {dataPro[0]?.name.toUpperCase()}
      </h1>
      <div className="bg-black lg:py-[35px] text-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 place-items-center lg:px-[75px] md:px-[45px] px-[25px]">
        <div className="text-center">
          <h1>Location</h1>
          <p>
            {dataPro[0]?.location?.charAt(0).toUpperCase() +
              dataPro[0]?.location?.slice(1)}
          </p>
        </div>
        <div className="text-center">
          <h1>Plot Type</h1>
          <p>
            {dataPro[0]?.type1?.charAt(0).toUpperCase() +
              dataPro[0]?.type1?.slice(1)}{" "}
            &{" "}
            {dataPro[0]?.type2?.charAt(0).toUpperCase() +
              dataPro[0]?.type2?.slice(1)}
          </p>
        </div>
        <div className="text-center">
          <h1>Plot Size</h1>
          <p>3,5 & 10 Katha</p>
        </div>
        <div className="text-center">
          <h1>Completion Date</h1>
          <p>To be announced</p>
        </div>
        <div className="text-center">
          <h1>Status</h1>
          <p>
            {" "}
            {dataPro[0]?.phase?.charAt(0).toUpperCase() +
              dataPro[0]?.phase?.slice(1)}
          </p>
        </div>
      </div>
      {/* Overview and Spec */}
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#495057] lg:px-[45px] md:px-[35px] px-[25px] py-[45px] gap-[50px] text-white">
        <div className="space-y-3">
          <h1>Overview</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit
            sunt? Laborum quasi similique commodi nostrum aperiam eos at sequi
            inventore, fugiat consequatur sunt recusandae magni dolores amet.
            Nostrum, quo!
          </p>
          <button className="py-[7px] px-[45px] border-indigo-500 border-[2px]">
            Read More
          </button>
        </div>
        <div className="space-y-3">
          <h1>Specification</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            natus ut maxime facilis corrupti modi sunt illum cupiditate dolorum
            in dolor laudantium iusto hic, vel maiores eos nostrum eum qui? Iure
            officiis, recusandae ipsum quidem explicabo minus nulla? Accusamus
            aspernatur consequatur labore nesciunt blanditiis natus optio eaque,
            nostrum officia ex quos! Vel commodi laboriosam praesentium
            provident natus, a excepturi modi. Sapiente rerum cum, velit facere
            odio voluptatem atque nulla perferendis vel excepturi, accusamus.
          </p>
          <button className="py-[7px] px-[45px] border-indigo-500 border-[2px]">
            Read More
          </button>
        </div>
      </div>
      {/* Feature of the city */}
      <div className="">
        <h1 className="md:text-3xl text-2xl text-center py-[20px] font-semibold">
          Features of The City
        </h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-4 lg:px-[25px]">
          <div className="text-center">
            <img src={school} alt="" />
            <p className="py-2">School</p>
          </div>
          <div className="text-center">
            <img src={college} alt="" />
            <p className="pt-1">College</p>
          </div>
          <div className="text-center">
            <img src={university} alt="" />
            <p className="pt-1">University</p>
          </div>
          <div className="text-center">
            <img src={hospital} alt="" />
            <p className="pt-1">Hospital</p>
          </div>
          <div className="text-center">
            <img src={mall} alt="" />
            <p className="pt-1">Shopping Mall</p>
          </div>
          <div className="text-center">
            <img src={mosque} alt="" />
            <p className="pt-1">Mosque</p>
          </div>
          <div className="text-center">
            <img src={helipad} alt="" />
            <p className="pt-1">Helipad</p>
          </div>
          <div className="text-center">
            <img src={gym} alt="" />
            <p className="pt-1">Gym</p>
          </div>
          <div className="text-center">
            <img src={food} alt="" />
            <p className="pt-1">Food Court</p>
          </div>
          <div className="text-center">
            <img src={convention} alt="" />
            <p className="pt-1">Convention Center</p>
          </div>
          <div className="text-center">
            <img src={park} alt="" />
            <p className="pt-1">Park</p>
          </div>
          <div className="text-center">
            <img src={field} alt="" />
            <p className="pt-1">Field</p>
          </div>
        </div>
      </div>

      {/* Video Section */}

      <>
        <iframe
          className="w-full h-[550px] pt-[30px]"
          src="https://www.youtube.com/embed/y9j-BL5ocW8"
          title="Cinematic Real estate video tour example 4K | Laowa 12mm &amp; Sony A7III"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </>

      {/* Location */}
      <>
        <iframe
          className="w-full h-[450px] md:order-2 md:mb-0 mb-[25px]"
          src={dataPro[0]?.iframe}
        ></iframe>
      </>
      {/* Form */}
      <div>
        <FormReuse></FormReuse>
      </div>
    </div>
  );
};

export default PropertiesDetail;
