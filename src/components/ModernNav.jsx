import React, { useState, useEffect } from 'react';
import AriaHeader from '../images/Aria_header.svg';

const ModernNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled && !isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => scrollToSection('home')}
              className={`cursor-pointer group transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'
              }`}
            >
              <img 
                src={AriaHeader} 
                alt="Aria Design Consultants" 
                className={`h-10 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-0' : 'brightness-0 invert'
                } group-hover:opacity-80`}
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-wider transition-all duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled && !isMobileMenuOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)} />

      <div className={`fixed right-0 top-0 h-full w-80 shadow-2xl z-40 md:hidden transform transition-transform duration-500 ease-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-black"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20"></div>
        </div>
        
        <div className="relative h-full">
          {/* Decorative gradient orbs with more vibrant colors */}
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-400/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
          
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu content */}
          <div className="relative p-8 pt-24 h-full flex flex-col">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src={AriaHeader} 
                alt="Aria Design Consultants" 
                className="h-12 w-auto brightness-0 invert mb-4"
              />
              <div className="w-12 h-px bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-transparent mt-4"></div>
            </div>

            {/* Navigation items */}
            <nav className="flex-1">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative block w-full text-left py-4 px-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:backdrop-blur-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></span>
                    <span className="relative flex items-center justify-between">
                      <span className="text-lg font-light text-white/90 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text tracking-wide transition-all duration-300">
                        {item.label}
                      </span>
                      <svg className="w-4 h-4 text-purple-400/40 group-hover:text-purple-400 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Contact info */}
            <div className="border-t border-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent pt-8 mt-8">
              <p className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium mb-3">Get in touch</p>
              <a href="mailto:mike@ariadesignllc.com" className="inline-block text-sm text-white/70 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300">
                mike@ariadesignllc.com
              </a>
              <div className="flex gap-4 mt-6">
                <span className="text-xs text-blue-400/60">Chicago</span>
                <span className="text-purple-400/40">•</span>
                <span className="text-xs text-purple-400/60">New York</span>
                <span className="text-blue-400/40">•</span>
                <span className="text-xs text-pink-400/60">Hamptons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNav;