import React from "react";
import { footerlinks, footerlinks2, socials } from "./data";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] mt-[112px] py-[72px]">
      <div className="flex flex-col gap-y-[54px]">
        <div className="flex pl-5 md:pl-0 md:items-center gap-y-10 lg:justify-around flex-col lg:flex-row">
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-[72px]">
            <div className="flex flex-col gap-y-[16px]">
              <p className="grift text-[#1A1A1A] text-xl leading-[21px] font-bold">
                Company
              </p>
              <div className="flex flex-col gap-y-[12px]">
                {footerlinks.map((links, id) => {
                  return (
                    <p
                      className="text-[#3A3A3A] text-base leading-[22px] font-medium"
                      key={id}
                    >
                      {links.link}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <p className="grift text-[#1A1A1A] text-xl leading-[21px] font-bold">
                Product
              </p>
              <div className="flex flex-col gap-y-[12px]">
                {footerlinks2.map((links, id) => {
                  return (
                    <p
                      className="text-[#3A3A3A] text-base leading-[22px] font-medium"
                      key={id}
                    >
                      {links.link}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <p className="grift text-[#1A1A1A] text-xl leading-[21px] font-bold">
                Legal
              </p>
              <div className="flex flex-col gap-y-[12px]">
                {footerlinks2.map((links, id) => {
                  return (
                    <p
                      className="text-[#3A3A3A] text-base leading-[22px] font-medium"
                      key={id}
                    >
                      {links.link}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex md:items-center lg:items-start flex-col gap-y-[16px]">
            <p className="grift text-[#1A1A1A] text-xl leading-[21px] font-bold">
              Sign up for our newsletter
            </p>
            <div className="flex items-center justify-center">
              <div className="flex flex-col md:flex-row w-full md:w-auto pr-5 lg:px-5 gap-x-28 gap-y-3 justify-between md:border md:border-bgrey md:border-solid  rounded-[32px] md:px-2 py-1 md:bg-white">
                <div className="flex bg-white md:border-none border-bgrey border-solid border  md:bg-none md:rounded-none rounded-[32px] px-2 md:px-0 md:py-0 py-2 md:bg-none gap-x-[16px]">
                  <input
                    className="focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Enter email"
                    name="number"
                    id="number"
                  />
                </div>
                <div>
                  <button id="download-btn" className="w-[100%]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:px-[72px] flex-col gap-y-5 md:flex-row justify-between items-center">
            <div className="flex gap-x-[40px]">
                {socials.map((icons, id) => {
                    return <img key={id} src={icons.icon} alt="" />
                })}
            </div>
            <div><p>© 2023, FinanaceFast All Rights Reserved.</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
