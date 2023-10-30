import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BussinessDetailsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [side, setSide] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/monirsmtest/api-for-web/main/business-api.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      });
  }, [id]);
  const filteredData = datas.find((data) => data?.id == id);

  useEffect(() => {
    if (filteredData?.numberId % 2 == 0) {
      setSide(true);
    } else {
      setSide(false);
    }
  }, [filteredData]);

  const dynamicStyles = {
    flexDirection: side ? "row" : "row-reverse",
  };

  return (
    <div>
      {loading ? (
        <div className="grid min-h-screen place-content-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="bg-white text-black ">
          <div className="relative">
            <img
              className="w-full md:h-full h-[350px] object-cover brightness-[25%]"
              src={filteredData?.cover}
              alt={filteredData?.id}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="md:text-3xl text-xl font-semibold text-white">
                {filteredData?.company_name}
              </h1>
            </div>
          </div>
          <div style={dynamicStyles} className="md:flex w-full">
            <div className="md:w-1/2 space-y-4 py-[35px] md:px-[5%] px-[9%] h-fit mx-auto my-auto">
              <h1 className="md:text-3xl text-xl font-semibold underline underline-offset-[5px] pb-[2%]">
                {filteredData?.company_name}
              </h1>
              {filteredData?.description?.map((des, i) => (
                <div key={i}>
                  <h1>{des?.para}</h1>
                </div>
              ))}
            </div>
            <div className="md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src={filteredData?.inner_img}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BussinessDetailsPage;
