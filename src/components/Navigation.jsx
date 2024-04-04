import { useState, useEffect } from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import { useScrollContext } from "../context/Context";
import ProfileDd from "../routers/ProfileDd";
const Navigation = () => {
  const { isScroll } = useScrollContext();
  const [isVisible, setIsVisible] = useState(true);
  const [NavisOpen, setNavisOpen] = useState(false);
  const [isShow, setisShow] = useState(false);
  useEffect(() => {
    Aos.init();

    return () => {
      Aos.refresh();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 700);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures the effect runs only once

  const show = () => {
    setisShow(!isShow);
  };

  const toggleNav = () => {
    setNavisOpen(!NavisOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition duration-300 p-3 ${
        isScroll
          ? " bg-opacity-55 bg-secondary dark:bg-transparent backdrop-blur-3xl backdrop-saturate-50 rounded-lg shadow  "
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
                <button
                  type="button"
                  onClick={show}
                  className={`relative flex rounded-full p-1 text-sm   dark:text-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ${
                    isScroll && "dark:text-white"
                  }`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </button>
              </div>
              {/* Dropdown menu, show/hide based on menu state */}
              <div
                className={`${
                  isShow ? "absolute" : "hidden"
                } dark:bg-darks dark:text-quinary text-lg dropdown  right-0 z-10 mt-8 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <ProfileDd />
              </div>
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
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <NavLink
            to="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
