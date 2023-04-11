import React from "react";
import naija from "../assets/9jaflag.svg";
import screens from '../assets/TEASE-OF-CONTINUATION.svg'

const Hero = () => {
  return (
    <div className="mt-[150px]">
      <div className="text-center flex flex-col gap-y-[1.5em]">
        <h1
          id="hero-header"
          className="font-bold max-w-[928px] m-auto text-[2em] lg:text-5xl leading-[54px]"
        >
          Simplify Your International
          <br /> Transactions with <span id="abstract">One Platform</span>{" "}
        </h1>
        <p className="text-lg max-w-[640px] m-auto leading-6">
          Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast
          allows you effortlessly transfer money anywhere in the world with
          confidence and ease.
        </p>
      </div>
      <div className="flex items-center mt-[40px] justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-auto px-5 gap-x-28 gap-y-3 justify-between rounded-[32px] md:px-2 py-1 md:bg-white">
          <div className="flex bg-white md:bg-none md:rounded-none rounded-[32px] px-2 md:px-0 md:py-0 py-2 md:bg-none gap-x-[16px]">
            <span className="flex">
              <img src={naija} alt="nigerian-flag" />
              <select
                className="focus:outline-none bg-transparent"
                name="countries"
                id="countries"
              ></select>
            </span>

            <input
              className="focus:outline-none bg-transparent"
              type="text"
              placeholder="+234"
              name="number"
              id="number"
            />
          </div>
          <div>
            <button id="download-btn" className="w-[100%]">Download Now</button>
          </div>
        </div>
      </div>

      <div className="mt-[148px]">
<img src={screens} className='md:m-auto' alt="" />
      </div>
    </div>
  );
};

export default Hero;
