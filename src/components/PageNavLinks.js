// PageNavLinks.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Aria_header from "../images/Aria_header.svg";

function PageNavLinks({ transparent = false }) {
  const [linksVisible, setLinksVisible] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
  };

  const handleLinkClick = () => {
    setLinksVisible(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent 
          ? 'bg-white/70 backdrop-blur-xl border-white/20' 
          : 'bg-white/90 backdrop-blur-lg border-gray-200/30'
        } border-b shadow-sm`}>
        <div className="flex items-center justify-between px-6 lg:px-8 py-3">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={Aria_header}
                alt="Aria Design Consultants"
                className="h-7 w-auto"
              />
              <div className="ml-3">
                <div className="font-serif text-lg text-gray-900 tracking-wide font-medium">
                  ARIA
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-light -mt-0.5">
                  Design Consultants
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-6 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium rounded-full group no-underline ${
                  isActive ? 'text-gray-900' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Home</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full opacity-80"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </>
              )}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `relative px-6 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium rounded-full group no-underline ${
                  isActive ? 'text-gray-900' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Projects</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full opacity-80"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </>
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative px-6 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium rounded-full group no-underline ${
                  isActive ? 'text-gray-900' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Contact</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full opacity-80"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </>
              )}
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleLinks}
            className="md:hidden p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-300"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${linksVisible ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {linksVisible ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          linksVisible ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 bg-white/95 backdrop-blur-xl border-t border-gray-200/30">
            <nav className="flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium rounded-xl group no-underline ${
                    isActive ? 'text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50' : 'hover:bg-gray-50'
                  }`
                }
              >
                <span className="relative z-10">Home</span>
              </NavLink>
              <NavLink
                to="/projects"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium rounded-xl group no-underline ${
                    isActive ? 'text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50' : 'hover:bg-gray-50'
                  }`
                }
              >
                <span className="relative z-10">Projects</span>
              </NavLink>
              <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium rounded-xl group no-underline ${
                    isActive ? 'text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50' : 'hover:bg-gray-50'
                  }`
                }
              >
                <span className="relative z-10">Contact</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNavLinks;