import coverPhoto from "../../assets/Service/cover1.jpg";
import cover1 from "../../assets/Service/cover.jpg";
import correct from "../../assets/Service/Frame 1correct.svg";
import construction from "../../assets/Service/construction.jpg";
import interior from "../../assets/Service/intorior.jpg";
import projectplanning from "../../assets/Service/project-planning.jpg";
import sitedesign from "../../assets/Service/site-design.jpg";
const ServicePage = () => {
  return (
    <div className="bg-white text-black">
      <div className="relative">
        <img
          className="w-full md:h-[450px] object-cover brightness-50"
          src={coverPhoto}
          alt="Business Cover"
        />
        <div className="absolute flex items-center justify-center inset-0">
          <h1 className="text-4xl border-l-[4px] border-cyan-300 pl-2 text-white">
            Our Services
          </h1>
        </div>
      </div>
      {/* Services we offer starts*/}
      <div className="md:flex border-y-2 border-black">
        <div className="md:w-1/2">
          <img className="w-full h-full object-cover" src={cover1} alt="" />
        </div>
        <div className="md:w-1/2 md:grid place-content-center px-[7%] py-[10%]">
          <h1 className="text-center text-2xl font-semibold pb-[10px]">
            Services We Offer
          </h1>
          <p className="text-[18px]">
            Universe Group offers construction and interior services that meet
            the requirements of the clients and at the same time, maintain
            superior quality. The company has provided construction and interior
            services to a significant number of clients in the country and has
            already achieved the trust of them by rendering quality service.
          </p>
          <div className="py-[15px] grid lg:grid-cols-2 gap-4">
            <div className="flex gap-2">
              <img className="w-[7%]" src={correct} alt="" />
              <h1>Construction</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[7%]" src={correct} alt="" />
              <h1>Interior Design</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[7%]" src={correct} alt="" />
              <h1>Project Planning</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[7%]" src={correct} alt="" />
              <h1>Site Design</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Services we offer ends*/}

      {/* Service details Starts */}
      <div className="md:grid md:grid-cols-2 py-[3%] px-[3%] gap-5 space-y-[15px]">
        <div className="md:flex gap-3 justify-center items-center">
          <div className="w-full h-full object-cover">
            <img
              className="w-full h-full object-cover"
              src={construction}
              alt="construction"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold py-[7px]">
              Construction Services
            </h1>
            <p>
              We are a leading construction company in Dhaka, Bangladesh. Our
              highly talented architects and designers ensure state-of-the-art
              construction services.
            </p>
          </div>
        </div>
        <div className="md:flex gap-3 justify-center items-center">
          <div className="w-full h-full object-cover">
            <img
              className="w-full h-full object-cover"
              src={interior}
              alt="interior"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold py-[7px]">Interior Design</h1>
            <p>
              {" "}
              We are a leading Interior Design company in Dhaka, Bangladesh. Our
              highly talented architects and designers ensure state-of-the-art
              Interior Design services.
            </p>
          </div>
        </div>
        <div className="md:flex gap-3 justify-center items-center">
          <div className="w-full h-full object-cover">
            <img
              className="w-full h-full object-cover"
              src={sitedesign}
              alt="interior"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold py-[7px]">Site Design</h1>
            <p>
              {" "}
              We are a leading Site Design company in Dhaka, Bangladesh. Our
              highly talented architects and designers ensure state-of-the-art
              Site Design services.
            </p>
          </div>
        </div>
        <div className="md:flex gap-3 justify-center items-center">
          <div className="w-full h-full object-cover">
            <img
              className="w-full h-full object-cover"
              src={projectplanning}
              alt="interior"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold py-[7px]">Project Planning</h1>
            <p>
              {" "}
              We are a leading Project Planning company in Dhaka, Bangladesh.
              Our highly talented architects and designers ensure
              state-of-the-art Project Planning services.
            </p>
          </div>
        </div>
      </div>
      {/* Service details Ends */}
    </div>
  );
};

export default ServicePage;
