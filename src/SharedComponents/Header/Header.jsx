import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/whiteLogo.png";
import "./Header.css";

const Header = () => {
  const commonNav = (
    <>
      <li className="text-white max-w-fit">
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
      <li className="text-white modern-dropdown">
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
          <div className="customDropdown">
            <label>About us</label>
            <div className="modern-dropdown-menu">
              <Link to="/aboutus/ourstory" className="modern-dropdown-link">
                Our Story
              </Link>
              <Link
                to="/aboutus/missionVision"
                className="modern-dropdown-link"
              >
                Mission, Vision and Values
              </Link>
              <Link to="/aboutus/ourclients" className="modern-dropdown-link">
                Corporate Clients
              </Link>
              <Link to="/aboutus/ourteam" className="modern-dropdown-link">
                Our Team
              </Link>
            </div>
          </div>
        </NavLink>
      </li>
      <li className="text-white modern-dropdown">
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
          <div className="customDropdown">
            <label>Business</label>
            <div className="modern-dropdown-menu">
              <Link
                to="business/details/Mak-Inno-Development-Ltd"
                className="modern-dropdown-link"
              >
                Mak Inno Development Ltd
              </Link>
              <Link
                to="business/details/Dreams-Square-Development"
                className="modern-dropdown-link"
              >
                Dream Square Development ltd.
              </Link>
              <Link
                to="business/details/Organic-Laboratories-Ltd"
                className="modern-dropdown-link"
              >
                Organic Laboratories Ltd.
              </Link>
              <Link
                to="business/details/Universe-Group"
                className="modern-dropdown-link"
              >
                Universe Group
              </Link>
            </div>
          </div>
        </NavLink>
      </li>
      <li className="text-white properties-dropdown">
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
          <div className="customDropdown">
            <label tabIndex={0} className="">
              Properties
            </label>
            <div className="properties-dropdown-menu">
              <div className="properties-grid">
                <div className="properties-section">
                  <h3>Phase</h3>
                  <Link to="allproperties/ongoing" className="properties-link">
                    Ongoing
                  </Link>
                  <Link to="allproperties/upcoming" className="properties-link">
                    Upcoming
                  </Link>
                  <Link
                    to="allproperties/completed"
                    className="properties-link"
                  >
                    Completed
                  </Link>
                </div>
                <div className="properties-section">
                  <h3>Types</h3>
                  <Link
                    to="/allproperties/residential"
                    className="properties-link"
                  >
                    Residential
                  </Link>
                  <Link
                    to="/allproperties/commercial"
                    className="properties-link"
                  >
                    Commercial
                  </Link>
                </div>
                <div className="properties-section">
                  <h3>Location</h3>
                  <Link
                    to="/allproperties/dhanmondi"
                    className="properties-link"
                  >
                    Dhanmondi
                  </Link>
                  <Link
                    to="/allproperties/keraniganj"
                    className="properties-link"
                  >
                    Keraniganj
                  </Link>
                  <Link
                    to="/allproperties/mohammadpur"
                    className="properties-link"
                  >
                    Mohammadpur
                  </Link>
                  <div className="view-all-link">
                    <img src="https://i.ibb.co/Cv26NmB/right.png" alt="" />
                    <Link to="/allproperties" className="properties-link">
                      All properties
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </li>
      <li className="text-white modern-dropdown">
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
          <div className="customDropdown">
            <label>Media</label>
            <div className="modern-dropdown-menu">
              <Link to="media/blog" className="modern-dropdown-link">
                Blog
              </Link>
              <Link to="media/news" className="modern-dropdown-link">
                News
              </Link>
              <Link to="media/events" className="modern-dropdown-link">
                Event
              </Link>
            </div>
          </div>
        </NavLink>
      </li>
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
      </li>
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
