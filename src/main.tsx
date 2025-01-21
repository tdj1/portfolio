// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Project1 from './pages/Project1.tsx';
import Project2 from './pages/Project2.tsx';
import Project3 from './pages/Project3.tsx';
import Project4 from './pages/Project4.tsx';
import Project5 from './pages/Project5.tsx';
import References from './pages/References.tsx';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<App />} />
        <Route path="/portfolio/project1/" element={<Project1 />} />
        <Route path="/portfolio/project2/" element={<Project2 />} />
        <Route path="/portfolio/project3/" element={<Project3 />} />
        <Route path="/portfolio/project4/" element={<Project4 />} />
        <Route path="/portfolio/project5/" element={<Project5 />} />
        <Route path="/portfolio/references/" element={<References />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
