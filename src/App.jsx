import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loaders } from "./components/Loaders";
import { LoadPageProvider } from "./context/LazyContext";
import { ScrollTop } from "primereact/scrolltop";
import { PrimeReactProvider } from "primereact/api";

const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./routers/Home"));
const Maincontainer = lazy(() => import("./components/Maincontainer"));
const About = lazy(() => import("./routers/About"));
const Faq = lazy(() => import("./components/FAQ/Faq"));
const PagenotFound = lazy(() => import("./components/Nopage/PagenotFound"));
const CreateAccount = lazy(() => import("./components/LoginPage/CreateAcc"));
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
    "scrollbar-thumb-gray-400",
    "scrollbar-track-gray-100",
    "p-ripple",
  ].join("");

  const hiddenRoutes = ["/create-account"];

  // Check if the current route is in the hiddenRoutes array
  const shouldHideNav = hiddenRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <Suspense fallback={<Loaders />}>
        <PrimeReactProvider value={{ ripple: true }}>
          <LoadPageProvider>
            <Maincontainer className={mainContainerClasses}>
              {!shouldHideNav && <Navigation />}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/pagenotfound" element={<PagenotFound />} />
                <Route path="*" element={<PagenotFound />} />
              </Routes>
              <ScrollTop
                threshold={100}
                className="w-5rem h-5rem border-round-md bg-dark-pink text-white rounded-full p-4"
              />
            </Maincontainer>
          </LoadPageProvider>
        </PrimeReactProvider>
      </Suspense>
    </>
  );
};

export default App;
