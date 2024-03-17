import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./routers/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="nav ">
        <Navigation />
      </div>
      <div className="main-container ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </Suspense>
  );
}

export default App;
