import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import EthereumStakingPage from './EthereumStakingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ethereum-staking" element={<EthereumStakingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
