import React from "react";
import { solution1, solution2 } from "./data";
import redx from "../assets/red-x-mark.svg";
import acct from "../assets/iPhoneglobal-account.svg";
{
  /* REALTIME EXCHANGE RATE  Effortlessly Convert Currency */
}
const International = () => {
  return (
    <div>
      <div className="flex flex-col text-center gap-y-[16px] items-center">
        <span id="real-time">CROSS-BORDER TRANSACTIONS</span>
        <p className="convert font-bold text-[30px] md:text-[40px] w-[10em] md:w-[622px] text-[#1A1A1A] leading-[35px] md:leading-[48px]">
          Say Goodbye to International Payment Hassles
        </p>
        <p className="text-[#3A3A3A] px-2 md:px-0 leading-[26px] md:w-[560px] text-base">
          Start your journey to hassle free Cross-Border Payments by downloading
the FastFinance app from your iOS of Android store.
        </p>
      </div>
      <div className="flex flex-col p-[1em] md:flex-row items-center justify-evenly">
        <div className="flex flex-col gap-y-[28px]">
          <div className="flex flex-col gap-y-[28px]">
            {solution1.map((items, id) => {
              return (
                <div className="flex items-center gap-x-[12px]" key={id}>
                  <img src={items.icon} alt="x" />{" "}
                  <p className="text-[#3A3A3A] text-base">{items.item}</p>
                </div>
              );
            })}
          </div>
          <div>
            <span className="flex border border-trpborder bg-[#F9F9F9] py-[8px] px-[5px] rounded-3xl gap-x-[12px] w-[206px]">
              <img src={redx} alt="" />
              <p className="text-[#3A3A3A] text-base">Lack of transparency</p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-y-[28px]">
              {solution2.map((items, id) => {
                return (
                  <div className="flex items-center gap-x-[12px]" key={id}>
                    <img src={items.icon} alt="x" />{" "}
                    <p className="text-[#3A3A3A] text-base">{items.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="feature-vs_divider gap-1 items-center flex md:flex-col">
       
          <div className="line md:min-w-[1px] min-h-1px min-w-[135px] md:min-h-[225px] border border-solid border-bgrey"></div>
          <div className="text-block-4 text-lg leading-6 font-bold text-[#3A3A3A]">
            VS
          </div>
          <div className="line md:min-w-[1px] min-h-1px min-w-[135px] md:min-h-[225px] border border-solid border-bgrey"></div>
        </div>

        <div className="bg-cardbg flex items-center flex-col rounded-3xl">
          <img src={acct} className='w-[20em]' alt="" />
          <span>
            <p className="global-header text-[32px] leading-[33px] text-[#1A1A1A] font-bold">
              Global accounts in minutes
            </p>
            <p className="text-base leading-[22px] text-[#3A3A3A]">
              FinanceFast solves problems by proving low fees, fast transfers,<br/>
              secure transactions, and a user-friendly platform.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default International;
