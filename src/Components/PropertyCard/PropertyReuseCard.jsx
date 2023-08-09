import { Link } from "react-router-dom";

const PropertyReuseCard = ({ data }) => {
  return (
    <div className="card md:w-96 w-full h-[545px] bg-black hover:shadow-xl hover:shadow-cyan-600 duration-500 transition-all ease-in-out cursor-pointer rounded-none">
      <figure className="">
        <img className="max-w-[745px]" src={data?.img} alt={data?.name} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{data?.name}</h2>
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
