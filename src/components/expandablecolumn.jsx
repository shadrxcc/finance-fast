import React, { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import Textsection from "./textsection";

const Expandablecolumn = ({ question, toggle }) => {
  

  return (
    <div>
      <div className="flex justify-between" toggle={toggle} >
        <div>{question}</div>
        <button
          style={{
            transform: `rotate(${toggle ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          <MdOutlineExpandMore className="text-dark" />
        </button>
      </div>
      {/* {toggle && <Textsection answer={questions.answer}/>} */}
    </div>
  );
};

export default Expandablecolumn;
