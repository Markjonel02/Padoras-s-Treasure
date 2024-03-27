import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create context
const ScrollContext = createContext();

// Custom hook to use scroll context
export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

// ScrollProvider component
export const ScrollProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTop = window.scrollY;
      setIsScroll(scrollToTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
