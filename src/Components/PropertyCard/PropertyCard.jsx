import { Link } from "react-router-dom";
import UseData from "../Hooks/UseData";

const PropertyCard = () => {
  const [datas] = UseData();
  console.log(datas);
  return (
    <>
      <h1 className="font-semibold text-center text-2xl py-8">
        Our Properties
      </h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 md:pb-[70px] pb-[35px] md:px-[30px] px-[25px] overflow-hidden ">
        {datas.map((data) => (
          <div key={data.id}>
            <div className="card md:w-96 w-[345px] bg-black hover:shadow-xl hover:shadow-cyan-600 duration-500 transition-all ease-in-out cursor-pointer">
              <figure>
                <img src={data?.img} alt={data?.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data?.name}</h2>
                <div className="card-actions justify-start mt-2 ">
                  <Link
                    className="btn btn-outline text-white border-white hover:text-red-400"
                    to={`/properties/${data?.id}`}
                  >
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyCard;
