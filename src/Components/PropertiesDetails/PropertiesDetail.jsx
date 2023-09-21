import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
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
import brochure from "../../../src/assets/brochure/brochure-left.jpg";
import book from "../../../src/assets/brochure/book-brochure.jpg";

import addressIcon from "../../../src/assets/ProDetIcon/maps-and-flags.png";
import plotIcon from "../../../src/assets/ProDetIcon/plot.png";
import apartmentIcon from "../../../src/assets/ProDetIcon/apartment.png";
import calenderIcon from "../../../src/assets/ProDetIcon/calendar.png";
import buildingIcon from "../../../src/assets/ProDetIcon/building.png";
import bathroomIcon from "../../../src/assets/ProDetIcon/bathroom.png";
import bedroomIcon from "../../../src/assets/ProDetIcon/sleep.png";
import collectionIcon from "../../../src/assets/ProDetIcon/collection.png";
import planIcon from "../../../src/assets/ProDetIcon/plan.png";
import roomIcon from "../../../src/assets/ProDetIcon/living-room.png";

import dreamsCover from "../../../src/assets/Dreams/3D stractural View.jpg";

import floor1 from "../../../src/assets/FloorPlan/1.jpg";
import floor2 from "../../../src/assets/FloorPlan/2.jpg";
import floor3 from "../../../src/assets/FloorPlan/3.jpg";
import floor4 from "../../../src/assets/FloorPlan/4.jpg";
import floor5 from "../../../src/assets/FloorPlan/5.jpg";
import floor6 from "../../../src/assets/FloorPlan/6.jpg";

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
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "block",
      zIndex: "99",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setIsOpen1(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  const { id } = useParams();
  const [datas] = UseData();
  let dataPro = datas.filter((datas) => datas.id === id);

  const descriptionText = (
    <>
      <div className="text-white space-y-3">
        <h1 className="text-[24px] font-light">Project Overview</h1>
        <h1 className="text-[18px] font-light text-[#e9ecef]">
          Green Living with urban lifestyle is no more a myth for tranquility
          mongers. The urban dwellers of Dhaka city are always dreaming for
          living accommodations accompanied by garden with plants, open spaces
          for wander, trees for oxygen and lakes for boating & fishing. A place
          belonging magic touch of green-living in an environment friendly
          community with complementary fresh & clean breathing air accompanied
          by caring & sharing neighbors throughout the year, is a dream coming
          true by the grace of heavenly initiative called Unveiling the
          imaginations of urban dwellers and introducing the eco-friendly
          environment, <span className="font-bold">{dataPro[0]?.name}</span>{" "}
          Town was developed with significant & dynamic aspects of green
          architecture which was meticulously planned and perfectly designed.
          The Best Brand of Living was flawlessly designed for the cream de la
          cream of societies finest. The architecture here is in creating spaces
          that interrelates, provokes and titillate the green senses. With the
          casual open layout, every composition of the architectural design
          exudes eminent and distinguished elegance.
        </h1>
      </div>
    </>
  );
  return (
    <div className="bgColorGray2  overflow-hidden bg-[#1d1d21]">
      {id !== "Dreams-Paradise" && (
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
          <div className="w-screen -z-[50] relative">
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
      )}
      {id == "Dreams-Paradise" && (
        <div className="w-3/4 mx-auto">
          <img className="mx-auto" src={dreamsCover} alt="" />
          <h1 className="md:text-3xl text-2xl py-[25px] text-white font-semibold">
            Dream's paradise
          </h1>
        </div>
      )}

      {id != "Dreams-Paradise" && (
        <h1 className="md:text-4xl bg-white text-center text-2xl font-semibold pt-6 md:px-[25px] md:py-[25px] py-[25px] px-[25px]">
          {dataPro[0]?.name.toUpperCase()}
        </h1>
      )}

      <div className="bg-[#1d1d21] w-3/4 mx-auto  md:py-[35px] py-[25px] lg:py-[15px]">
        <div className=" text-white md:py-[28px] py-[15px] lg:py-[35px] grid lg:grid-cols-5 gap-y-[15px] place-items-center border-y-[1px] border-white">
          <div className="text-center">
            <h1 className="font-light">Location</h1>
            <p className="font-medium">
              {dataPro[0]?.location?.charAt(0).toUpperCase() +
                dataPro[0]?.location?.slice(1)}
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-light">Plot Type</h1>
            <p className="font-medium">
              {dataPro[0]?.type1?.charAt(0).toUpperCase() +
                dataPro[0]?.type1?.slice(1)}{" "}
              &{" "}
              {dataPro[0]?.type2?.charAt(0).toUpperCase() +
                dataPro[0]?.type2?.slice(1)}
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-light">Apartment Size</h1>
            <p className="font-medium">{dataPro[0]?.apartmentSize}</p>
          </div>
          <div className="text-center">
            <h1 className="font-light">Completion Date</h1>
            <p className="font-medium">{dataPro[0]?.CompletionDate}</p>
          </div>
          <div className="text-center">
            <h1 className="font-light">Status</h1>
            <p className="font-medium">
              {" "}
              {dataPro[0]?.phase?.charAt(0).toUpperCase() +
                dataPro[0]?.phase?.slice(1)}
            </p>
          </div>
        </div>
      </div>
      {id == "Dreams-Paradise" && (
        <div className="bg-white text-black md:px-0 px-[5%] py-[35px] border-b-2 border-black">
          <div className="md:w-3/4 mx-auto md:flex md:gap-8 items-center">
            <h1 className="md:text-3xl text-2xl font-FontCroissant md:pb-0 pb-2">
              Dream's paradise
            </h1>
            <p className="md:w-3/4">
              Dream's paradise - Blessed with the incredible number of
              conveniences in West dhanmondi, Dream's paradise is a love letter
              to refined luxury living. The home dictates amazing spaciousness,
              open surroundings, and charming architectural details primed with
              greenery. The confluence of light and breeze around the home makes
              it perfectly comfortable. Dream's paradise features 1550+ sft
              luxurious units prepped with Smart Home features to add extra
              coziness to your home. Optimized parking spaces, grand
              double-height entrance, a lavish 'Meet & Greet' lounge,
              beautifully landscaped rooftop further add to the functionality of
              this premium home.
            </p>
          </div>
        </div>
      )}
      {/* At a glance starts */}
      {id == "Dreams-Paradise" && (
        <div className="bg-white grid md:grid-cols-2 grid-cols-1 md:px-[150px] px-[25px] py-[50px] gap-[35px]">
          <div>
            <img
              className="object-cover w-full h-full"
              src={dataPro[0]?.img}
              alt=""
            />
          </div>
          <table className="border-collapse border border-slate-400">
            <tbody className="">
              <tr className="">
                <td className="border border-slate-300  p-3">
                  <div className="flex items-center  gap-2">
                    <img src={addressIcon} alt="" />
                    <p>Address</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.address}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300  p-3">
                  <div className="flex items-center  gap-2">
                    <img src={plotIcon} alt="" />
                    <p>Land Area</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.landArea}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={buildingIcon} alt="" />
                    <p> No. of floors</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.floors}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={apartmentIcon} alt="" />
                    <p> Apartment/Floor</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.apartments}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={roomIcon} alt="" />
                    <p> Apartment Size</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.apartmentSize}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={bedroomIcon} alt="" />
                    <p> Bedrooms</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.bedroom}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={bathroomIcon} alt="" />
                    <p> Bathrooms</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.bathroom}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={calenderIcon} alt="" />
                    <p> Lunch Date</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.CompletionDate}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3">
                  <div className="flex items-center  gap-2">
                    <img src={collectionIcon} alt="" />
                    <p> Collections</p>
                  </div>
                </td>
                <td className="border border-slate-300 text-right p-3">
                  {dataPro[0]?.collection}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* At a glance ends */}
      {/* Swiper for dreams paradise starts */}
      {id == "Dreams-Paradise" && (
        <div className="py-[5px] pb-[10px]">
          <h1 className="uppercase py-[35px] text-white pl-[10%] md:text-3xl text-2xl">
            Features
          </h1>
          <div>
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
              autoplay={false}
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
              <div className="w-screen -z-[50] relative">
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
          </div>
        </div>
      )}
      {/* Swiper for dreams paradise ends*/}

      {/* Floor plan for dreams paradise starts*/}
      {id == "Dreams-Paradise" && (
        <div className="md:w-3/4 mx-auto md:px-0 px-[10%] pb-[5%]">
          <h1 className="uppercase md:text-3xl text-2xl md:py-[45px] py-[25px] text-white">
            Floor Plans
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            <img
              className="cursor-zoom-in hover:scale-110 transition-all duration-300 ease-linear hover:border-[8px] border-cyan-200"
              src={floor1}
              alt=""
            />
            <img
              className="cursor-zoom-in hover:scale-110 transition-all duration-300 ease-linear hover:border-[8px] border-cyan-200"
              src={floor2}
              alt=""
            />
            <img
              className="cursor-zoom-in hover:scale-110 transition-all duration-300 ease-linear hover:border-[8px] border-cyan-200"
              src={floor3}
              alt=""
            />
            <img
              className="cursor-zoom-in hover:scale-110 transition-all duration-300 ease-linear hover:border-[8px] border-cyan-200"
              src={floor4}
              alt=""
            />
            <img
              className="cursor-zoom-in hover:scale-110 transition-all duration-300 ease-linear hover:border-[8px] border-cyan-200"
              src={floor5}
              alt=""
            />
            <img
              className="cursor-zoom-in hover:scale-110 transition-all duration-300 ease-linear hover:border-[8px] border-cyan-200"
              src={floor6}
              alt=""
            />
          </div>
        </div>
      )}
      {/* Floor plan for dreams paradise ends*/}

      {/* Overview and Spec */}

      {id != "Dreams-Paradise" && (
        <div className="grid lg:grid-cols-2 grid-cols-1 border-y-[3px] border-black bg-[#212529] lg:px-[45px] md:px-[35px] px-[55px] lg:py-[105px] py-[65px] gap-[50px] text-white">
          <div className="space-y-5 w-11/12  lg:border-r-[2px] border-white lg:border-b-[0px] border-b-[2px] pb-[35px]">
            <h1 className="md:text-3xl text-2xl text-[#daa520]">Overview</h1>
            <p className="md:w-3/4 text-xl font-thin">
              Green Living with urban lifestyle is no more a myth for
              tranquility mongers. The urban dwellers of Dhaka city are always
              dreaming of living accommodations accompanied by gardens with
              plants, open spaces for wandering, trees for oxygen and lakes for
              boating & fishing..............
            </p>
            <Modal
              className=""
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button
                className="btn btn-circle btn-outline lg:btn-md btn-sm absolute md:left-[94%] lg:left-[95%] left-[85%] top-2 text-white"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <form className=" w-full max-h-[70vh] mx-auto lg:py-[75px] md:py-[65px] py-[55px] grid place-items-center p-0 m-0 -z-10 text-white">
                <p className="">{descriptionText}</p>
              </form>
            </Modal>
            <button
              onClick={openModal}
              className="px-[35px] py-[7px] text-white border-[2px] border-white hover:bg-black hover:text-white transition-all ease-in delay-100 duration-300"
            >
              Read More
            </button>
            <Modal
              className=""
              isOpen={modalIsOpen1}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal1}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button
                className="btn btn-circle btn-outline lg:btn-md btn-sm absolute md:left-[94%] lg:left-[95%] left-[85%] top-2 text-white"
                onClick={closeModal1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <form className="w-full max-h-[70vh] mx-auto lg:py-[55px] md:py-[45px] py-[35px] p-0 m-0 -z-10 text-white ">
                <p className="text-[18px] pb-[15px]">
                  Welcome to{" "}
                  <span className="font-semibold">{dataPro[0]?.name}</span>, an
                  exceptional land development project brought to you by the
                  Universe Group. With meticulous planning, attention to detail,
                  and a commitment to creating vibrant communities, this project
                  embodies our dedication to excellence in real estate.
                </p>
                <p className="text-[16px] pb-[15px]">
                  {dataPro[0]?.locationText}
                </p>
                <div className="pb-[15px]">
                  <h1 className="text-xl font-semibold">
                    Legal and Regulatory Compliance
                  </h1>
                  <p className="text-[16px]">
                    All necessary permits and approvals have been obtained in
                    compliance with local regulations.
                  </p>
                </div>
                <div className="pb-[15px]">
                  <h1 className="text-xl font-semibold">
                    Booking and Inquiries
                  </h1>
                  <p className="text-[16px]">
                    For booking inquiries and more information, please contact
                    us.
                  </p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    Experience a New Universe of Possibilities
                  </h1>
                  <p className="text-[16px]">
                    <span className="">{dataPro[0]?.name}</span> invites you to
                    be a part of its journey. Whether you're seeking a space to
                    build your dream home, an investment opportunity, or a
                    chance to contribute to a thriving community, this project
                    promises a universe of possibilities. Join us in shaping the
                    future of Urban Residency
                  </p>
                </div>
              </form>
            </Modal>
          </div>
          <div className="space-y-3">
            <div className=" space-y-5">
              <h1 className="md:text-3xl text-2xl text-[#daa520]">
                Specification
              </h1>
              <ul className="pb-[10px]">
                <li className="text-xl">
                  <span className="innerText">{dataPro[0]?.situated}</span>
                </li>
                <li className="text-xl">
                  <span className="innerText">
                    Legal and Regulatory Compliance
                  </span>
                </li>
                <li className="text-xl">
                  <span className="innerText">
                    Experience a New Universe of Possibilities
                  </span>
                </li>
              </ul>
              <button
                onClick={openModal1}
                className="px-[35px] py-[7px] text-white border-[2px] border-white hover:bg-black hover:text-white transition-all ease-in delay-100 duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Feature of the city */}
      {id != "Dreams-Paradise" && (
        <div className="px-[25px] bg-white pb-[25px]">
          <h1 className="md:text-3xl text-2xl text-center   py-[20px] font-semibold">
            Features of The Project
          </h1>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-4 lg:px-[25px]">
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={school} alt="" />
              <p className="py-2">School</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={college} alt="" />
              <p className="pt-1">College</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={university} alt="" />
              <p className="pt-1">University</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={hospital} alt="" />
              <p className="pt-1">Hospital</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={mall} alt="" />
              <p className="pt-1">Shopping Mall</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={mosque} alt="" />
              <p className="pt-1">Mosque</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={helipad} alt="" />
              <p className="pt-1">Helipad</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={gym} alt="" />
              <p className="pt-1">Gym</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={food} alt="" />
              <p className="pt-1">Food Court</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={convention} alt="" />
              <p className="pt-1">Convention Center</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={park} alt="" />
              <p className="pt-1">Park</p>
            </div>
            <div className="text-center hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in">
              <img src={field} alt="" />
              <p className="pt-1">Field</p>
            </div>
          </div>
        </div>
      )}

      {/* Brochure */}
      {id != "Dreams-Paradise" && (
        <div className="bg-white grid lg:grid-cols-2 grid-cols-1 border-t-[3px] border-black w-full h-full">
          <div className="relative">
            <img
              className="brightness-50 w-full md:h-[550px] h-[450px] object-cover"
              src={brochure}
              alt=""
            />
            <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 space-y-[20px] ">
              <h1 className="text-[#daa520] md:text-3xl text-xl">
                Plot Booking
              </h1>
              <p className="text-white text-xl">Regulation</p>
              <p className="text-white text-xl">
                Welcome to{" "}
                <span className="font-semibold">{dataPro[0]?.name}</span>! We
                are excited to have you as a potential plot buyer. To ensure a
                smooth and transparent process, we have established the
                following plot booking regulations.
              </p>
              <button
                onClick={openModal2}
                className="px-[35px] py-[7px] text-white border-[2px] border-white hover:bg-black hover:text-white transition-all ease-in delay-100 duration-300"
              >
                Read More
              </button>
            </div>
            <Modal
              className=""
              isOpen={modalIsOpen2}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal2}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button
                onClick={closeModal2}
                className="btn btn-circle btn-outline lg:btn-md btn-sm absolute md:left-[94%] lg:left-[95%] left-[85%] top-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <form className="w-full max-h-[70vh] max-w-[80vw] mx-auto lg:py-[55px] md:py-[45px] py-[35px] p-0 m-0 -z-10 text-white ">
                <div className="space-y-[13px] pb-[13px]">
                  <h1>
                    Welcome to Mayakunjo Model Town! We are excited to have you
                    as a potential plot buyer. To ensure a smooth and
                    transparent process, we have established the following plot
                    booking regulations
                  </h1>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">
                      1. Booking Process:
                    </h1>
                    <p>
                      Prospective buyers are required to fill out a booking form
                      provided by the Universe Group. A booking fee of 1,00,000
                      is required to secure a plot. This fee is non-refundable
                      and will be deducted from the total plot cost upon
                      purchase.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">
                      2. Plot Selection:
                    </h1>
                    <p>
                      Plots will be allocated on a first-come, first-served
                      basis. Buyers will have the opportunity to choose their
                      preferred plot location based on availability at the time
                      of booking.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">3. Documentation:</h1>
                    <p>
                      Buyers must provide valid identification and complete all
                      necessary documentation required by local regulations. A
                      signed copy of the booking form and terms and conditions
                      is mandatory.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">
                      4. Payment Schedule:
                    </h1>
                    <p>
                      The booking fee is payable at the time of booking. A
                      percentage of the total plot cost (as outlined in the
                      payment schedule) must be paid within 30 days of the
                      booking date to secure the plot. Failure to do so may
                      result in the plot being released for resale.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">
                      5. Payment Methods:
                    </h1>
                    <p>
                      Payments can be made through accepted modes as specified
                      by the Universe Group. Cash, cheques or bank transfers are
                      preferred.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">
                      6. Transfer of Ownership:
                    </h1>
                    <p>
                      The plot's ownership transfer will take place upon the
                      full payment of the plot cost. The Universe Group will
                      facilitate the legal transfer process and provide all
                      necessary documentation.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">
                      7. Resale of Plots:
                    </h1>
                    <p>
                      Buyers interested in reselling their plots before full
                      payment must inform the Universe Group in writing. A
                      resale fee may apply. The Universe Group reserves the
                      right to approve or disapprove plot resale.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">8. Refund Policy:</h1>
                    <p>The booking fee is non-refundable.</p>
                    <p>
                      In case of cancellation after the initial payment, refund
                      policies will be as per local regulations and the terms
                      outlined in the booking form.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">9. Timeline:</h1>
                    <p>
                      Buyers are expected to adhere to the payment schedule and
                      timeline specified in the booking form.
                    </p>
                    <p>
                      Delays in payment beyond the stipulated period may result
                      in the cancellation of the booking.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">10. Disclaimer:</h1>
                    <p>
                      The Universe Group reserves the right to amend these
                      regulations, terms, and conditions as necessary. All
                      changes will be communicated to buyers in writing.
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <h1 className="text-xl font-semibold">Contact Us:</h1>
                    <p>
                      If you have any questions or concerns regarding the plot
                      booking regulations or the booking process, please don't
                      hesitate to reach out to our customer service team or
                      Hotline.
                    </p>
                  </div>
                </div>
              </form>
            </Modal>
          </div>
          <div className="relative">
            <img
              className="w-full lg:h-full h-[450px] object-cover brightness-50 "
              src={book}
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <a
                className="px-[75px] py-[10px] text-white border-[2px] border-white hover:bg-black hover:text-white transition-all ease-in delay-100 duration-300"
                href={dataPro[0]?.brochure}
                target="blank"
              >
                <button className="md:text-xl text-[16px]">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Video Section */}
      {id != "Dreams-Paradise" && (
        <div className="bg-white">
          <h1 className="text-center  font-semibold md:text-3xl text-2xl lg:py-[35px] py-[25px]">
            Video Section
          </h1>
          <iframe
            className="w-full h-[550px]"
            src="https://www.youtube.com/embed/y9j-BL5ocW8"
            title="Cinematic Real estate video tour example 4K | Laowa 12mm &amp; Sony A7III"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {/* Location */}
      <div className="bg-white">
        <h1 className="text-center  font-semibold md:text-3xl text-2xl lg:py-[35px] py-[25px]">
          Project Location
        </h1>
        <iframe
          className="w-full h-[450px] md:order-2 md:mb-0"
          src={dataPro[0]?.iframe}
        ></iframe>
      </div>
      {/* Form */}
      <div>
        <FormReuse></FormReuse>
      </div>
    </div>
  );
};

export default PropertiesDetail;
