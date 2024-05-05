import lipstickData from "./AvonData";
import { Swiper, SwiperSlide } from "swiper/react";

const Avon = () => {
  return (
    <>
      <Swiper>
        {lipstickData.map((data, index) => {
          <SwiperSlide key={index}>
            <div className="p-5">
              <div className="max-w-sm mx-auto overflow-hidden relative shadow-lg rounded-lg hover:scale-110  ease-in cursor-grab dark:hover:bg-quinary hover:bg-dark-pink mb-3">
                <img
                  className="absolute left-0 top-0 w-16 h-auto sm:w-16 lg:w-24"
                  src={logo}
                  alt="logo"
                />
                <div className="relative p-ripple">
                  <img
                    className="w-full h-60 object-cover hover:animate-bounce sm:"
                    height
                    src={ung}
                    alt="ung"
                  />

                  <Ripple />
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
          </SwiperSlide>;
        })}
      </Swiper>
      ;
    </>
  );
};

export default Avon;
