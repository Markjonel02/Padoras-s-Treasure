import { Ripple } from "primereact/ripple";
import Personal from "./CreateAccount/Personal";
const CreateAcc = () => {
  return (
    <>
      <div className=" mx-auto rounded-xl p-6 space-y-4 h-screen w-full antialiased ">
        <h1 className="text-xl xl:text-4xl lg:text-3xl md:text sm:text-sm font-Roboto-Bold mb-16">
          Personal Information
        </h1>
        <div className="container ">
          <div className="flex items-center justify-between">
            <span className="text-xs text-quaternary mb-2 font-Roboto-Medium">
              Personal Info
            </span>

            <span className="text-xs text-gray-600 mb-2 ml-[-30px] font-Roboto-Medium ">
              Address
            </span>

            <span className="text-xs text-gray-600 mb-2 font-Roboto-Medium">
              Verify
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                1
              </div>
            </div>
            <div className="border-b-2 border-green-500 h-1 flex-grow"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
                2
              </div>
            </div>
            <div className="border-b-2 border-gray-300 h-1 flex-grow"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
                3
              </div>
            </div>
          </div>
          <Personal></Personal>
        </div>
        <div className="maincon flex justify-between  mt-20">
          <div className="text-con flex justify-center items-center md:"></div>
          <div className="ml-2 flex bottom-0 top-0 right-0">
            <button className=" p-ripple text-center rounded-lg border border-secondary p-3 px-5 me-2 hover:scale-105">
              Save as draft
              <Ripple />
            </button>
            <button className="p-ripple hover:scale-105 text-center rounded-lg border border-primary text-quinary p-3 px-5 bg-dark-pink">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Ripple />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateAcc;
