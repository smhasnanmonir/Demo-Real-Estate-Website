const SharedFrontPage = ({ backgroundImg, heading1, heading2 }) => {
  return (
    <div className="front-page min-h-[100vh] grid place-items-center">
      <img
        className="object-cover object-left brightness-[30%] md:max-h-[90vh] min-h-[100vh] w-full left"
        src={backgroundImg}
      />
      <div className="grid place-items-center absolute">
        <h1 className="font-semibold">{heading1}</h1>
        <h1 className="md:text-3xl font-light mb-[20px]">{heading2}</h1>
        {/* <img
          className="w-[45px] animate-bounce"
          src="https://i.ibb.co/k3HS3tW/down-arrow-1.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default SharedFrontPage;
