import { Link } from "react-router-dom";

const PropertyReuseCard = ({ data }) => {
  return (
    <div className="card mb-[10px] md:w-[350px] w-[325px] md:h-[490px] h-[330px] bg-black hover:shadow-xl hover:shadow-cyan-600 duration-500 transition-all ease-in-out cursor-pointer rounded-none">
      <figure className="">
        <img className="md:max-w-[745px]" src={data?.img} alt={data?.name} />
      </figure>

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
