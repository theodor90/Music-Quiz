import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing';

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;


