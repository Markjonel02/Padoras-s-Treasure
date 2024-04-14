import background from "../assets/imgs/model.svg";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import HomeSection from "./HomeSection";
import { Loaders } from "./Loaders";
import ProductsOverview from "./ProductsOverview";
import Homebanner from "./Homebanner";

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
      <div className="relative h-screen shadow w-screen dark:bg-darks">
        {imageLoad ? (
          <>
            <div className="relative h-screen w-full shadow ">
              <div
                className="absolute inset-0 bg-gray-700 opacity-50 z-10 bg-gradient-to-l from-quinary to-primary/50"
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
                  className="text-5xl xl:text-6xl md:text-6xl sm:text-5xl font-extrabold text-white"
                  data-aos="zoom-out"
                >
                  Pandora<span>&apos;</span>s Treasure
                </h1>
                <p
                  className="sm:text-xl text-2xl md:text-2xl  text-white dark:text-white"
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                >
                  Unlock the secrets within this mystical online store
                </p>
              </div>
            </div>
            <div className="section">
              <HomeSection />
            </div>
            <div className="home-banner mb-5 flex justify-center">
              <Homebanner />
            </div>
            <h1 className="Top Products text-5xl"></h1>
            <div
              className="prod-overview  mt-20"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <ProductsOverview />
            </div>
            <div className="foot  overflow-x-hidden ">
              <Footer />
            </div>
          </>
        ) : (
          <Loaders />
        )}
      </div>
    </>
  );
};

export default HomeImageCon;
