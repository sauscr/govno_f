// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TargetIndicators from './pages/TargetIndicators';
import Activities from './pages/Activities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/target-indicators" element={<TargetIndicators />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </Router>
  );
}

export default App;
