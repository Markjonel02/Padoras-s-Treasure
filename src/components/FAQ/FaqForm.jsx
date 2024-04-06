import Contact from "./faqContact";

const FaqForm = () => {
  return (
    <>
      <div className="title bg-primary dark:bg-darks text-white w-full flex justify-center items-center mb-20 flex-col">
        <div className="content">
          <h1
            className="text-center text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  mt-20 p-3 font-Roboto-Black"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Your Opinion Matters, Submit Your Review Today!
          </h1>
          <div
            className="p-4 rounded-lg md:p-8 "
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

      <div className="container mx-auto px-4  ">
        <div
          className="flex flex-wrap  "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className=" md:w-1/2 bg-gray-100   dark:bg-quinary  rounded-lg text-quaternary mb-10">
            <h1 className="text-3xl xl:text-4xl md:text-3xl sm:text-sm mb-3 font-Roboto-Black px-8 mt-5  capitalize text-quaternary">
              contact us
            </h1>
            <div className=" px-10 pb-4  rounded-lg text-quaternary">
              <div className="desc flex flex-wrap justify-around lg:justify-around">
                <div className="Phone w-full sm:w-auto flex-1 pr-2 mb-5 sm:mb-0 md:mb-0">
                  <span className="font-Roboto-Medium text-lg ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    Phone:
                  </span>
                  <p className="font-Roboto-Medium text-lg"> 123-456-7890</p>
                </div>
                <div className="Email w-full sm:w-auto flex-1 pr-2 mb-5 sm:mb-0 md:mb-0 xl:mb-5">
                  <span className="font-Roboto-Black text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <p>
                    <a
                      href="mailto:Pandora @gmail.com "
                      className="font-Roboto-Medium text-lg"
                    >
                      Email:Pandora @gmail.com
                    </a>
                  </p>
                </div>
                <div className="Address w-full sm:w-auto flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="add font-Roboto-Medium text-lg">
                    Address: 123 Main St, Cainta, Rizal
                  </p>
                </div>
              </div>
              <div className="image-container flex justify-center items-center">
                <iframe
                  className="w-full h-[370px] rounded-lg"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=San%20Andres,Cainta%20Rizal+(Pandora's%20Treasure)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 text-quaternary">
            <div
              className="p-8 bg-white dark:bg-quinary rounded-lg shadow-xl ease-in-out"
              data-aos="zoom-out"
              data-aos-duration="1200"
            >
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqForm;
