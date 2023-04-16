import React from "react";
import { faqs } from "./data";
import AccordionDropDown from "./accordion";

const Faq = () => {
  return (
    <div className="pt-[112px]">
      <div className="flex flex-col px-3 gap-y-[88px]">
        <div className="text-center flex flex-col gap-y-[16px]">
          <p id="real-time">FAQ’S</p>
          <span>
            <p className="grift text-[#1A1A1A] text-[32px] md:text-[40px] leading-[48px] font-bold">
              Got questions?
            </p>
            <p>Get the answers to your questions about FastFinance.</p>
          </span>
        </div>

        <div className="flex flex-col items-center">
            <AccordionDropDown/>
        </div>
      </div>
    </div>
  );
};

export default Faq;

