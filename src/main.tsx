// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Project1 from './pages/Project1.tsx';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<App />} />
        <Route path="/portfolio/project1" element={<Project1 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
