import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from 'react-router-dom';
import PageNavLinks from './components/PageNavLinks';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact'
import Projects from './components/Projects';
import FooterComponent from './components/Footer';
import Furniture from './components/Furniture'

export default function App() {
  return (
    <div style={{height: '100vh'}}>
      <PageNavLinks />
      <Routes>
        <Route path="/" element={<ImageGallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterComponent />
    </div>
  )
};