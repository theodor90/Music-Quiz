import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing';
import HowToPlay from './pages/howtoplay';
import GamePage from "./pages/gamepage";

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/howtoplay" element={< HowToPlay/>} />
            <Route path="/gamepage" element={< GamePage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;