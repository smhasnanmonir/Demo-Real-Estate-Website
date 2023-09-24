import { Link } from "react-router-dom";

const MediaTemplate = ({ datas }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[12px] place-items-center md:px-[45px] px-[25px]">
      {datas.map((data) => (
        <div key={data?.id}>
          <div className=" w-[350px] bg-base-100 shadow-xl">
            <img
              className="h-full w-[450px]"
              src={data?.photo}
              alt={data?.title}
            />

            <div className="card-body">
              <h2 className="card-title text-black">{data?.title}</h2>
              <p className="text-black">{data?.body.slice(0, 50)}...</p>
              <div className="card-actions">
                <Link to={`${data?.category}/${data?.id}`}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaTemplate;
