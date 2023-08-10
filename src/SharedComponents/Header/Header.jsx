import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/whiteLogo.png";
import { useEffect, useState } from "react";
import UseData from "../../Components/Hooks/UseData";
import arrow from "../../../src/assets/right-arrow.png";
import phone from "../../../src/assets/phone-call.png";
import home from "../../../src/assets/home.png";
const Header = () => {
  const [datas] = UseData();
  const commonNav = (
    <>
      <li className="text-white hover:border-0 border-0">
        <NavLink
          className={"navBarCustom"}
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: isActive ? "6px" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          className={"navBarCustom"}
          to="/about"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: isActive ? "6px" : "",
            };
          }}
        >
          About Us
        </NavLink>
      </li>
      <li className="text-white navBarCustom group">
        <NavLink
          to="/allproperties"
          className={"navBarCustom"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: isActive ? "6px" : "",
            };
          }}
        >
          <div className="dropdown dropdown-hover dropdown-left">
            <label tabIndex={0} className="">
              Properties
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu rounded-box w-52"
            >
              <ul className="px-20 py-12 md:absolute hidden text-gray-700 group-hover:block mt-[15px] space-y-4 bg-black rounded-lg z-50 relative ">
                <div className=" text-white grid grid-cols-3 w-[380px] h-[140px]">
                  <div className="space-y-4 ">
                    <h1 className="font-semibold">Phase</h1>
                    <p className="hover:text-red-400 font-normal">Ongoing</p>
                    <p className="hover:text-red-400 font-normal">Upcoming</p>
                    <p className="hover:text-red-400 font-normal">Completed</p>
                  </div>
                  <div className="space-y-4 ">
                    <h1 className="font-semibold">Types</h1>
                    <p className="hover:text-red-400 font-normal">
                      Residential
                    </p>
                    <p className="hover:text-red-400 font-normal">Commercial</p>
                    <p className="hover:text-red-400 font-normal">Integrated</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-semibold">Location</h1>
                    <Link
                      to="/allproperties/dhanmondi"
                      className="hover:text-red-400 font-normal"
                    >
                      Dhanmondi
                    </Link>
                    <Link
                      to="/allproperties/keraniganj"
                      className="hover:text-red-400 font-normal"
                    >
                      Keraniganj
                    </Link>
                    <Link
                      to="/allproperties/mohammadpur"
                      className="hover:text-red-400 font-normal"
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
                        className="font-normal text-white hover:text-red-500 inline-block "
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
      <li className="text-white navBarCustom group">
        <NavLink
          className={"navBarCustom"}
          to="/media"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: isActive ? "4px" : "",
            };
          }}
        >
          <div className="dropdown inline-block">
            <button className=" text-white font-semibold rounded inline-flex items-center group">
              <span className="mr-1">Media</span>
            </button>
            <ul className="px-10 py-10 dropdown-menu  md:absolute hidden text-gray-700 p-[35px] group-hover:block  space-y-4 bg-black rounded-lg z-50 relative">
              <div className=" text-white">
                <div className="space-y-4 px-5">
                  <p className="hover:text-red-500 navBarCustom">Blog</p>
                  <p className="hover:text-red-500 navBarCustom">News</p>
                  <p className="hover:text-red-500 navBarCustom">Event</p>
                </div>
              </div>
            </ul>
          </div>
        </NavLink>
      </li>{" "}
      <li className="text-white ">
        <NavLink
          className={"navBarCustom"}
          to="/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "" : "",
              background: isActive ? "none" : "none",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: isActive ? "4px" : "",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
      <li className="text-white group">
        <div className="flex justify-center items-center">
          <img className="w-[25px]" src={phone} alt="" />
          <div className="space-y-1">
            <p className="group-hover:text-red-600">+8801799993555</p>
          </div>
        </div>
      </li>
    </>
  );

  return (
    <div className="flex navbar bg-[#28282B] justify-between items-center py-[24px] px-[15px] text-red-400 z-50 relative">
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
