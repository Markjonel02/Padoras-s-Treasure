import { useLazyContext } from "../context/LazyContext";
import { Loaders } from "../components/Loaders";
import AboutHero from "../components/AboutHero";
import svg from "../assets/imgs/svgs/aboutsvgs/about_imgmodel2.svg";
import circle from "../assets/imgs/svgs/aboutsvgs/circle-blob.svg";

const About = () => {
  const { isLoading } = useLazyContext();
  return (
    <>
      {isLoading ? (
        <>
          <div className="about-section bg-primary relative h-screen flex justify-center items-center flex-col ">
            <div className="first-slid flex justify-end items-center ">
              <div className="flex justify-between  h-full mt-12 xl:flex-row  ">
                <div className="text-con flex justify-center items-center w-full  ml-0 md:ml-10 xl:ml-28">
                  <h5
                    className="text-secondary text-4xl md:text-5xl xl:text-6xl font-Roboto-Black  text-center md:text-left"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    Unlock Your Radiance with Pandora<span>&apos;</span>s
                    Treasure: Where Beauty is Unveiled
                  </h5>
                </div>

                <div className=" w-1/2">
                  <div className="flex justify-end items-center h-full ">
                    <div className="h-96 md:h-300  flex justify-end items-center relative">
                      <img
                        src={circle}
                        alt=""
                        className="object-contain md:object-cover w-full h-[500px]"
                        data-aos="fade-right"
                        data-aos-duration="700"
                      />
                      <img
                        src={svg}
                        alt=""
                        className="absolute object-contain md:object-cover w-full h-[600px] mr-9"
                        data-aos="fade-left"
                        data-aos-duration="900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container ">
           
            <AboutHero />
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

export default About;
