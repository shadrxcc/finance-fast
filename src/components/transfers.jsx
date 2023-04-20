import recipient from "../assets/recipient.svg";
import redx from "../assets/red-x-mark.svg";
import { solution3, solution4 } from "./data";

const Transfers = () => {
  return (
    <div className="flex flex-col gap-y-[88px]">
      <div className="flex flex-col text-center gap-y-[16px] items-center">
        <div data-aos="fade-up">
          <span id="real-time">EASILY RECEIVE & REQUEST</span>
        </div>
        <div data-aos="fade-up">
          <p className="convert font-bold text-[24px] md:text-[40px] w-[10em] md:w-[622px] text-[#1A1A1A] leading-[35px] md:leading-[48px]">
            Experience Seamless Money Transfers
          </p>
        </div>
        <div data-aos="fade-up">
          <p className="text-[#3A3A3A] px-2 md:px-0 leading-[26px] md:w-[560px] text-base">
            Simplify Your Money Management with Receive & Request Payments
          </p>
        </div>
      </div>
      <div className="flex flex-col p-[1em] gap-[5em] md:flex-row items-center justify-evenly">
        <div className="flex flex-col gap-y-[28px]">
          <div className="flex flex-col gap-y-[28px]">
            {solution3.map((items, id) => {
              return (
                <div
                  data-aos="fade-right"
                  className="flex items-center gap-x-[12px]"
                  key={id}
                >
                  <img src={items.icon} alt="x" />{" "}
                  <p className="text-[#3A3A3A] text-base">{items.item}</p>
                </div>
              );
            })}
          </div>
          <div data-aos="fade-right">
            <span className="flex border border-trpborder bg-[#F9F9F9] py-[8px] px-[5px] rounded-3xl gap-x-[12px] w-[242px]">
              <img src={redx} alt="" />
              <p className="text-[#3A3A3A] text-base">
                Limited payment methods
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-y-[28px]">
              {solution4.map((items, id) => {
                return (
                  <div
                    data-aos="fade-right"
                    className="flex items-center gap-x-[12px]"
                    key={id}
                  >
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

        <div className="bg-pinkbg p-9 gap-y-[40px] flex flex-col rounded-3xl">
          <div data-aos="zoom-in">
            <img src={recipient} className="w-[20em] m-auto" alt="" />
          </div>

          <span className="flex flex-col gap-y-[8px]">
            <p className="global-header text-[24px] md:text-[32px] leading-[33px] text-[#1A1A1A] font-bold">
              Effortless Payments
            </p>
            <p className="text-base lg:w-[459px] leading-[22px] text-[#3A3A3A]">
              Simplify Your Money Management with Receive & Request Payments on
              FinanceFast.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
