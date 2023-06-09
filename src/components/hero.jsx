import React, { useEffect, useRef } from "react";
import naija from "../assets/9jaflag.svg";
import screens from "../assets/TEASE-OF-CONTINUATION.svg";
import { gsap, Power3 } from "gsap";

const Hero = () => {
  const textItem = useRef(null);

  useEffect(() => {
    gsap.to(textItem, {
      opacity: 0,
      duration: 0.5,
      y: 50,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div className="mt-[180px] md:mt-[200px]">
      <div className="text-center flex flex-col gap-y-[1.5em]">
        <h1
          id="hero-header"
          className="font-bold anim max-w-[928px] m-auto text-[32px] lg:text-5xl leading-[35px] md:leading-[54px]"
        >
          <span className="header" ref={textItem}>
            {" "}
            Simplify Your International
            <br /> Transactions with
          </span>{" "}
          <span className="header" id="abstract">
            One Platform
          </span>{" "}
        </h1>
        <p className="text-lg anim px-2.5 md:px-0 md:text-lg max-w-[640px] m-auto leading-6">
          Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast
          allows you effortlessly transfer money anywhere in the world with
          confidence and ease.
        </p>
      </div>
      <div className="flex items-center mt-[40px] justify-center">
        <div className="flex anim flex-col md:flex-row w-full md:w-auto px-5 gap-x-28 gap-y-3 justify-between md:border md:border-bgrey md:border-solid  rounded-[32px] md:px-2 py-1 md:bg-white">
          <div className="flex bg-white md:border-none border-bgrey border-solid border  md:bg-none md:rounded-none rounded-[32px] px-2 md:px-0 md:py-0 py-2 md:bg-none gap-x-[16px]">
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
            <button id="download-btn" className="w-[100%]">
              Download Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[148px]">
        <img src={screens} className="md:m-auto" alt="" />
      </div>
    </div>
  );
};

export default Hero;

// const rule = CSSRulePlugin.getRule()
