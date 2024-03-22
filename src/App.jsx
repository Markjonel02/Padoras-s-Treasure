import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./routers/Home"));

function App() {
  return (
    <div>
      <div className="nav">
        <Navigation />
      </div>

      <div className="main-container">
        <Suspense fallback={<div>Loading Main Content...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
