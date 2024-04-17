import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import Aos from "aos";

import "aos/dist/aos.css";

/* import { PrimeReactProvider } from "primereact/api"; */
import { LoadPageProvider } from "./context/LazyContext.jsx";
import { ScrollProvider } from "./context/Context";
import { BrowserRouter } from "react-router-dom";
export const AOS = () => {
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh();
    };
  }, []);

  // Return null as placeholder
  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <LoadPageProvider>
        <ScrollProvider>
          <AOS />
          <App />
        </ScrollProvider>
      </LoadPageProvider>
    </React.StrictMode>
  </BrowserRouter>
);
