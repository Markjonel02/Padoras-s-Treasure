import background from "../assets/imgs/model.svg";
import HomeSection from "./HomeSection";
import { useState, useEffect } from "react";
import { Loaders } from "../components/Loaders";
const Home = () => {
  const [imageLoad, setimageLoad] = useState(false);

  useEffect(() => {
    const Load = () => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        setInterval(() => {
          img.onload = () => resolve();
          img.error = () => reject();
          img.src = background;
        }, 3000);
      });
    };

    Load()
      .then(() => {
        setimageLoad(true);
      })
      .catch(() => {
        console.error("Error loading image");
      });
  }, []);

  return (
    <>
      <div className="relative h-screen shadow">
        {imageLoad ? (
          <>
            <img
              className="absolute inset-0 object-cover w-full h-full "
              src={background}
              alt="Background"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col z-20 text-center text-quinary shadow-2xl">
              <h1
                className=" text-5xl xl:text-6xl md:text-6xl  sm:text-5xl  font-extrabold dark:text-quinary text-quaternary"
                data-aos="zoom-out"
                data-aos-duration="1500"
              >
                Pandora<span>&apos;</span>s Treasure
              </h1>
              <p
                className="sm:text-xl text-2xl md:text-2xl dark:text-quinary text-quaternary"
                data-aos="zoom-out"
                data-aos-duration="1800"
              >
                Unlock the secrets within this mystical online store
              </p>
            </div>
          </>
        ) : (
          <Loaders />
        )}
      </div>
      <div
        className="home-section"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <HomeSection />
      </div>
    </>
  );
};

export default Home;
