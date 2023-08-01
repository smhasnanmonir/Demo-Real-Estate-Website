import { useLoaderData } from "react-router-dom";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";

const PropertiesDetail = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="px-[50px] pb-8">
      <FloatingButton></FloatingButton>
      <div className="space-y-5">
        <div className="pt-[35px]">
          <img
            className="w-full h-[450px] object-cover mx-auto rounded-2xl"
            src={data.img}
            alt={data.id}
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold">{data?.name}</h1>
          <iframe
            className="w-full h-[250px] rounded-2xl"
            src={data?.iframe}
          ></iframe>
        </div>
        <div>
          <h1 className="text-[17px]">
            <span className="text-[18px] font-semibold">Description: </span>
            Green Living with urban lifestyle is no more a myth for tranquility
            mongers. The urban dwellers of Dhaka city are always dreaming for
            living accommodations accompanied by garden with plants, open spaces
            for wander, trees for oxygen and lakes for boating & fishing. A
            place belonging magic touch of green-living in an environment
            friendly community with complementary fresh & clean breathing air
            accompanied by caring & sharing neighbors throughout the year, is a
            dream coming true by the grace of heavenly initiative called
            Unveiling the imaginations of urban dwellers and introducing the
            eco-friendly environment,{" "}
            <span className="font-bold">{data?.name}</span> Town was developed
            with significant & dynamic aspects of green architecture which was
            meticulously planned and perfectly designed. The Best Brand of
            Living was flawlessly designed for the cream de la cream of
            societies finest. The architecture here is in creating spaces that
            interrelates, provokes and titillate the green senses. With the
            casual open layout, every composition of the architectural design
            exudes eminent and distinguished elegance.
          </h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 ">
          {data.insideImages.slice(0, 4).map((img) => (
            <div key={data.id}>
              <img
                className="rounded-2xl cursor-pointer transition-all ease-in-out duration-500 hover:scale-105 hover:z-10"
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetail;
