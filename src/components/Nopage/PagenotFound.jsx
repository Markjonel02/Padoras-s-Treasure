import video from "../../assets/video/404-light.mp4";
import { Ripple } from "primereact/ripple";
const PagenotFound = () => {
  return (
    <>
      <div className="nopage flex justify-center items-center bg-primary h-screen w-full">
        <div className="video-container relative w-full ">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div className="button absolute flex justify-center items-center  xl:bottom-52 md:bottom-20 left-auto  sm:bottom-0 right-1/2">
            <button className="p-ripple rounded border flex justify-center items-center px-4 py-3 bg-white animation-pulse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <a href="/" className="flex justify-center">
                sample
                <Ripple />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagenotFound;
