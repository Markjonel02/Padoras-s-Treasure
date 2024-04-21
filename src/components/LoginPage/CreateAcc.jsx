import Personal from "./CreateAccount/Personal";
import { LazyContext } from "../../context/LazyContext";
import { useContext } from "react";
import { Loaders } from "../Loaders";

const CreateAcc = () => {
  const { isLoading } = useContext(LazyContext);
  return (
    <>
      {isLoading ? (
        <div className=" mx-auto bg-slate-100  p-6 space-y-4 h-screen w-full  shadow ">
          <div className="text-con flex justify-between items-center ">
            <h1 className="text-xl xl:text-5xl sm:text-xl text-quaternary font-Roboto-Bold truncate sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              Create Account
            </h1>
            <div className="flex justify-center items-center">
              <button className="relative font-bold text-lg text-quaternary">
                <a
                  href="/"
                  className="relative z-10  justify-center items-center flex "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-quaternary transform scale-x-0 transition-transform duration-300 origin-left"></span>
                </a>
              </button>
            </div>
          </div>

          <Personal />
        </div>
      ) : (
        <>
          <Loaders />
        </>
      )}
    </>
  );
};
export default CreateAcc;
