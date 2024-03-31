import React from "react";
import ung from "../assets/imgs/products/1.png";
import logo from "../assets/imgs/products/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

const ProductsOverview = () => {
  const breakpoints = {
    // Define breakpoints where slidesPerView changes
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.8,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.4,
    },
    1024: {
      slidesPerView: 2.8,
    },
    1280: {
      slidesPerView: 3.2,
    },
    1440: {
      slidesPerView: 3.8,
    },
    1600: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 4,
    },
  };

  return (
    <Swiper
      className={`container mx-auto antialiased `}
      spaceBetween={10}
      breakpoints={breakpoints}
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {[...Array(10).keys()].map((index) => (
        <SwiperSlide key={index}>
          <div className="p-5">
            <div className="max-w-sm mx-auto overflow-hidden relative shadow-lg rounded-lg hover:scale-110  ease-in cursor-grab dark:hover:bg-quinary hover:bg-dark-pink mb-10">
              <img
                className="absolute left-0 top-0 w-16 h-auto sm:w-16 lg:w-24"
                src={logo}
                alt="logo"
              />
              <div className="relative">
                <img
                  className="w-full h-60 object-cover hover:animate-bounce sm:"
                  height
                  src={ung}
                  alt="ung"
                />
                <div className="absolute inset-0 bg-primary opacity-20"></div>
                <div className="absolute inset-0 flex justify-center items-center"></div>
              </div>
              <div className="bg-white p-5 dark:bg-darks  ">
                <h5 className="text-red text-xl font-lighter tracking-wide uppercase dark:text-white  mt-2 leading-loose">
                  shea butter
                </h5>
                <p className="text-gray-700 text-base dark:text-gray-300 0000 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti natus et quas dicta? Blanditiis, provident.
                </p>

                <p className="price text-quaternary font-bold dark:text-white text-xl">
                  Php 200.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsOverview;
