import { Link } from "react-router-dom";
import logo from "../../../src/assets/whiteLogo.png";
import UseData from "../../Components/Hooks/UseData";
import facebook from "../../../src/assets/facebook.png";
import twitter from "../../../src/assets/twitter.png";
import youtube from "../../../src/assets/youtube.png";
import instagram from "../../../src/assets/instagram.png";
const Footer = () => {
  const [datas] = UseData();
  return (
    <div className="text-white font-FontRubic">
      <footer className="footer grid md:grid-cols-4 grid-cols-1 gap-5 py-[150px] md:px-[50px]  px-[25px] bg-[#28282B] text-white md:place-content-start">
        <>
          <img className="w-3/4" src={logo} alt="Logo" />
        </>
        <div className="">
          <h1 className="text-[22px] font-semibold">Contact Information</h1>
          <div className="space-y-4">
            <h1>
              Office: Orchid Plaza, Level #4, Plot #2 Road #28 (Old), 15
              (New),Dhanmondi, Dhaka-1209.
            </h1>
            <p className="text-[17px]">Phone: +8801799993555 </p>
            <p className="text-[17px]">Email: info@migbd.com </p>
          </div>
        </div>
        <div className="lg:ml-[70px]">
          <h1 className=" text-[22px] font-semibold">Latest News</h1>
          <div className="grid grid-cols-1 gap-x-2">
            <div className="border-b-2 p-1">
              <h1 className="text-[17px]">News 1</h1>
            </div>
            <div className="border-b-2 p-1">
              <h1 className="text-[17px]">News 2</h1>
            </div>
            <div className="border-b-2 p-1">
              <h1 className="text-[17px]">News 3</h1>
            </div>
            <div className="border-b-2 p-1">
              <h1 className="text-[17px]">News 4</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[22px] font-semibold">Properties Shortcut</h1>
          <div className="grid grid-cols-1 gap-x-2">
            {datas?.map((data) => (
              <div className="border-b-2 p-1" key={data?.id}>
                <Link
                  className="hover:scale-105 hover:text-red-500"
                  to={`/properties/${data?.id}`}
                >
                  {data?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[22px] font-semibold">Important Links</h1>
          <div className="flex flex-col gap-2">
            <a
              className="text-[17px] hover:underline underline-offset-2"
              target="blank"
              href="https://www.termsfeed.com/live/9e6539f1-d993-41f5-946b-2d08827d2364"
            >
              Terms and Conditions
            </a>
            <a
              className="text-[17px] hover:underline underline-offset-2"
              target="blank"
              href="https://www.termsfeed.com/live/c8ec69be-45a8-46fe-8195-c68d2359e9c2"
            >
              Privacy Policy
            </a>

            <div className="grid md:grid-cols-4 grid-cols-2 mt-2 gap-1">
              <img
                onClick={() =>
                  window.open("https://www.facebook.com/mak.migbd", "_blank")
                }
                className="w-[35px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
                src={facebook}
                alt=""
              />
              <img
                className="w-[35px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
                src={instagram}
                alt=""
              />
              <img
                className="w-[35px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
                src={twitter}
                alt=""
              />
              <img
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@makinnodevelopmentltd.9649",
                    "_blank"
                  )
                }
                className="w-[35px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
                src={youtube}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
