import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loaders } from "./components/Loaders";
import { LoadPageProvider } from "./context/LazyContext";

const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./routers/Home"));
const Maincontainer = lazy(() => import("./components/Maincontainer"));
const About = lazy(() => import("./routers/About"));
const Faq = lazy(() => import("./components/Faq"));
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
    "scrollbar-thin",
    " scrollbar-thumb-gray-400",
    "scrollbar-track-gray-100",
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
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </Maincontainer>
        </Suspense>
      </LoadPageProvider>
    </>
  );
};

export default App;
