import background from "../assets/imgs/model.svg";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import HomeSection from "./HomeSection";
import { Loaders } from "../components/Loaders";
const HomeImageCon = () => {
  const [imageLoad, setImageLoad] = useState(false);

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
        setImageLoad(true);
      })
      .catch(() => {
        console.error("Error loading image");
      });
  }, []);

  return (
    <>
      <div className="relative h-screen shadow w-screen">
        {imageLoad ? (
          <>
            <div className="relative h-screen w-full shadow">
              <div
                className="absolute inset-0 bg-black opacity-50"
                style={{ mixBlendMode: "multiply" }}
              ></div>

              <div
                className="relative h-full w-full"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center flex-col z-20 text-center shadow-sm">
                <h1
                  className="text-5xl xl:text-6xl md:text-6xl sm:text-5xl font-extrabold dark:text-quaternary text-quinary"
                  data-aos="zoom-out"
                >
                  Pandora<span>&apos;</span>s Treasure
                </h1>
                <p
                  className="sm:text-xl text-2xl md:text-2xl dark:text-quaternary text-quinary"
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                >
                  Unlock the secrets within this mystical online store
                </p>
              </div>
            </div>
            <HomeSection />
            <Footer />
          </>
        ) : (
          <Loaders />
        )}
      </div>
    </>
  );
};

export default HomeImageCon;
