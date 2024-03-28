import img from "../assets/imgs/svgs/pic.svg";

const Homebanner = () => {
  return (
    <>
      <div className="banner-wrapper relative shadow-lg flex w-full h-[400px] bg-primary dark:bg-darks">
        <div className="image-container flex justify-end absolute top-0 right-0 bottom-0">
          <img
            src={img}
            alt="banner"
            className="h-full"
            style={{ position: "sticky", right: 0 }}
          />
        </div>

        <div className="absolute inset-y-0 left-0 flex  items-center px-4">
          <div className="text-gray-700 dark:text-quinary dark flex justify-center flex-col px-20">
            <p
              className="text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-2 capitalize tracking-widest font-Roboto font-semibold"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              home of thea omorfia
            </p>
            <h2
              className=" text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight capitalize font-Roboto tracking-wide"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              pandora<span>&apos;s</span> treasure
            </h2>
            <div
              className="flex flex-col w-full sm:w-1/2"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <p
                className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl capitalize 
               font-light mt-5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                maiores aut minima illo, unde voluptatem! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. In maiores aut minima illo,
                unde voluptatem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
