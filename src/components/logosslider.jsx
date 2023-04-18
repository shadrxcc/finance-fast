import React from "react";
import { logolist } from "./data";
import { gsap } from "gsap";

const Logosslider = () => {
  return (
    <div className="bg-[#E5DBFB] h-[140px] justify-around flex flex-col lg:flex-row items-center">
      <div>
        <p className="font-medium recognize max-w-[339px] text-danger-300 text-center leading-6 text-lg text-[#3A3A3A]">
          We're have been recognized by Leading <br/> Finance Publications and
          Organizations.
        </p>
      </div>
      <div className="slider">
        <div className="slider-track lg:gap-x-[3em]">
            {logolist.map((logos, id) => {
                return (
                    <>
                    <div className='slide mx-2'>
                        <img className="" key={id} src={logos.logo} alt="" />
                    </div>
                    </>
                )
            })}</div>
      </div>
    </div>
  );
};

export default Logosslider;

gsap.from(".recognize", {
  scrollTrigger: ".recognize", // start the animation when ".box" enters the viewport (once)
  x: -10
});