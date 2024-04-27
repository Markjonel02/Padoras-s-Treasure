import { useLazyContext } from "../../context/LazyContext";
import { Loaders } from "../Loaders";
import lipstick from "../../assets/imgs/svgs/Lipstick.svg";
import des1 from "../../assets/imgs/svgs/des1.svg";
import des2 from "../../assets/imgs/svgs/des2.svg";
const Lipserum = () => {
  const { isLoading } = useLazyContext();
  return (
    <>
      {isLoading ? (
        <>
          <div className="content relative">
            <div className="absolute z-10 flex justify-center items-center w-full h-full rounded-full">
              <img
                src={lipstick}
                alt="lipstick"
                className="rounded-full "
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>

            <div className=" relative containers flex justify-center  items-center w-full h-screen">
              <div className="left-side  w-1/2 h-full text-center bg-quaternary">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-Roboto-Black text-quinary mt-10 ease-linear"
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
                  className="absolute bottom-10  left-auto right-20 text-center text-8xl font-Roboto-Black text-quaternary"
                  data-aos="fade-right"
                  data-aos-duration="2500"
                >
                  Lip Serum
                </h1>
              </div>
            </div>

            <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Roboto-Black text-quaternary text-center mt-10">
              Top Brands
            </h1>
            <div className="relative flex justify-center items-center mt-20 mb-20">
              <div className="inline-flex rounded-md shadow-sm  absolute z-20 ">
                <a
                  href="#"
                  aria-current="page"
                  className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Caroline
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Maybeline
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Avon
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  chanel{" "}
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Nars
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loaders />
      )}
    </>
  );
};

export default Lipserum;
