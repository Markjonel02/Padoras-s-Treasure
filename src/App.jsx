import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loaders } from "./components/Loaders";
import { LoadPageProvider } from "./context/LazyContext";
const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./routers/Home"));
const Maincontainer = lazy(() => import("./components/Maincontainer"));
const About = lazy(() => import("./routers/About"));

const App = () => {
  const mainContainerClasses = [
    "main",
    "h-full",
    "w-full",
    "flex",
    "items-center",
    "justify-center",
    "antialiased",
    "dark:bg-darks",
  ].join("");

  return (
    <>
      <LoadPageProvider>
        <Suspense fallback={<Loaders />}>
          <div className="nav">
            <Navigation />
          </div>
          <Maincontainer className={mainContainerClasses}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Maincontainer>
        </Suspense>
      </LoadPageProvider>
    </>
  );
};

export default App;
