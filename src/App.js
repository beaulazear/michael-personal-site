// App.js
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
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={
          <>
            <PageNavLinks transparent={true} />
            <ImageGallery />
          </>
        } />
        <Route path="/projects" element={
          <>
            <PageNavLinks transparent={false} />
            <Projects />
            <FooterComponent />
          </>
        } />
        <Route path="/furniture" element={
          <>
            <PageNavLinks transparent={false} />
            <Furniture />
            <FooterComponent />
          </>
        } />
        <Route path="/contact" element={
          <>
            <PageNavLinks transparent={false} />
            <Contact />
            <FooterComponent />
          </>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
};