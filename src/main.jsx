import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const AOS = () => {
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh(); // Optionally refresh AOS on component unmount
    };
  }, []); // Make sure to include an empty dependency array to run this effect only once
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AOS />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
