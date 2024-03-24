import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const ScrollContext = createContext();

// Custom hook to use scroll context
export const useScrollContext = () => useContext(ScrollContext);

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
