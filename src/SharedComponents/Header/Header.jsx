import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/whiteLogo.png";
import { useEffect, useState } from "react";
const Header = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/OurProject.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  const commonNav = (
    <>
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          About Us
        </NavLink>
      </li>
      <li className="text-white navBarCustom group">
        <NavLink
          to=""
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          <div className="dropdown inline-block">
            <button className=" text-white font-semibold rounded inline-flex items-center group">
              <span className="mr-1">Properties</span>
            </button>
            <ul className="dropdown-menu md:absolute hidden text-gray-700 p-[35px] group-hover:block  space-y-4 bg-black rounded-lg z-50 relative dropdown-left">
              {datas.map((data) => (
                <li key={data.id}>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 md:py-3 md:px-2 block"
                    href="#"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </NavLink>
      </li>
      <li className="text-white ">
        <NavLink
          to="/landowners"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          Landowners
        </NavLink>
      </li>
      <li className="text-white ">
        <NavLink
          to="/update"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          Real Estate Update
        </NavLink>
      </li>
      <li className="text-white ">
        <NavLink
          to="/contact"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#28282B] justify-between py-[12px] px-[95px] text-red-400 z-50 relative">
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
