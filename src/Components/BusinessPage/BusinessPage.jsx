import coverPhoto from "../../assets/Business/Slide 16_9 - 1BusinessLow.jpg";
import mak from "../../assets/Business/mak.jpg";
import dream from "../../assets/Business/dream-square.jpg";
import organic from "../../assets/Business/Organic.jpg";
import Universe from "../../assets/Business/universe.jpg";
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
          <h1 className="text-4xl border-l-[4px] border-cyan-300 pl-2 text-white">
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
          className="bg-cyan-200 py-[15px] px-3 text-center cursor-pointer"
        >
          <h1 className="md:text-xl">Mak Inno Development Ltd</h1>
        </div>
        <div
          onClick={() => {
            const anchor = document.querySelector("#dreams");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-cyan-200 py-[15px] px-3 text-center cursor-pointer"
        >
          <h1 className="md:text-xl">Dreams Square Development</h1>
        </div>
        <div
          onClick={() => {
            const anchor = document.querySelector("#organic");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-cyan-200 py-[15px] px-3 text-center cursor-pointer"
        >
          <h1 className="md:text-xl">Organic Labretories Ltd</h1>
        </div>
        <div
          onClick={() => {
            const anchor = document.querySelector("#universe");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="bg-cyan-200 py-[15px] px-3 grid place-content-center cursor-pointer"
        >
          <h1 className="md:text-xl ">Universe Group</h1>
        </div>
      </div>
      {/* Mak div starts */}
      <div id="mak" className="md:flex items-center justify-center ">
        <div className="md:w-1/2">
          <img className="w-full h-full object-cover" src={mak} alt="Mak" />
        </div>
        <div className="md:w-1/2 px-[5%] py-[7%]">
          <h1 className="text-3xl font-bold py-[13px]">
            Mak Inno Development Ltd
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto
            totam quis eius dolore id nulla repudiandae tempore sed accusantium
            reiciendis cupiditate neque ipsum, nemo magni atque? Id aperiam
            possimus quia maxime in. Esse, tempore. Eaque, recusandae. Ipsam
            minus odio perferendis fuga deserunt voluptas cumque, magni pariatur
            voluptatum esse asperiores.
          </p>
        </div>
      </div>
      {/* Mak div Ends */}

      {/* Dreams Square Development div starts */}
      <div
        id="dreams"
        className="md:flex flex-row-reverse items-center justify-center"
      >
        <div className="md:w-1/2">
          <img className="w-full h-full object-cover" src={dream} alt="Mak" />
        </div>
        <div className="md:w-1/2 px-[5%] py-[7%]">
          <h1 className="text-3xl font-bold py-[13px]">
            Dreams Square Development
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto
            totam quis eius dolore id nulla repudiandae tempore sed accusantium
            reiciendis cupiditate neque ipsum, nemo magni atque? Id aperiam
            possimus quia maxime in. Esse, tempore. Eaque, recusandae. Ipsam
            minus odio perferendis fuga deserunt voluptas cumque, magni pariatur
            voluptatum esse asperiores.
          </p>
        </div>
      </div>
      {/* Dreams Square Development div ends */}

      {/* Organic Labretories Ltd. div starts */}
      <div id="organic" className="md:flex items-center justify-center">
        <div className="md:w-1/2">
          <img className="w-full h-full object-cover" src={organic} alt="Mak" />
        </div>
        <div className="md:w-1/2 px-[5%] py-[7%]">
          <h1 className="text-3xl font-bold py-[13px]">
            Organic Labretories Ltd.
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto
            totam quis eius dolore id nulla repudiandae tempore sed accusantium
            reiciendis cupiditate neque ipsum, nemo magni atque? Id aperiam
            possimus quia maxime in. Esse, tempore. Eaque, recusandae. Ipsam
            minus odio perferendis fuga deserunt voluptas cumque, magni pariatur
            voluptatum esse asperiores.
          </p>
        </div>
      </div>
      {/* Organic Labretories Ltd. div ends */}
      {/* Universe Group div starts */}
      <div
        id="universe"
        className="md:flex flex-row-reverse items-center justify-center"
      >
        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={Universe}
            alt="Mak"
          />
        </div>
        <div className="md:w-1/2 px-[5%] py-[7%]">
          <h1 className="text-3xl font-bold py-[13px]">
            Universe Landmark Ltd
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto
            totam quis eius dolore id nulla repudiandae tempore sed accusantium
            reiciendis cupiditate neque ipsum, nemo magni atque? Id aperiam
            possimus quia maxime in. Esse, tempore. Eaque, recusandae. Ipsam
            minus odio perferendis fuga deserunt voluptas cumque, magni pariatur
            voluptatum esse asperiores.
          </p>
        </div>
      </div>
      {/* Universe Group div ends */}
    </div>
  );
};

export default BusinessPage;
