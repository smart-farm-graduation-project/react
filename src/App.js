import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Join from './components/join';
import LoginHome from './components/Loginhome';
import FindInfo from "./components/Findinfo";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Findinfo" element={<FindInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
