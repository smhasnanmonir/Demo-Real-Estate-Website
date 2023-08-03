import { useParams } from "react-router-dom";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import UseData from "../Hooks/UseData";

const PropertiesDetail = () => {
  const { id } = useParams();
  const [datas] = UseData();
  let dataPro = datas.filter((datas) => datas.id === id);
  const descriptionText = (
    <>
      <h1 className="text-[17px]">
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
    <div className="">
      <FloatingButton></FloatingButton>
      <div className="space-y-5 md:px-[50px] px-[25px] pb-8">
        <div className="pt-[35px]">
          <img
            className="w-10/12 mx-auto object-fit rounded-2xl"
            src={dataPro[0]?.img}
            alt={dataPro[0]?.id}
          />
        </div>
        <div className="space-y-5">
          <h1 className="md:text-3xl text-2xl font-semibold">
            {dataPro[0]?.name}
          </h1>
          <iframe
            className="w-full h-[310px] rounded-2xl"
            src={dataPro[0]?.iframe}
          ></iframe>
        </div>
        <div className="md:block hidden">{descriptionText}</div>
        <div className="md:hidden block">
          <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-black text-white">
              Click to show/hide description.
            </div>
            <div className="collapse-content bg-black">{descriptionText}</div>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-2 ">
          <img
            className="rounded-2xl cursor-pointer transition-all ease-in-out duration-500 hover:scale-105 hover:z-10"
            src={dataPro[0]?.insideImage1}
            alt=""
          />
          <img
            className="rounded-2xl cursor-pointer transition-all ease-in-out duration-500 hover:scale-105 hover:z-10"
            src={dataPro[0]?.insideImage3}
            alt=""
          />
          <img
            className="rounded-2xl cursor-pointer transition-all ease-in-out duration-500 hover:scale-105 hover:z-10"
            src={dataPro[0]?.insideImage4}
            alt=""
          />
          <img
            className="rounded-2xl cursor-pointer transition-all ease-in-out duration-500 hover:scale-105 hover:z-10"
            src={dataPro[0]?.insideImage2}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default PropertiesDetail;
