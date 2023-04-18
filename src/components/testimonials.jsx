import React from "react";
import { reviews } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  
  return (
    <div className="pt-[124px]">
      <div className="flex flex-col gap-y-[72px]">
        <div className="text-center flex flex-col gap-y-[16px]">
          <p data-aos="fade-up" id="real-time">TESTIMONIALS</p>
          <p data-aos="fade-up" className="grift text-[#1A1A1A] text-[30px] md:text-[40px] leading-[48px] font-bold">
            What Our Customers are Saying
          </p>
        </div>
        <div data-aos="zoom-in" className="px-5 lg:px-[14em]">
          <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
            slidesPerView={1}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            loop={false}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
           
          >
            {reviews.map((comment, id) => {
              return (
                <>
                  <SwiperSlide key={id}>
                    <div className="flex flex-col bg-reviewbg rounded-[24px] py-[3em] px-[2em] gap-y-[28px] md:gap-y-[92px] items-center">
                      <p className="text-[1.23rem] md:text-2xl leading-[35px] text-center lg:w-[642px] font-medium text-[#3A3A3A]">
                        {comment.review}
                      </p>
                      <span className="flex w-[100%] border-t-[1px] justify-center pt-2 border-solid border-bordertop items-center gap-x-[12px]">
                        <img src={comment.pfp} alt="" />
                        <div>
                          <p className="grift text-xl leading-[21px] font-bold text-[#1A1A1A]">
                            {comment.name}
                          </p>
                          <p className="text-base text-[#3A3A3A] leading-[22px]">
                            {comment.title}
                          </p>
                        </div>
                      </span>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
