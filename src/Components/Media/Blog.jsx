import { useEffect } from "react";
import { useState } from "react";
import CoverPhoto from "./CoverPhoto";
import { Link } from "react-router-dom";
import UseMedia from "../Hooks/UseMedia";

const Blog = () => {
  const [medias] = UseMedia();
  const blogs = medias.filter((media) => media.category == "blog");
  return (
    <div className="bg-white text-black pb-[35px] ">
      <CoverPhoto datas="Blog"></CoverPhoto>
      <div className="md:px-0 px-[35px]">
        <div className="space-y-3 text-center md:py-[35px] py-[25px]">
          <h1 className="md:text-4xl text-2xl font-light">
            Explore the Latest Trends in Real Estate Industry With Universe Blog
          </h1>
          <p className="font-light">
            Universe Blog is a value-adding real estate blog in Bangladesh,
            covering the global and local industry trends, contemporary real
            estate-related topics, concerning researches, etc.
          </p>
          <p className="font-light text-cyan-600 max-w-fit border-b-2 border-cyan-600 mx-auto pb-2">
            Keep in touch with us for interesting articles
          </p>
        </div>
        <div className="max-w-5xl mx-auto space-y-[15px]">
          {blogs.map((blog) => (
            <div key={blog?.id} className="shadow-md shadow-slate-200">
              <div className="flex items-center gap-7">
                <div>
                  <img
                    className="w-[250px] h-full object-cover"
                    src={blog?.photo}
                    alt=""
                  />
                </div>
                <div className="space-y-[12px]">
                  <h1 className=" text-cyan-700">{blog?.title}</h1>
                  <p>{blog?.body.slice(0, 50)}...</p>
                  <button>
                    <Link
                      to={`${blog?.id}`}
                      className="uppercase text-cyan-700"
                    >
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
