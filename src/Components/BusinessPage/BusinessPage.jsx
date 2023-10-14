import coverPhoto from "../../assets/Business/Slide 16_9 - 1BusinessLow.jpg";
import mak from "../../assets/Business/mak.jpg";
import dream from "../../assets/Business/dream-square.jpg";
import organic from "../../assets/Business/Organic.jpg";
import Universe from "../../assets/Business/universe.jpg";
import makBg from "../../assets/Business/bg/mak inno.jpg";
import dreamBg from "../../assets/Business/bg/Dream square.jpg";
import organicBg from "../../assets/Business/bg/organic-01.jpg";
import universeBg from "../../assets/Business/bg/Universe landmark.jpg";
import { Link } from "react-router-dom";
const BusinessPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="relative">
        <img
          className="w-full md:h-[550px] object-cover brightness-50"
          src={coverPhoto}
          alt="Business Cover"
        />
        <div className="absolute flex items-center justify-center inset-0">
          <h1 className="text-4xl border-l-[4px] border-gray-300 pl-2 text-white">
            Businesses
          </h1>
        </div>
      </div>
      <div className="py-[35px] px-[5%] grid md:grid-cols-4 grid-cols-2 gap-3">
        <div
          onClick={() => {
            const anchor = document.querySelector("#mak");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-gray-200 py-2 px-2 text-center cursor-pointer overflow-hidden relative flex items-center justify-center"
        >
          <img
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear"
            src={mak}
            alt="Mak"
          />
        </div>
        <div
          onClick={() => {
            const anchor = document.querySelector("#dreams");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-gray-200 py-2 px-2 text-center cursor-pointer overflow-hidden"
        >
          <img
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear"
            src={dream}
            alt="Dreams"
          />
        </div>
        <div
          onClick={() => {
            const anchor = document.querySelector("#organic");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-gray-200 py-2 px-2 text-center cursor-pointer overflow-hidden"
        >
          <img
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear"
            src={organic}
            alt=""
          />
        </div>
        <div
          onClick={() => {
            const anchor = document.querySelector("#universe");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-gray-200 py-2 px-2 grid place-content-center cursor-pointer overflow-hidden"
        >
          <img
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear"
            src={Universe}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#343a40] space-y-[7px]">
        {/* Mak div starts */}
        <div id="mak" className="md:flex w-full h-full">
          <div className="md:w-[25%] h-full object-cover">
            <img className="w-full h-full object-cover" src={mak} alt="" />
          </div>
          <div className="md:w-[75%] relative">
            <img
              className="w-full md:h-full h-[380px] object-cover brightness-[35%]"
              src={makBg}
              alt=""
            />
            <div className=" px-[6%] py-[3%] absolute inset-0 flex flex-col items-center justify-center w-full h-full text-white">
              <h1 className="md:text-3xl font-bold py-[13px] underline underline-offset-[12px] uppercase">
                Mak Inno Development Ltd.
              </h1>
              <p className="text-xl">
                Like any other developing nation, Bangladesh’s cities are facing
                typical problems, namely urban sprawl, affordable housing
                shortage, access to public transport and lack of equitable
                access to basic services adversely impacting productivity,
                mobility and quality of urban life.
              </p>
              <Link
                to="/business/details/Mak-Inno-Development-Ltd"
                className="mt-[7px] text-[#74c0fc] underline underline-offset-4 decoration-dashed"
              >
                Discover more >
              </Link>
            </div>
          </div>
        </div>
        {/* Mak div Ends */}

        {/* Dreams Square Development div starts */}
        <div id="dreams" className="md:flex flex-row-reverse w-full h-full">
          <div className="md:w-[25%] h-full object-cover">
            <img className="w-full h-full object-cover" src={dream} alt="" />
          </div>
          <div className="md:w-[75%] relative">
            <img
              className="w-full md:h-full h-[380px] object-cover brightness-[35%]"
              src={dreamBg}
              alt=""
            />
            <div className=" px-[6%] py-[3%] absolute inset-0 flex flex-col items-center justify-center w-full h-full text-white">
              <h1 className="md:text-3xl font-bold py-[13px] underline underline-offset-[12px] uppercase">
                dream square development ltd.
              </h1>
              <p className="text-xl">
                Today’s life has many difficulties and people are the victims,
                so they plan to make it as easy as they can. So they can reach a
                good position. They have more friends in the community since it
                is small. The modern township’s people always try to protect
                their traditional habits and culture.
              </p>
              <Link
                to="/business/details/Dreams-Square-Development"
                className="mt-[7px] text-[#74c0fc] underline underline-offset-4 decoration-dashed"
              >
                Discover more >
              </Link>
            </div>
          </div>
        </div>
        {/* Dreams Square Development div ends */}

        {/* Organic Labretories Ltd. div starts */}
        <div id="organic" className="md:flex w-full h-full">
          <div className="md:w-[25%] h-full object-cover">
            <img className="w-full h-full object-cover" src={organic} alt="" />
          </div>
          <div className="md:w-[75%] relative">
            <img
              className="w-full md:h-full h-[380px] object-cover brightness-[35%]"
              src={organicBg}
              alt=""
            />
            <div className=" px-[6%] py-[3%] absolute inset-0 flex flex-col items-center justify-center w-full h-full text-white">
              <h1 className="md:text-3xl font-bold py-[13px] underline underline-offset-[12px] uppercase">
                Organic Laboratories Ltd.
              </h1>
              <p className="text-xl">
                Health and Hygiene are two essential concepts when it comes to
                the human body. Health refers to the state of physical as well
                as mental wellbeing. Health also encompasses the social
                wellbeing of an individual. Health is not just about being fit
                but also having the appropriate resources to live. Having a
                sound body and mind is an indication of good health.
              </p>
              <Link
                to="/business/details/Organic-Laboratories-Ltd"
                className="mt-[7px] text-[#74c0fc] underline underline-offset-4 decoration-dashed"
              >
                Discover more >
              </Link>
            </div>
          </div>
        </div>
        {/* Organic Labretories Ltd. div ends */}
        {/* Universe Group div starts */}
        <div id="universe" className="md:flex flex-row-reverse w-full h-full">
          <div className="md:w-[25%] h-full object-cover">
            <img className="w-full h-full object-cover" src={Universe} alt="" />
          </div>
          <div className="md:w-[75%] relative">
            <img
              className="w-full md:h-full h-[380px] object-cover brightness-[35%]"
              src={universeBg}
              alt=""
            />
            <div className=" px-[6%] py-[3%] absolute inset-0 flex flex-col items-center justify-center w-full h-full text-white">
              <h1 className="md:text-3xl font-bold py-[13px] underline underline-offset-[12px] uppercase">
                Universe Landmark Ltd.
              </h1>
              <p className="text-xl">
                Universe Landmark Ltd. is a leading real estate company
                dedicated to providing exceptional property services to clients
                in the residential, commercial, and industrial sectors.
                Established in 2021, our company has built a reputation for
                integrity, professionalism, and customer satisfaction in the
                real estate market.
              </p>
              <Link
                to="/business/details/Universe-Group"
                className="mt-[7px] text-[#74c0fc] underline underline-offset-4 decoration-dashed"
              >
                Discover more >
              </Link>
            </div>
          </div>
        </div>
        {/* Universe Group div ends */}
      </div>
    </div>
  );
};

export default BusinessPage;
