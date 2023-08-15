import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/whiteLogo.png";
import UseData from "../../Components/Hooks/UseData";
import "./Header.css";
const Header = () => {
  const [datas] = UseData();
  const commonNav = (
    <>
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-white group">
        <NavLink
          className={"navBarCustom"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          <div className="customDropdown group ">
            <label>About us</label>
            <div className="inline-block relative">
              <ul className="absolute min-w-full top-full right-[-95px]  mt-[13px] bg-black bg-opacity-80 text-white rounded-lg hidden group-hover:inline">
                <div className="flex flex-col gap-[12px] w-full px-[50px] py-[25px]">
                  <Link
                    to="/aboutus/ourstory"
                    className="navBarCustom w-1/2 hover:text-cyan-400"
                  >
                    Our story
                  </Link>
                  <Link className="navBarCustom hover:text-cyan-400">
                    Misson, vision and <br /> values
                  </Link>
                  <Link
                    to="/aboutus/ourclients"
                    className="navBarCustom w-1/2 hover:text-cyan-400"
                  >
                    Our Clients
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </NavLink>
      </li>{" "}
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/business"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          Business
        </NavLink>
      </li>
      <li className="text-white group pb-2">
        <NavLink
          className={"navBarCustom"}
          to="/allproperties"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          <div className="dropdown dropdown-hover dropdown-left">
            <label tabIndex={0} className="">
              Properties
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu rounded-box w-52 mt-[25px]"
            >
              <ul className="px-20 py-12 md:absolute hidden text-gray-700 bg-opacity-80 group-hover:block transition-all duration-1000 delay-200 space-y-4 bg-black rounded-lg z-50 relative ">
                <div className=" text-white grid grid-cols-3 w-[380px] h-[140px]">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-semibold">Phase</h1>
                    <Link
                      to="allproperties/ongoing"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Ongoing
                    </Link>
                    <Link
                      to="allproperties/upcoming"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to="allproperties/completed"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Completed
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-semibold">Types</h1>
                    <Link
                      to="/allproperties/residential"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Residential
                    </Link>
                    <Link
                      to="/allproperties/commercial"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Commercial
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-semibold">Location</h1>
                    <Link
                      to="/allproperties/dhanmondi"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Dhanmondi
                    </Link>
                    <Link
                      to="/allproperties/keraniganj"
                      className="hover:text-cyan-400 font-normal navBarCustom w-1/2"
                    >
                      Keraniganj
                    </Link>
                    <Link
                      to="/allproperties/mohammadpur"
                      className="hover:text-cyan-400 font-normal navBarCustom w-3/4"
                    >
                      Mohammadpur
                    </Link>
                    <div className="flex group">
                      <img
                        className="ml-0 group-hover:ml-3"
                        src="https://i.ibb.co/Cv26NmB/right.png"
                        alt=""
                      />
                      <Link
                        to="/allproperties"
                        className="font-normal text-white hover:text-cyan-500 inline-block "
                      >
                        All properties
                      </Link>
                    </div>
                  </div>
                </div>
              </ul>
            </ul>
          </div>
        </NavLink>
      </li>
      <li className="text-white group">
        <NavLink
          className={"navBarCustom"}
          to="/media"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          <div className="dropdown inline-block dropdown-hover dropdown-left">
            <div className="customDropdown group ">
              <label>Media</label>
              <div className="inline-block relative">
                <ul className="absolute min-w-full  top-full right-[-65px]  mt-[13px] bg-black bg-opacity-80 text-white rounded-lg hidden group-hover:inline">
                  <div className="flex flex-col gap-[12px] w-full px-[50px] py-[25px]">
                    <Link className="navBarCustom hover:text-cyan-400">
                      Blog
                    </Link>
                    <Link className="navBarCustom hover:text-cyan-400">
                      News
                    </Link>
                    <Link className="navBarCustom hover:text-cyan-400">
                      Event
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </NavLink>
      </li>{" "}
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/service"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          Service
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/career"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          Career
        </NavLink>
      </li>{" "}
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex fixed navbar backdrop-blur-sm bg-[#28282B] bg-opacity-80 justify-between items-center py-[12px] px-[15px] text-cyan-400 z-50">
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
            {commonNav}
          </ul>
        </div>
        <Link to="/">
          <img className="w-[165px] md:ml-0 ml-[45px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex w-3/4 gap-[10px]">
        <ul className="menu menu-horizontal space-x-[25px] flex px-1 w-full justify-end text-[16px]">
          {commonNav}
        </ul>
      </div>
    </div>
  );
};

export default Header;
