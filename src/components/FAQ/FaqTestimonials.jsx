import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { Ripple } from "primereact/ripple";
import "swiper/css";
const FaqTestimonials = () => {
  const Breakpoints = {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
  };
  return (
    <>
      <h1 className="text-xl  xl:text-5xl md:text-4xl sm:text-3xl  flex justify-center font-Roboto-Black dark:text-quinary text-gray-800">
        Customer{"'"}s Feedback
      </h1>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={Breakpoints}
        modules={[Autoplay]}
        navigation
        grabCursor="true"
        className="flex justify-center items-center mt-10 mb-20  h-full p-5 "
      >
        <div className="testimonials flex justify-center align-middle text-quaternary font-Roboto-LightItalic dark:bg-darks ">
          <SwiperSlide className="flex justify-center p-3">
            <figure className="max-w-screen-md mx-auto  border border-gray-200 p-6 rounded-xl shadow-xl ">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 font-Roboto-LightItalic dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl font-Roboto-LightItalic text-quaternary dark:text-white">
                  <span>&quot;</span>Flowbite is just awesome. It contains tons
                  of predesigned components and pages starting from login screen
                  to complex dashboard. Perfect choice for your next SaaS
                  application.
                  <span>&quot;</span>
                </p>
              </blockquote>
              <Ripple />
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-Roboto-MediumItalic text-quaternary dark:text-white">
                    Michael Gough
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </cite>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-3">
            <figure className="max-w-screen-md mx-auto  border border-gray-200 p-6 rounded-xl shadow-xl ">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl font-Roboto-LightItalic text-quaternary dark:text-white">
                  <span>&quot;</span>Flowbite is just awesome. It contains tons
                  of predesigned components and pages starting from login screen
                  to complex dashboard. Perfect choice for your next SaaS
                  application.
                  <span>&quot;</span>
                </p>
              </blockquote>

              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-Roboto-MediumItalic text-gray-900 dark:text-white">
                    Michael Gough
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </cite>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-3">
            <figure className="max-w-screen-md mx-auto  border border-gray-200 p-6 rounded-xl shadow-xl ">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl font-Roboto-LightItalic text-quaternary dark:text-white">
                  <span>&quot;</span>Flowbite is just awesome. It contains tons
                  of predesigned components and pages starting from login screen
                  to complex dashboard. Perfect choice for your next SaaS
                  application.
                  <span>&quot;</span>
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-Roboto-MediumItalic text-gray-900 dark:text-white">
                    Michael Gough
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </cite>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide className="cards flex justify-center p-3">
            <figure className="max-w-screen-md mx-auto  border border-gray-200 p-6 rounded-xl shadow-xl p-ripple">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <Ripple />
              <blockquote>
                <p className="text-xl font-Roboto-LightItalic text-quaternary dark:text-white">
                  <span>&quot;</span>Flowbite is just awesome. It contains tons
                  of predesigned components and pages starting from login screen
                  to complex dashboard. Perfect choice for your next SaaS
                  application.
                  <span>&quot;</span>
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-Roboto-MediumItalic text-gray-900 dark:text-white">
                    Michael Gough
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </cite>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-3">
            <figure className="max-w-screen-md mx-auto  border border-gray-200 p-6 rounded-xl shadow-xl ">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl font-Roboto-LightItalic text-quaternary dark:text-white">
                  <span>&quot;</span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illum in nemo neque cum fugiat sequi iste
                  accusantium. Officia, corrupti pariatur ut nesciunt, magnam,
                  deserunt harum sequi repellat doloribus non quam.
                  <span>&quot;</span>
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-Roboto-MediumItalic text-gray-900 dark:text-white">
                    Michael Gough
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </cite>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default FaqTestimonials;
