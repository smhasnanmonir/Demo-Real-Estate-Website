import facebook from "../../../src/assets/facebook.png";
import twitter from "../../../src/assets/twitter.png";
import youtube from "../../../src/assets/youtube.png";
import instagram from "../../../src/assets/instagram.png";
const Footer = () => {
  return (
    <div className="text-white">
      <footer className="footer py-10 md:px-[250px] px-[25px] bg-[#28282B] text-white justify-center items-start">
        <div className="space-y-3">
          <img className="w-1/2" src="https://i.imgur.com/HjdPT5k.png" />
          <p className="">
            To become country’s leading most organization in land development
            sector by ensuring a better through our outstanding service,
            dedication and commitment
          </p>
        </div>
        <div>
          <h1 className="text-[16px] font-semibold">Contact Us</h1>
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
          <h1 className="text-[16px] font-semibold">Socials</h1>
          <div className="flex gap-3 py-3">
            <img
              className="w-[45px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
              src={facebook}
              alt=""
            />
            <img
              className="w-[45px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
              src={instagram}
              alt=""
            />
            <img
              className="w-[45px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
              src={twitter}
              alt=""
            />
            <img
              className="w-[45px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
              src={youtube}
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
