import { useLazyContext } from "../context/LazyContext";
import { Loaders } from "./Loaders";
import blob from "../assets/imgs/svgs/aboutsvgs/circle-blob.svg";
import design from "../assets/imgs/svgs/aboutsvgs/design.svg";
import table from "../assets/imgs/svgs/aboutsvgs/table.svg";
import serum from "../assets/imgs/svgs/aboutsvgs/Serum.svg";
const Faq = () => {
  const { isLoading } = useLazyContext();
  return (
    <>
      {isLoading ? (
        <>
          <div className="faq-wrapper relative border flex bg-primary ">
            <div className="w-full lg:w-2/3 min-h-screen flex justify-center items-center text-center">
              <h1
                className="font-Roboto-Black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 text-white"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                How can we help you?
              </h1>
            </div>

            <div className="flex justify-center items-center w-full lg:w-1/2  ">
              <div className="image-container flex justify-center items-center relative sm:mt-0 md:mt-14 lg:mt-10 xl:mt-20">
                <img
                  src={table}
                  alt=""
                  className="flex "
                  data-aos="fade-left"
                  data-aos-duration="800"
                />
                <img
                  src={serum}
                  alt=""
                  className=" absolute h-[400px] top-[-60px] "
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
                <img
                  src={design}
                  alt=""
                  className=" absolute h-[400px] top-[-60px] "
                  data-aos="fade-left"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loaders />
        </>
      )}
    </>
  );
};

export default Faq;
