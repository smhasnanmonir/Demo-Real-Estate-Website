import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseMedia from "../Hooks/UseMedia";
import CoverPhoto from "./CoverPhoto";

const Events = () => {
  const [medias] = UseMedia();
  const events = medias.filter((media) => media.category == "events");
  return (
    <div className="bg-white text-black pb-[35px]">
      <CoverPhoto datas="Events"></CoverPhoto>
      <h1 className="uppercase md:text-4xl text-2xl font-light pt-[25px] max-w-fit mx-auto border-b-2 border-cyan-400">
        Events of Assure Group
      </h1>
      <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[12px] md:px-[45px] px-[25px] pt-[15px] place-items-center ">
        {events.map((data) => (
          <Link to={`${data?.id}`} className="cursor-pointer" key={data?.id}>
            <div>
              <div className="bg-base-100 shadow-xl">
                <img
                  className="h-full w-full object-cover"
                  src={data?.photo}
                  alt={data?.title}
                />

                <div className="card-body">
                  <h2 className="card-title text-black">{data?.title}</h2>
                  <p className="text-black">{data?.body.slice(0, 50)}...</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
