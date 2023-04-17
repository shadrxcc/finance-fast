import React from "react";
import logo from "../assets/finance-logo.svg";
import { navlinks } from "./data";
import device from "../assets/device.svg";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const menuClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="flex bg-[#F9F9F9] fixed w-[100%] z-10 top-0 items-center p-5 justify-between">
      <div>
        <img src={logo} className="w-[10em]" alt="logo" />
      </div>

      <nav>
        <ul
          className={`${
            clicked ? "#navbar active" : "#navbar"
          } flex items-center gap-[48px] flex-col py-[4em] lg:py-0 lg:flex-row absolute top-[-20em] left-0 lg:left-[0] w-[100%] bg-black-bg lg:bg-inherit lg:top-[0] lg:relative`}
          id="navbar"
        >
          {navlinks.map((links, id) => {
            return (
              <li className="text-base leading-[22px]" key={id}>
                {links.link}
              </li>
            );
          })}

          <div>
            <button className="bg-[#D8C6FF] py-[8px] px-[24px] rounded-[24px]">
              <span className="flex">
                <img src={device} className="w-[20px]" alt="device" />{" "}
                <p className="text-base font-medium">Download</p>{" "}
              </span>
            </button>
          </div>
        </ul>
      </nav>
      <div className="mobile-menu lg:hidden" onClick={menuClick}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
