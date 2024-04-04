import { Ripple } from "primereact/ripple";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Button } from "primereact/button";
const FaqForm = () => {
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message Content",
      life: 3000,
    });
  };
  return (
    <>
      <div className="title bg-primary dark:bg-darks text-white w-full flex justify-center items-center mb-20 flex-col">
        <div className="content">
          {" "}
          <h1
            className="text-center text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  mt-20 p-3 font-Roboto-Black"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Your Opinion Matters, Submit Your Review Today!
          </h1>
          <div
            className=" p-4 rounded-lg md:p-8 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-quaternary sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">73k+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Sellers</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">100k+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Orders</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1000+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  New Customers
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  New Products
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Top Forbes companies
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Organizations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="p-8 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Welcome to Our Website</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lobortis orci eget libero efficitur mollis.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 text-quaternary">
            <div className="p-8 bg-white rounded-lg shadow-xl">
              <form className="max-w-xl mx-auto">
                <h1 className="text-4xl mb-10 mt-5 font-Roboto-Bold  ">
                  Share your thoughts!
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text--quaternary"
                    >
                      Firstname
                    </label>
                    <input
                      type="text"
                      id="email"
                      pattern="[a-zA-Z\s]*"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-quaternary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 p-2.5 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="John "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Lastname"
                      className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text-"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      id="Lastname"
                      pattern="[a-zA-Z\s]*"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-quaternary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 p-2.5 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text-quaternary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="7"
                    className="block p-2.5 w-full text-md text-quaternary bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-blue-500 dark:bg-gray-100  dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <Toast ref={toast} />
                <Button
                  onClick={showSuccess}
                  type="sbumit"
                  severity="success"
                  className="p-ripple text-white font-Roboto-Bold text-lg sm:text-sm xl:text-lg h-14 w-full bg-darks focus:ring-4 focus:outline-none focus:ring-dark-pink font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-blue-800"
                >
                  Send message
                  <Ripple />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqForm;
