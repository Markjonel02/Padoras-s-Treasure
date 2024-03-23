import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./routers/Home"));
const Maincontainer = lazy(() => import("./components/Maincontainer"));
import { Loaders } from "./components/Loaders";
const App = () => {
  useEffect(() => {});

  const mainContainerClasses = [
    "main-container",
    "bg-black",
    "p-4",
    "top-4",
  ].join(" ");
  return (
    <div>
      <Suspense fallback={Loaders}>
        <div className="nav">
          <Navigation />
        </div>

        <Maincontainer className={mainContainerClasses}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Maincontainer>

        <div className="footer"></div>
      </Suspense>
    </div>
  );
};

export default App;
