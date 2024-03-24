import { NavLink, Outlet } from "react-router-dom";
import { useScrollContext } from "../context/Context";
import { useState } from "react";
import Productsdrop from "../routers/Productsdrop";
const Layout = () => {
  const { isScroll } = useScrollContext();
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  const linkStyle = `text-quaternary ${
    isScroll && "dark:text-quinary"
  } hover:bg-gray-700  sm:inline-block sm:hover:text-gray-300 rounded-md px-3 py-2 font-bold text-lg`;

  const activeStyle = "text-red-200";

  return (
    <>
      <div className="flex justify-center mt-2">
        {navLinks.map(({ to, text }) => (
          <NavLink
            onClick={() => handleNavLinkClick(to)}
            key={to}
            to={to}
            activeClassName={activeLink === to ? activeStyle : ""}
            className={linkStyle}
          >
            {text}
          </NavLink>
        ))}
        <Productsdrop />
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
