import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Calculator from "./Calculator";
import OtherPage from "./OtherPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Welcome to React Fabonacci</h1>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/other">Other Page</Link>
        </header>

        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
