
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RepositoryList from './pages/RepositoryList';
import WelcomePage from './pages/WelcomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
