import { useState, useEffect } from "react";
import Layout from "./Layout";

import Aos from "aos";
import { useScrollContext } from "../context/Context";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Login from "./LoginPage/Login.";
import CreateAcc from "./LoginPage/CreateAcc";

const Navigation = () => {
  const { isScroll } = useScrollContext();
  const [isVisible, setIsVisible] = useState(true);
  const [NavisOpen, setNavisOpen] = useState(false);
  const [isShowed, setisShowed] = useState(false);
  useEffect(() => {
    Aos.init();

    return () => {
      Aos.refresh();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(false);
        localStorage.setItem("headerVisibility", "hidden");
      } else {
        setIsVisible(true);
        localStorage.removeItem("headerVisibility");
      }
    };
    handleResize();
    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (isShowed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowed]);

  const toggleNav = () => {
    setNavisOpen(!NavisOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition duration-300 p-3 ${
        isScroll
          ? " bg-opacity-55 bg-secondary dark:bg-darks backdrop-blur-3xl backdrop-saturate-50 rounded-lg shadow  "
          : "bg-transparent "
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between font-Roboto-medium">
        <div className="relative flex h-16 items-center justify-between w-full">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleNav}
              type="button"
              className={`relative inline-flex items-center justify-center rounded-md p-2 text-text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                isScroll && "dark:text-white"
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}

              <svg
                className={`${NavisOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${NavisOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-shrink-0 items-center">
            <h1
              className={`text-gray-800 text-5xl font-Roboto-Bold dark:text-white ${
                isScroll ? "dark:text-quinary " : ""
              }`}
              style={{ display: isVisible ? "block" : "none" }}
            >
              Pandora
            </h1>
          </div>
          <div className="hidden sm:flex items-center justify-center">
            <div className="flex space-x-4 font-medium">
              <Layout />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className={`relative rounded-full p-1 text-gray-800   dark:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ${
                isScroll && "dark:text-white"
              }`}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            <button
              className={`relative rounded-full p-1 text-gray-800    dark:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ${
                isScroll && "dark:text-white"
              }`}
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>

            {/* Profile dropdown */}

            <div className="relative ml-3">
              <div>
                <Button
                  className="px-5 py-2 rounded-3xl font-Roboto-Medium border border-dark-pink dark:border-white dark:text-white hover:scale-105 ease hover:bg-dark-pink ring-slate-700"
                  onClick={() => setisShowed(true)}
                >
                  <a href="/login">Login</a>
                </Button>
              </div>

              <Dialog
                modal
                visible={isShowed}
                onHide={() => setisShowed(false)}
                className="rounded-lg shadow-lg w-[500px] flex m-5 ease-in-out"
                content={() => (
                  <>
                    <button
                      onClick={() => setisShowed(false)}
                      className="absolute top-0 right-0 z-30 mt-4 mr-4 text-gray-600 hover:text-gray-900 dark:bg-quinary "
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Login />
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${NavisOpen ? "block" : "hidden"} sm:hidden w-full`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            to="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>

          <a
            to="/faq"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Faq
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
