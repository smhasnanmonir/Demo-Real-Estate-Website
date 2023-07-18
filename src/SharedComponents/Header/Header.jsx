import { Link } from "react-router-dom";
import logo from "../../../src/assets/Universe__group__logo-01.png";
const Header = () => {
  return (
    <div className="navbar bg-base-100 justify-between py-[12px] px-[95px]">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link>About Us</Link>
            <li>
              <a>Properties</a>
              <ul className="p-2">
                <li>
                  <Link>Dhaka</Link>
                </li>
                <li>
                  <Link>Chattogram</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Landowners</Link>
            </li>
            <li>
              <Link>Real Estate Update</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <img className="w-[95px] md:ml-0 ml-[45px]" src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex w-3/4 gap-[10px]">
        <ul className="menu menu-horizontal space-x-[25px] flex px-1 w-full justify-end text-[16px]">
          <li>
            <Link>About Us</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Properties</summary>
              <ul className="p-2">
                <li>
                  <Link>Dhaka</Link>
                </li>
                <li>
                  <Link>Chattogram</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link>Landowners</Link>
          </li>
          <li>
            <Link>Real Estate Update</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
