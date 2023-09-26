import location from "../../assets/DSIcon/location.png";
import blueprint from "../../assets/DSIcon/blueprint.png";
import brochure from "../../assets/DSIcon/brochure.png";
import doubleTap from "../../assets/DSIcon/doubletap.png";
import material from "../../assets/DSIcon/material.png";
import pencilandruler from "../../assets/DSIcon/pencil-and-ruler.png";
import choice from "../../assets/DSIcon/choice.png";
import brochureDream from "../../assets/brochure/Dream's-Paradise-Brochure.pdf";
const ScrollDownToComp = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-[4px] md:max-w-5xl md:px-0 px-[5%] mx-auto py-[35px]">
      <div
        onClick={() => {
          const anchor = document.querySelector("#glance");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#4a4f56] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <img className="w-[120px]" src={pencilandruler} alt="" />
        <h1 className="uppercase text-white mt-[15px]">At a glance</h1>
      </div>
      <div
        onClick={() => {
          const anchor = document.querySelector("#features");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#aaa8885b] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <img className="w-[120px]" src={material} alt="" />
        <h1 className="uppercase text-white mt-[15px]">features</h1>
      </div>
      <div
        onClick={() => {
          const anchor = document.querySelector("#experience");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#4a4f56] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <img className="w-[120px]" src={doubleTap} alt="" />
        <h1 className="uppercase text-white mt-[15px]">experience</h1>
      </div>
      <a
        href={brochureDream}
        target="blank"
        className="bg-[#aaa8885b] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <div className="">
          <img className="w-[120px]" src={brochure} alt="" />
          <h1 className="uppercase text-white mt-[15px]">brochure</h1>
        </div>
      </a>
      <div
        onClick={() => {
          const anchor = document.querySelector("#floorPlan");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#4a4f56] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <img className="w-[120px]" src={blueprint} alt="" />
        <h1 className="uppercase text-white mt-[15px]">Floor Plan</h1>
      </div>
      <div className="bg-[#aaa8885b]   ease-in grid place-items-center md:py-[45px] py-[25px]">
        <img className="w-[120px]" src="" alt="" />
        <h1 className="uppercase text-white mt-[15px]"></h1>
      </div>
      <div
        onClick={() => {
          const anchor = document.querySelector("#location");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#4a4f56] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <img className="w-[120px]" src={location} alt="" />
        <h1 className="uppercase text-white mt-[15px]">Map</h1>
      </div>
      <div
        onClick={() => {
          const anchor = document.querySelector("#choice");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#aaa8885b] hover:bg-slate-700 transition-all duration-300 cursor-pointer ease-in grid place-items-center md:py-[45px] py-[25px]"
      >
        <img className="w-[120px]" src={choice} alt="" />
        <h1 className="uppercase text-white mt-[15px]">More Choice</h1>
      </div>
    </div>
  );
};

export default ScrollDownToComp;
