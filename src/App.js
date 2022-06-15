import React from 'react';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';

function App() {
  // app
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;