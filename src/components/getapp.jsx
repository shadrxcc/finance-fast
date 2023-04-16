import React from "react";
import chat from "../assets/chat.svg";
import mockup from "../assets/iPhonecta.png";
import playstore from "../assets/Mobile-appstore-badge.svg";
import appstore from "../assets/Mobile-app-store-badge-2.svg";

const Getapp = () => {
  return (
    <div className="px-4 pt-[124px] lg:px-[55px]">
      <div className="bg-[#5A5DF7] gap-y-16 linebg2 px-[3rem] pt-[3rem] rounded-3xl items-center flex flex-col lg:flex-row justify-between">
        <div className="flex text-center items-center lg:items-start lg:text-start flex-col gap-y-[24px]">
          <p className="grift text-[34px] lg:text-[40px] leading-[35px] lg:leading-[48px] md:w-[566px] text-white">
            One Solution for All Your Cross-Border Payments
          </p>
          <span className="flex flex-col md:flex-row gap-y-5 gap-x-[54px]">
            <img src={playstore} alt="playstore" />
            <img src={appstore} alt="appstore" />
          </span>
        </div>
        <div className="flex flex-col items-center md:items-end md:flex-row">
          <img src={chat} alt="" />
          <img src={mockup} className="w-[18em]" alt="cta" />
        </div>
      </div>
    </div>
  );
};

export default Getapp;
