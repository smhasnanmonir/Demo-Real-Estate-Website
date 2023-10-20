import { useState } from "react";
import CoverPhoto from "./CoverPhoto";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/News.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="pb-[35px] bg-white text-black">
      <CoverPhoto datas="News"></CoverPhoto>
      <h1 className="uppercase font-light md:text-4xl text-2xl max-w-fit mx-auto border-b-2 border-cyan-600 pb-2 py-[25px]">
        Universe Group in the News
      </h1>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[12px] md:px-[45px] px-[25px] pt-[15px] place-items-center">
          {news.map((data) => (
            <div key={data?.id}>
              <div className="bg-base-100 shadow-xl">
                <img
                  className="h-full w-full object-cover"
                  src={data?.photo}
                  alt={data?.title}
                />

                <div className="card-body">
                  <h2 className="card-title text-black">{data?.title}</h2>
                  <p className="text-black">{data?.body.slice(0, 50)}...</p>
                  <div className="card-actions">
                    <Link to={`${data?.id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
