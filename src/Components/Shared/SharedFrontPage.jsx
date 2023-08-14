const SharedFrontPage = ({ backgroundImg, heading1, heading2 }) => {
  return (
    <div className="front-page max-h-[90vh] grid">
      <img
        className="object-cover brightness-[30%] max-h-[90vh] w-full"
        src={backgroundImg}
      />
      <div className="flex flex-col items-center justify-center absolute w-full h-full">
        <h1 className="font-semibold">{heading1}</h1>
        <h1 className="md:text-3xl font-light mb-[20px]">{heading2}</h1>
        <img
          className="w-[45px] animate-bounce"
          src="https://i.ibb.co/k3HS3tW/down-arrow-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SharedFrontPage;
