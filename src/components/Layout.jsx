import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useScrollContext } from "../context/Context";
import { useState } from "react";
import Productsdrop from "../routers/Productsdrop";
import { Ripple } from "primereact/ripple";
const Layout = () => {
  const { isScroll } = useScrollContext();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/faq", text: "Faq" },
  ];

  const linkStyle = ` p-ripple text-gray-800 dark:text-white ${
    isScroll && "dark:text-quinary"
  } hover:bg-gray-700  sm:inline-block sm:hover:text-gray-300 rounded-md px-3 py-2.5 font-bold text-lg`;

  const activeStyle = "text-red-200";

  return (
    <>
      <div className="flex justify-center ">
        {navLinks.map(({ to, text }) => (
          <NavLink
            onClick={() => handleNavLinkClick(to)}
            key={to}
            to={to}
            isActive={() => activeLink === to}
            activeClassName={activeStyle}
            className={linkStyle}
          >
            {text}
            <Ripple />
          </NavLink>
        ))}
        <div className="mx-2">
          <Productsdrop />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
