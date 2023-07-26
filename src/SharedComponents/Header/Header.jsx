import { Link } from "react-router-dom";
import logo from "../../../src/assets/whiteLogo.png";
const Header = () => {
  return (
    <div className="navbar bg-[#28282B] justify-between py-[12px] px-[95px] text-red-400">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black  rounded-box w-52"
          >
            <li className="text-white hover:text-red-400">
              <Link>About Us</Link>
            </li>
            <li className="text-white hover:text-red-400">
              <Link>Properties</Link>
            </li>
            <li className="text-white hover:text-red-400">
              <Link>Landowners</Link>
            </li>
            <li className="text-white hover:text-red-400">
              <Link>Real Estate Update</Link>
            </li>
            <li className="text-white hover:text-red-400">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <img className="w-[165px] md:ml-0 ml-[45px]" src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex w-3/4 gap-[10px]">
        <ul className="menu menu-horizontal space-x-[25px] flex px-1 w-full justify-end text-[16px]">
          <li className="text-white ">
            <Link className="hover:text-red-400 hover:scale-105 transition-all duration-500 ease-in-out">
              About Us
            </Link>
          </li>
          <li className="text-white ">
            <Link className="hover:text-red-400 hover:scale-105 transition-all duration-500 ease-in-out">
              Properties
            </Link>
          </li>
          <li className="text-white ">
            <Link className="hover:text-red-400 hover:scale-105 transition-all duration-500 ease-in-out">
              Landowners
            </Link>
          </li>
          <li className="text-white ">
            <Link className="hover:text-red-400 hover:scale-105 transition-all duration-500 ease-in-out">
              Real Estate Update
            </Link>
          </li>
          <li className="text-white ">
            <Link className="hover:text-red-400 hover:scale-105 transition-all duration-500 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
