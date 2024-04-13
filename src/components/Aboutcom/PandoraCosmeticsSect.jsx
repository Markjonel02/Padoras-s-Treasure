import video from "../../assets/video/Cosmetics.mp4";
import { Ripple } from "primereact/ripple";

const PandoraCosmeticsSect = () => {
  return (
    <>
      <section className="pandora-cosmetics-section bg-white py-8 md:py-12  text-quaternary dark:bg-darks dark:text-quinary">
        <div className="container mx-auto sm:flex-col  md:flex-row lg:flex-col p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div
              className="cosmetics-imageflex justify-items-center p-4 inset-0"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <video autoPlay loop muted>
                <source
                  src={video}
                  type="video/mp4"
                  className="rounded shadow-md w-full h-full "
                  alt="Pandora Cosmetics"
                />
              </video>
            </div>
            <div
              className="cosmetics-content flex flex-col justify-center text-quaternary  dark:text-quinary"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className="text-xl xl:text-4xl md:text-3xl font-Roboto-Bold mb-2 md:mb-4">
                Discover Pandora Cosmetics
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4 font-roboto-Regular  dark:text-quinary">
                Elevate your beauty routine with Pandora Cosmetics, where luxury
                meets innovation. Our extensive range of cosmetics is designed
                to empower and inspire, helping you express your unique beauty
                effortlessly.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4 font-roboto-Regular  dark:text-quinary">
                From exquisite makeup palettes to skincare essentials, each
                product is crafted with premium ingredients and advanced
                formulations, ensuring exceptional quality and performance.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4 font-roboto-Regular  dark:text-quinary">
                Whether you<span>&apos;</span>re seeking a natural glow or a
                glamorous look for a special occasion, Pandora Cosmetics has
                everything you need to create your signature style.
              </p>
              <div className="sample">
                {/*    <PrimeReactProvider value={{ ripple: true }}> */}
                <a
                  href="#"
                  className="p-ripple bg-primary flex justify-center text-white py-1 md:py-2 px-2 md:px-4 w-32 rounded-md text-sm md:text-base   "
                >
                  Shop Now
                  <Ripple />
                </a>
                {/*    </PrimeReactProvider> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PandoraCosmeticsSect;
