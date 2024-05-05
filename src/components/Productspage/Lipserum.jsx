import { useLazyContext } from "../../context/LazyContext";
import { Loaders } from "../Loaders";
import lipstick from "../../assets/imgs/svgs/Lipstick.svg";
import des1 from "../../assets/imgs/svgs/des1.svg";
import des2 from "../../assets/imgs/svgs/des2.svg";
import CardAnim from "./CardAnim";
import Footer from "../Footer";
import { ScrollTop } from "primereact/scrolltop";
import Avon from "./Avon";
const Lipserum = () => {
  const { isLoading } = useLazyContext();
  return (
    <>
      {isLoading ? (
        <>
          <div className="content relative mb-10">
            <div className="absolute z-10 flex justify-center items-center w-full h-full rounded-full ">
              <img
                src={lipstick}
                alt="lipstick"
                className="rounded-full "
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>

            <div className=" relative containers flex justify-center  items-center w-screen h-screen">
              <div className="left-side  w-1/2 h-full text-center bg-quaternary">
                <h1
                  className="text-5xl md:text-6xl lg:text-8xl font-Roboto-Black text-quinary mt-10 ease-linear"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  Pandora{"'"}s
                </h1>

                <img
                  src={des1}
                  alt=""
                  className="bottom-0 absolute w-[500px] h-auto"
                />
              </div>
              <div className="right-side  w-1/2 h-full text-center bg-[#D1C7C7]">
                <img
                  src={des2}
                  alt=""
                  className="absolute w-[500px] h-auto right-0"
                />

                <h1
                  className="absolute bottom-10 sm:right-20 md:right-32 lg:right-22 xl:right-40 text-center text-5xl md:text-6xl lg:text-8xl font-Roboto-Black text-quaternary"
                  data-aos="fade-right"
                  data-aos-duration="2500"
                >
                  Lip Serum
                </h1>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-col md:justify-between md:h-full mt-32">
            <h1 className="text-center md:text-lg lg:text-xl xl:text-6xl ">
              Discover the epitome of luxury
            </h1>
            <h3 className="text-center text-sm md:text-base lg:text-lg xl:text-5xl font-Roboto-Light">
              and innovation with our Curated
            </h3>
            <h3 className="text-center text-sm md:text-base lg:text-lg xl:text-5xl font-Roboto-Light">
              selection of top-tier brands
            </h3>
          </div>
          <div className="p-4">
            <div className="relative mx-auto max-w-md mt-20 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m-1.42-3.546A10 10 0 1118.64 7.36 8 8 0 1021.641 21.361z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-12 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex justify-center mb-32">
            <div className="inline-flex flex-wrap rounded-md shadow-sm mt-10">
              <a
                href="#"
                aria-current="page"
                className="px-4 py-2 text-sm md:text-base font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Avon
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm md:text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Chanel
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm md:text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Giorgio Armani
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm md:text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Charlotte Tilbury
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm md:text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Stila Cosmetics
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm md:text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Smashbox
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm md:text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Narsa
              </a>
            </div>
          </div>
          <ScrollTop
            threshold={100}
            className="w-5rem h-5rem border-round-md bg-dark-pink text-white rounded-full p-4"
          />

          <Avon />
          <CardAnim />

          <Footer />
        </>
      ) : (
        <Loaders />
      )}
    </>
  );
};

export default Lipserum;
