import React from "react";
import { faqs } from "./data";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const AccordionDropDown = () => {
  return (
    <>
      <div>
        <Accordion allowToggle className="flex flex-col gap-y-[32px]">
          {faqs.map((questions, id) => {
            return (
              <>
                <AccordionItem key={id} className="flex md:w-[719px] gap-y-[16px] flex-col">
                  <h2>
   
                    <AccordionButton>
                      <Box as="span" flex="1" className="grift text-[#1A1A1A] font-bold text-base md:text-xl leading-[21px]" textAlign="left">
                        {questions.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="text-base leading-[22px] text-[#3A3A3A]" pb={4}>{questions.answer}</AccordionPanel>
                </AccordionItem>
              </>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default AccordionDropDown;
