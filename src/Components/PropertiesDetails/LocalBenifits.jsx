const LocalBenifits = ({ datas }) => {
  return (
    <>
      <div className="bg-white px-[3%] mx-auto pb-[35px] border-t-2 border-black">
        <h1 className="md:text-3xl text-2xl font-semibold text-center md:py-[35px] py-[25px]">
          Local Benefits
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          {datas?.localBenefit?.map((data) => (
            <div key={data?.id} className="bg-[#ced4da] py-[13%] px-[5%]">
              <div>
                <img
                  className="w-[25%] mx-auto object-cover"
                  src={data?.img}
                  alt=""
                />
                <h1 className="text-center md:text-xl pt-[5%]">
                  {data?.feature}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocalBenifits;
