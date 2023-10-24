import CountUp from "react-countup";

const CountNumberSection = () => {
  return (
    <div className="bg-white text-black py-[35px] lg:py-[65px] lg:px-[3%] px-[7%] lg:grid grid-cols-3 gap-[13px]">
      <div className="lg:space-y-6 space-y-3">
        <h1 className="text-xl md:w-3/4 font-semibold">
          Trusted by Corporate and Local buyer Nation wide.
        </h1>
        <p>
          Our mission at Universe Group is to empower our clients with the
          knowledge and support they need to make informed real estate
          decisions. We strive to provide exceptional service, foster lasting
          relationships, and contribute positively to the communities we serve.
        </p>
      </div>

      <div className="lg:space-y-7 space-y-3 lg:pt-0 md:pt-[35px] pt-[25px] lg:ml-[6px]">
        <CountUp
          className="text-5xl font-semibold"
          start={0}
          end={1.5}
          separator=""
          useEasing={true}
          enableScrollSpy={true}
          scrollSpyOnce={true}
          scrollSpyDelay={100}
          duration={3.75}
          decimals={3}
          decimal=","
          suffix="+"
        ></CountUp>
        <div className="space-y-3 text-start">
          <h1 className="text-[17px] font-semibold">
            More Than 1500 Happy Customers.
          </h1>
          <p>
            Providing high quality and functioning themes is our main focus
            resulting in thousands of satisfied customers.
          </p>
        </div>
      </div>
      <div className="lg:space-y-6 space-y-3 lg:pt-0 md:pt-[35px] pt-[25px] ">
        <CountUp
          className="text-5xl font-semibold"
          start={0}
          end={1}
          useEasing={true}
          enableScrollSpy={true}
          scrollSpyOnce={true}
          scrollSpyDelay={100}
          duration={3.75}
          separator=""
          decimals={3}
          decimal=","
          suffix="+"
        ></CountUp>
        <div className="space-y-3">
          <h1 className="text-[17px] font-semibold">
            Over 1000 reviews with an average 5-star
          </h1>
          <p>
            Over 1000 reviews with an average 5-Star Our satisfied customers
            reward us with their positive feedback and this is publicity that
            can not be bought.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountNumberSection;
