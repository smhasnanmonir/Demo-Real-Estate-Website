import { Link } from "react-router-dom";
import UseData from "../../Components/Hooks/UseData";
const Footer = () => {
  const [datas] = UseData();
  return (
    <div className="text-white ">
      <footer className="footer grid md:grid-cols-4 grid-cols-1 gap-5 py-10 md:px-[150px]  px-[25px] bg-[#28282B] text-white md:place-items-center">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
