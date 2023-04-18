import React from "react";
import { pros } from "./data";
import cta from "../assets/cta.svg";

const Breezepayments = () => {
  return (
    <div className="px-4 pt-[132px] lg:px-[55px]">
      <div className="bg-[#5A5DF7] gap-y-5 linebg p-[3rem] rounded-3xl items-center flex flex-col lg:flex-row justify-center">
        <div className="flex text-center items-center lg:items-start lg:text-start flex-col gap-y-[24px]">
          <p data-aos="fade-up-left" className="grift text-[34px] lg:text-[40px] leading-[35px] lg:leading-[48px] md:w-[729px] text-white">
            Make International Payments a Breeze with FinanceFast
          </p>
          <span className="flex flex-col md:flex-row gap-x-[54px]">
            {pros.map((product, id) => {
              return (
                <div data-aos="fade-left" className="flex gap-x-[12px] text-white">
                  <img src={product.icon} alt="check-icon" />
                  <p className="text-xl leading-[27px] font-medium">
                    {product.pro}
                  </p>
                </div>
              );
            })}
          </span>
        </div>
        <div className="">
          <img data-aos="flip-down" src={cta} alt="cta" />
        </div>
      </div>
    </div>
  );
};

export default Breezepayments;
