import React from "react";
import { faqs } from "./data";
import AccordionDropDown from "./accordion";

const Faq = () => {
  return (
    <div className="pt-[112px]">
      <div className="flex flex-col px-3 gap-y-[88px]">
        <div className="text-center flex flex-col gap-y-[16px]">
          <div
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            data-aos-delay="150"
            data-aos="fade-up"
          >
            {" "}
            <p id="real-time">FAQ’S</p>
          </div>

          <span>
            <div
              data-aos-duration="750"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
              data-aos="fade-up"
            >
              <p className="grift text-[#1A1A1A] text-[24px] md:text-[40px] leading-[48px] font-bold">
                Got questions?
              </p>
            </div>
            <div
              data-aos-duration="750"
              data-aos-easing="ease-in-out"
              data-aos-delay="250"
              data-aos="fade-up"
            >
              <p>Get the answers to your questions about FastFinance.</p>
            </div>
          </span>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="350"
          className="flex flex-col px-8 items-center"
        >
          <AccordionDropDown />
        </div>
      </div>
    </div>
  );
};

export default Faq;
