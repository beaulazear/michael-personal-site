import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigate = useNavigate();
  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Main content - removed pt-20 and adjusted for proper centering */}
      <div className="h-full flex flex-col items-center justify-center relative z-10 px-4">
        <div className="text-center">
          <div className={`transform transition-all duration-1500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-block mb-6 md:mb-8">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent font-light">
                Premium Interior Design
              </span>
              <div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-2 mx-auto"></div>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-6 md:mb-8 max-w-5xl mx-auto leading-[1.1] tracking-tight">
              <span className="block">Transforming</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Spaces
              </span>
              <span className="block">Into Refined</span>
              <span className="block">Living Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12">
              Where luxury meets functionality, creating environments that inspire and elevate your everyday moments.
            </p>

            <button
              onClick={handleViewWork}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium text-sm md:text-base"
            >
              View Our Work
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Glossy overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 pointer-events-none"></div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;