import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <NavLink
          exact
          to="/"
          activeClassName="bg-gray-900 text-quaternary"
          className="text-quaternary dark:text-quinary  hover:bg-gray-700  hover:text-white sm:inline-block sm:hover:bg-transparent sm:hover:text-gray-300 rounded-md px-3 py-2 font-bold text-lg"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="bg-gray-900 text-white"
          className="text-quaternary  dark:text-quinary hover:bg-gray-700 hover:text-white sm:inline-block sm:hover:bg-transparent sm:hover:text-gray-300 rounded-md px-3 py-2  font-bold text-lg"
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          activeClassName="bg-gray-900 text-white"
          className="text-quaternary  dark:text-quinary hover:bg-gray-700 hover:text-white sm:inline-block sm:hover:bg-transparent sm:hover:text-gray-300 rounded-md px-3 py-2 font-bold text-lg"
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="bg-gray-900 text-white"
          className="text-quaternary  dark:text-quinary hover:bg-gray-700 hover:text-white sm:inline-block sm:hover:bg-transparent sm:hover:text-gray-300 rounded-md px-3 py-2 font-bold text-lg"
        >
          Contact
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
