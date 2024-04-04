import { useLazyContext } from "../context/LazyContext";
import { Loaders } from "../components/Loaders";
import AboutHero from "../components/Aboutcom/AboutHero";
import svg from "../assets/imgs/svgs/aboutsvgs/about_imgmodel2.svg";
import circle from "../assets/imgs/svgs/aboutsvgs/circle-blob.svg";
import Footer from "../components/Footer";

const About = () => {
  const { isLoading } = useLazyContext();
  return (
    <>
      {isLoading ? (
        <>
          <div className="about-section bg-primary relative h-screen flex flex-col justify-center items-center dark:bg-darks">
            <div className="first-slid flex flex-col md:flex-row justify-between items-center mt-32">
              <div className="text-con w-full md:w-1/2 ml-0 md:ml-10 xl:ml-28">
                <h5
                  className="text-secondary text-4xl md:text-5xl xl:text-6xl font-Roboto-Black text-center md:text-left"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  Unlock Your Radiance with Pandora<span>&apos;</span>s
                  Treasure: Where Beauty is Unveiled
                </h5>
              </div>
              <div className="image w-full md:w-1/2 flex justify-center items-center relative">
                <div className="h-full relative">
                  <img
                    src={circle}
                    alt=""
                    className="object-contain md:object-cover w-full h-[500px] md:h-96"
                    data-aos="fade-right"
                    data-aos-duration="700"
                  />
                  <img
                    src={svg}
                    alt=""
                    className="absolute w-full h-auto xl:h-[500px] md:h-[500px]  bottom-0 md:top-auto object-cover"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="about-container ">
            <AboutHero />
          </div>

          <div className="foot mt-28">
            <Footer />
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
