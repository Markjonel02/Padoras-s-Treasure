import { useState } from "react";
const WhyShopPandoraCosmetics = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <section
      className="why-shop-section bg-gray-100 py-8 sm:py-10 lg:py-12 mt-20 text-quaternary"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold text-center xl:mb-20 sm:mb-8">
          Why Choose Pandora?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col items-center px-4 sm:px-0 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isHovered ? "#d1c7c7ff" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 hover:animate-pulse ease"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>

            <h3 className="text-lg sm:text-xl font-medium mb-1">
              High-Quality Ingredients
            </h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Crafted with premium ingredients for superior performance and
              results.
            </p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isHovered2 ? "#FCA5A5" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 hover:animaate-ping"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>

            <h3 className="text-lg sm:text-xl font-medium mb-1">
              Extensive Product Range
            </h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Discover a wide selection of cosmetics for every skin type and
              style preference.
            </p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isHovered3 ? "#bdb3b3ff" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 hover:animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <h3 className="text-lg sm:text-xl font-medium mb-1">
              Exceptional Support
            </h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Our dedicated team is here to assist you with personalized
              recommendations and assistance.
            </p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isHovered4 ? "#fa7f7fff" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4  hover:animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <h3 className="text-lg sm:text-xl font-medium mb-1 ">
              Cruelty-Free
            </h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              We are committed to ethical practices and never test on animals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShopPandoraCosmetics;
