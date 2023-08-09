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
    <div className="text-white ">
      <footer className="footer grid md:grid-cols-4 grid-cols-1 gap-5 py-10 md:px-[150px]  px-[25px] bg-[#28282B] text-white md:place-items-center">
        <>
          <img className="w-3/4" src={logo} alt="Logo" />
        </>
        <div className="">
          <h1 className="text-[16px] font-semibold">Contact Information</h1>
          <div className="space-y-4">
            <h1>
              Office: Orchid Plaza, Level #4, Plot #2 Road #28 (Old), 15
              (New),Dhanmondi, Dhaka-1209.
            </h1>
            <p>Phone: +8801799993555 </p>
            <p>Email: info@migbd.com </p>
          </div>
        </div>
        <div>
          <h1 className="text-[16px] font-semibold">Latest News</h1>
          <div className="grid grid-cols-1 gap-x-2">
            <div className="border-b-2 p-1">
              <h1>News 1</h1>
            </div>
            <div className="border-b-2 p-1">
              <h1>News 2</h1>
            </div>
            <div className="border-b-2 p-1">
              <h1>News 3</h1>
            </div>
            <div className="border-b-2 p-1">
              <h1>News 4</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[16px] font-semibold">Properties Shortcut</h1>
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
          <h1 className="text-[16px] font-semibold">Important Links</h1>
          <div className="">
            <h1>Important link 1</h1>
            <h1>Important link 2</h1>
            <h1>Important link 3</h1>
            <h1>Important link 4</h1>
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
