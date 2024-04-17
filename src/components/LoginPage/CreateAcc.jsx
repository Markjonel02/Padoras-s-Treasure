import { Ripple } from "primereact/ripple";
import Personal from "./CreateAccount/Personal";

const CreateAcc = () => {
  return (
    <>
      <div className=" mx-auto bg-slate-100  p-6 space-y-4 h-screen w-full  shadow ">
        <div className="maincon flex justify-between mb-10 ">
          <div className="text-con flex justify-center items-center md:">
            <h1 className="text-xl xl:text-2xl sm:text-xl font-Roboto-Medium truncate sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              Create Account
            </h1>
          </div>
          <div className="ml-2 flex bottom-0 top-0 right-0">
            <a
              href="#"
              className="flex  p-ripple text-center rounded-lg border border-quaternary hover:bg-secondary p-3 px-5 me-2 hover:scale-105"
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
              Back
              <Ripple />
            </a>

            <a
              href="/"
              className="p-ripple hover:scale-105 text-center rounded-lg border border-primary text-quinary p-3 px-5 bg-dark-pink"
            >
              <button>
                Home
                <Ripple />
              </button>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-md text-gray-600 mt-2 font-Roboto-Medium">
            Personal Info
          </span>

          <span className="text-md text-gray-600 mt-2 font-Roboto-Medium">
            Verification
          </span>

          <span className="text-md text-gray-600 mt-2 font-Roboto-Medium">
            confirmation
          </span>
        </div>
        <div className="flex items-center justify-between  mb-20 sm:20">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-pink text-white">
              <div className="rounded-full p-2 h-3 w-3 bg-quinary"></div>
            </div>
          </div>
          <div className="border-b-2 border-quaternary h-1 flex-grow"></div>
          <div className=" flex items-center">
            <div className="absolute w-8 h-8 flex items-center justify-center rounded-full bg-dark-pink text-gray-600">
              {/*  <div className="rounded-full p-2 h-3 w-3 bg-quinary"></div> */}
            </div>
          </div>
          <div className="border-b-2 border-primary h-1 flex"></div>

          <div className="border-b-2 border-primary h-1 flex-grow"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-pink text-gray-600">
              {/* <div className="rounded-full p-2 h-3 w-3 bg-quinary"></div> */}
            </div>
          </div>
        </div>
        <Personal></Personal>
      </div>
    </>
  );
};
export default CreateAcc;
