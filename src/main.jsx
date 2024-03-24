import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// eslint-disable-next-line no-unused-vars

import { ScrollProvider } from "./context/Context";
// eslint-disable-next-line react-refresh/only-export-components
const AOS = () => {
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh();
    };
  }, []);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollProvider>
        <AOS />
        <App />
      </ScrollProvider>
    </React.StrictMode>
  </BrowserRouter>
);
