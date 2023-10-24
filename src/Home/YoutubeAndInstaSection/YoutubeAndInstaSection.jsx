import youtube from "../../assets/YoutbeInsta/youtube.png";
import facebook from "../../assets/YoutbeInsta/facebook.png";
const YoutubeAndInstaSection = () => {
  return (
    <div className="bg-[#d7f1f4] px-[9%] py-[45px] lg:py-[65px] flex lg:flex-row flex-col gap-[45px] mx-auto justify-center items-start">
      <div className="space-y-2 lg:w-[50%] w-full overflow-hidden">
        <div className="flex items-center gap-3">
          <img className="w-[45px]" src={youtube} alt="Youtube Logo" />
          <h1 className="text-2xl text-black">Youtube</h1>
        </div>
        <div className="w-full">
          <iframe
            className="md:w-full w-[450px] lg:h-[350px] h-[310px] aspect-video"
            src="https://www.youtube.com/embed/VIyFWD3GZMw"
            allow="accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="space-y-4 lg:w-[50%] w-full overflow-hidden">
        <div className="flex items-center gap-3">
          <img className="w-[35px]" src={facebook} alt="Youtube Logo" />
          <h1 className="text-2xl text-black">Facebook</h1>
        </div>
        <div className="">
          <img
            className="cursor-pointer md:w-full w-[450px] h-[350px] object-cover object-left"
            onClick={() =>
              window.open("https://www.facebook.com/mak.migbd?mibextid=ZbWKwL")
            }
            src="https://iili.io/JK9eFUX.png"
            alt="Facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubeAndInstaSection;
