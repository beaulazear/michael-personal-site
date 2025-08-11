import React, { useState, useEffect, useRef } from 'react';
import ModernNav from './components/ModernNav';
import OptimizedImage from './components/OptimizedImage';
import FooterComponent from './components/Footer';

// Import all images
import BKTH1 from './images/BKTH1.png';
import BKTH3 from './images/BKTH3.png';
import BKTH4 from './images/BKTH4.png';
import TLANE1 from './images/TLANE1.png';
import TLANE2 from './images/TLANE2.png';
import TLANE3 from './images/TLANE3.png';
import TLANE4 from './images/TLANE4.png';
import TLANE5 from './images/TLANE5.png';
import CH3 from './images/CHI3.jpg';
import CH4 from './images/CHI4.jpg';
import CH5 from './images/CHI5.jpg';
import CH6 from './images/CHI6.jpg';
import CH7 from './images/CHI7.jpg';
import CH8 from './images/CHI8.jpg';
import CH9 from './images/CHI9.jpg';
import CH10 from './images/CHI10.jpg';
import CH11 from './images/CHI11.jpg';
import Michael2 from "./images/Michael2.jpeg";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Lakefront Condo",
      location: "Chicago",
      category: "Residential",
      year: "2023",
      brief: "Sophisticated balance of modern luxury and warm elegance",
      description: "In this thoughtfully redesigned condo, we brought a sophisticated balance of modern luxury and warm elegance. The space was transformed with maximized natural light, seamless flow, and a refined palette. Features include large mirrors for depth, plush neutral seating, sleek cabinetry with bold red accents, and a calming bathroom retreat.",
      images: [CH3, CH4, CH5, CH6, CH7, CH8, CH9, CH10, CH11],
      featured: CH3
    },
    {
      id: 2,
      title: "Brooklyn Townhouse",
      location: "Lincoln Place",
      category: "Renovation",
      year: "2023",
      brief: "Gut renovation highlighting natural light and custom features",
      description: "A complete transformation of a 4-floor brownstone. We opened up the kitchen with a glass wall to showcase the lush backyard, added custom millwork, refinished original floors, and created a bespoke bar area with antique glass tile backsplash.",
      images: [BKTH1, BKTH4, BKTH3],
      featured: BKTH1
    },
    {
      id: 3,
      title: "Talmage Lane",
      location: "Hamptons NY",
      category: "Full Design",
      year: "2022",
      brief: "Reimagined Sears Kit House as modern cottage",
      description: "Originally a Sears Kit House, this property was reimagined as a 3-story cottage with an addition and walk-out lower level. Sold turn-key with all furniture from the Rachael Ray Furniture Line, designed by Michael.",
      images: [TLANE1, TLANE2, TLANE3, TLANE4, TLANE5],
      featured: TLANE1
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <ModernNav />
      
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
              style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
            />
            <div 
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
              style={{ 
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px)`,
                animationDelay: '2s'
              }}
            />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center px-6">
          <div className={`text-center max-w-5xl transform transition-all duration-1500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="mb-8">
              <span className="text-sm md:text-base tracking-[0.5em] text-white/60 font-light uppercase">
                Est. 1998
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              <span className="block">Aria Design</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Consultants
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Transforming spaces into refined living experiences through thoughtful design and meticulous attention to detail
            </p>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <span className="absolute inset-0 border border-white/30 rounded-full"></span>
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-500 group-hover:bg-white/20"></span>
              <span className="relative flex items-center gap-3 text-white font-light tracking-wider">
                Explore Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-light">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4">Featured Projects</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                    <OptimizedImage
                      src={project.featured}
                      alt={project.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-wider text-gray-500">{project.category}</span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{project.location}</p>
                    <p className="text-gray-700 mt-3" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>{project.brief}</p>
                    <div className="mt-4 flex items-center text-sm text-blue-600 group-hover:text-purple-600 transition-colors">
                      View Details
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6" 
             onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" 
               onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif text-gray-900">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 lg:p-8">
              <p className="text-gray-700 mb-8 leading-relaxed">{selectedProject.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.images.map((image, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                    <OptimizedImage
                      src={image}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={Michael2}
                  alt="Michael S. Murray"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-light">About</span>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">Michael S. Murray</h2>
                <div className="w-20 h-px bg-gradient-to-r from-gray-400 to-transparent mb-8"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. With over 25 years of experience, he combines his passions for architecture, construction, and design to transform residential properties.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Specializing in properties across suburban Chicago, New York City, and the Hamptons, Michael delivers their highest potential while creating exceptional value for clients through thoughtful, sophisticated design.
              </p>

              <div className="pt-8">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Philosophy</h3>
                <p className="text-gray-600 italic">
                  "Great design isn't just about aesthetics—it's about creating spaces that enhance the way people live, work, and connect with their environment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 pb-20 bg-gradient-to-br from-slate-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center pb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-white/60 font-light">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8">Start Your Project</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-12"></div>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ready to transform your space into something extraordinary? Let's discuss your vision.
          </p>

          <div className="space-y-6">
            <a 
              href="mailto:mike@ariadesignllc.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">mike@ariadesignllc.com</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="flex justify-center gap-6 pt-8">
              <span className="text-sm text-white/60">Chicago</span>
              <span className="text-white/40">•</span>
              <span className="text-sm text-white/60">New York</span>
              <span className="text-white/40">•</span>
              <span className="text-sm text-white/60">Hamptons</span>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}