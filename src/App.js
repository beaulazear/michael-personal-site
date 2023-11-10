import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import PageNavLinks from './components/PageNavLinks';
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects';

export default function App() {
  return (
    <div>
      <PageNavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
};