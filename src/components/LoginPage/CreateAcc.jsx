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
          <div className="text-con flex justify-center items-center md:">
            <h1 className="text-xl xl:text-5xl sm:text-xl text-quaternary font-Roboto-Bold truncate sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              Create Account
            </h1>
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
