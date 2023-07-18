import { Link } from "react-router-dom";

const CollectionDetails = ({ building }) => {
  return (
    <div>
      <div className="bg-black text-white p-6">
        <div className="flex justify-between items-center max-w-5xl mx-auto ">
          <h1 className="text-2xl font-semibold">
            {building[0]?.name} COLLECTION
          </h1>
          <div className="flex gap-3">
            {building[0]?.location.map((loc) => (
              <Link
                key={building[0].name}
                className="btn btn-outline text-white"
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <img className="" src={building[0]?.photo} />
    </div>
  );
};

export default CollectionDetails;
