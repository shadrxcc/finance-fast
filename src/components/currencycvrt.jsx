import purpose from "../assets/Group-3.svg";
import { demographic } from "./data";
import acct from "../assets/iPhoneglobal-account.svg";

const Currency = () => {
  return (
    <>
      <div className="flex flex-col gap-y-[88px]">
        <div className="flex flex-col text-center gap-y-[16px] items-center">
          <div data-aos="fade-up"><span id="real-time">REALTIME EXCHANGE RATE</span></div>
          <div data-aos="fade-up"> <p className="convert font-bold text-[24px] md:text-[40px] w-[10em] md:w-[622px] text-[#1A1A1A] leading-[35px] md:leading-[48px]">
            Effortlessly Convert Currency
          </p></div>
         <div data-aos="fade-up"><p className="text-[#3A3A3A] px-2 md:px-0 leading-[26px] md:w-[560px] text-base">
            Convert your currency from Pounds to Naira or Naira to Dollars.
            Convert Currency Anytime, Anywhere with FinanceFast's Seamless and
            Efficient Service.
          </p></div>
          
        </div>

        <div className="flex flex-col p-[1em] gap-x-5 gap-y-[5em] md:flex-row items-center justify-evenly">
          <div className="bg-pinkbg p-9 gap-y-[40px] flex flex-col rounded-3xl">
            <div data-aos="zoom-in"><img src={purpose} className=" m-auto" alt="" /></div>
            
            <span className="flex flex-col gap-y-[8px]">
              <p className="global-header text-[24px] md:text-[32px] leading-[33px] text-[#1A1A1A] font-bold">
                Zero Hidden Fees
              </p>
              <p className="text-base leading-[22px] text-[#3A3A3A]">
                Get the Best Exchange Rates with FinanceFast: Convert Currency
                <br />
                Hassle-Free, Instantly and Without Fees.
              </p>
            </span>
          </div>
          <div className="feature-vs_divider gap-1 items-center flex md:flex-col">
            <div className="line md:min-w-[1px] min-h-1px min-w-[135px] md:min-h-[225px] border border-solid border-bgrey"></div>
            <div className="text-block-4 text-lg leading-6 font-bold text-[#3A3A3A]">
              VS
            </div>
            <div className="line md:min-w-[1px] min-h-1px min-w-[135px] md:min-h-[225px] border border-solid border-bgrey"></div>
          </div>
          <div className="flex flex-col gap-y-[60px]">
            {demographic.map((info, id) => {
              return (
                <>
                  <div key={id} className="flex items-center gap-x-[24px]">
                    <div data-aos="zoom-out"><img src={info.currency} alt="currency" /></div>
                    
                    <div data-aos="fade-right" className="flex flex-col gap-y-5"><span>
                      <p className="text-base md:text-xl grift text-[#1A1A1A] font-bold leading-[21px]">
                        {info.country}
                      </p>
                      <p className="text-sm md:text-base text-[#3A3A3A] ">{info.fee}</p>
                    </span></div>
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
