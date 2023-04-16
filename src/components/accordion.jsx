import React, { useState } from "react";
import { faqs } from "./data";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from '';

const AccordionDropDown = () => {


//   const handleToggle = () => {
//     setToggle(!toggle);
//   };
  return (
    <>
      <div>
      <Accordion>
            
       
        {faqs.map((questions, id) => {
          return (
            <>
<AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {questions.question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {questions.answer}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            </>
          );
        })}
       </Accordion></div>
    </>
  );
};

export default AccordionDropDown;
