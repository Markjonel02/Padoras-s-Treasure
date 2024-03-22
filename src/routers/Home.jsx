import background from "../assets/imgs/model.svg";
import HomeSection from "./HomeSection";
import { useState, useEffect } from "react";
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
      {" "}
      <div className="relative h-screen">
        {imageLoad ? (
          <>
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={background}
              alt="Background"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col z-20 text-center text-quinary shadow-2xl">
              <h1 className=" text-7xl sm:text-4xl md:text-7xl font-extrabold">
                Pandora<span>&apos;</span>s Treasure
              </h1>
              <p className="text-2xl sm:text-2xl md:text-2xl">
                Unlock the secrets within this mystical online store
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center bg-neutral-300 w-full h-full animate-pulse rounded-xl p-4 gap-4">
            <div className="bg-neutral-400/50 w-full top-4 h-56 animate-pulse rounded-md"></div>
            <div className="flex flex-col gap-4">
              <div className="bg-neutral-400/50 w-full h-20 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-4/5 h-10 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-full h-6 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-2/4 h-5 animate-pulse rounded-md"></div>
            </div>
          </div>
        )}
      </div>
      <div className="home-section">
        <HomeSection />
      </div>
    </>
  );
};

export default Home;
