import { Link } from "react-router-dom";

const PropertyReuseCard = ({ data }) => {
  return (
    <div className="col-span-1 relative card max-w-[350px] mx-auto mb-[10px] h-[430px] bg-black hover:shadow-xl hover:shadow-cyan-600 duration-500 transition-all ease-in-out cursor-pointer rounded-none overflow-hidden">
      <img
        className="w-full h-full object-cover hover:scale-105 hover:overflow-hidden max-w-full block duration-500 transition-all ease-in"
        src={data?.img}
        alt={data?.name}
      />

      <div className="card-body">
        <h2 className="card-title text-white">{data?.name}</h2>
        <div className="card-actions justify-start mt-2 ">
          <Link
            className="btn btn-outline text-white border-white hover:text-red-400 rounded-none"
            to={`/properties/${data?.id}`}
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyReuseCard;
