import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import BKTH1 from '../images/BKTH1.png';
import BKTH3 from '../images/BKTH3.png';
import BKTH4 from '../images/BKTH4.png';
import TLANE1 from '../images/TLANE1.png';
import TLANE2 from '../images/TLANE2.png';
import TLANE3 from '../images/TLANE3.png';
import TLANE4 from '../images/TLANE4.png';
import TLANE5 from '../images/TLANE5.png';
import CH3 from '../images/CHI3.jpg';
import CH4 from '../images/CHI4.jpg';
import CH5 from '../images/CHI5.jpg';
import CH6 from '../images/CHI6.jpg';
import CH7 from '../images/CHI7.jpg';
import CH8 from '../images/CHI8.jpg';
import CH9 from '../images/CHI9.jpg';
import CH10 from '../images/CHI10.jpg';
import CH11 from '../images/CHI11.jpg';


const Projects = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

    const navigate = useNavigate();
    const handleViewContact = () => {
        navigate('/contact');
    };

    const projects = [
        {
            id: 1,
            title: "Lakefront Condo",
            location: "Chicago",
            brief: "Michael brings a sophisticated balance of modern luxury and warm elegance to this Chicago condo.",
            description: "In this thoughtfully redesigned condo, Michael brings a sophisticated balance of modern luxury and warm elegance. Recognizing the potential for maximizing natural light and creating a seamless flow throughout the space, he has transformed each room with a refined palette and carefully curated decor. The living room features large mirrors that add depth and openness, plush seating in soft, neutral tones, and carefully curated greenery. In the kitchen, Michael opted for a bold red accent on the ceiling, sleek cabinetry, and open shelving that showcases artisanal decor. The bathroom is a calming retreat with classic white tile, dark trim, and organic elements, while the bedroom offers a serene sanctuary with natural wood textures and soft textiles.",
            images: [CH3, CH4, CH5, CH6, CH7, CH8, CH9, CH10, CH11],
            featured: CH3
        },
        {
            id: 2,
            title: "Brooklyn Townhouse",
            location: "Lincoln Place",
            brief: "This townhouse renovation highlights natural light and showcases beautiful custom features.",
            description: "This was a gut renovation of the kitchen with cosmetic upgrades throughout the entire 4 floors. When first walking into the brownstone, Michael realized that one of the real features, the lush backyard, was hidden from view. He changed the layout of the kitchen and added a glass wall to allow a view and light to pour through. Cosmetic changes included staining the beams a darker color, refinishing the floors, paint, wallpaper, and then a custom-designed and built-in bookcase and stone around the fireplace. The downstairs bar area had everything it needed but felt like a new show home. The simple updates of painting, changing the hardware, adding an antique glass tile backsplash gave the space the bespoke bar area the homeowners dreamt of.",
            images: [BKTH1, BKTH4, BKTH3],
            featured: BKTH1
        },
        {
            id: 3,
            title: "Talmage Lane",
            location: "Hamptons NY",
            brief: "This project involved reimagining a Sears Kit House into a 3-story cottage with a walk-out lower level.",
            description: "Michael purchased Talmage as a turn-around. Originally a Sears Kit House built on a hill, Michael reimagined this as a 3-story cottage with an addition and walk-out lower level. When Michael is not working for a specific client, he imagines the family that will live in the home. He builds the home and then waits for the family to find their new home. (Maybe not the smartest business plan... but it works) This was sold turn-key with all furniture, linens, kitchen items, etc. All of the furniture comes from the Rachael Ray Furniture Line, designed by Michael.",
            images: [TLANE1, TLANE2, TLANE3, TLANE4, TLANE5],
            featured: TLANE1
        }
    ];

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);

        setIsLoaded(true);
    }, []);

    const handleImageLoad = useCallback(() => {
        // Image loaded callback
    }, []);

    const toggleProject = useCallback((projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    }, [expandedProject]);

    const memoizedProjects = useMemo(() => projects, [projects]);

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            <div className="relative z-10 pt-32 pb-20">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="inline-block mb-6">
                        <span className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent font-light">
                            Portfolio
                        </span>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-2 mx-auto"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight">
                        Recent Projects
                    </h1>
                </div>

                {/* Projects Grid */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-20">
                        {memoizedProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                style={{ transitionDelay: `${300 + (index * 200)}ms` }}
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                                    {/* Project Header */}
                                    <div className="p-8 lg:p-12">
                                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                                            {/* Project Info */}
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-2">
                                                        {project.title}
                                                    </h2>
                                                    <h3 className="text-xl text-gray-600 font-light mb-6">
                                                        {project.location}
                                                    </h3>
                                                    <p className="text-lg text-gray-700 leading-relaxed">
                                                        {project.brief}
                                                    </p>
                                                </div>

                                                {/* Expand Button */}
                                                <button
                                                    onClick={() => toggleProject(project.id)}
                                                    className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors duration-300"
                                                >
                                                    {expandedProject === project.id ? 'Read Less' : 'Read More'}
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-300 ${expandedProject === project.id ? 'rotate-180' : ''
                                                            }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                {/* Expanded Description */}
                                                <div className={`overflow-hidden transition-all duration-500 ${expandedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                    }`}>
                                                    <div className="pt-4 border-t border-gray-200">
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Featured Image */}
                                            <div className="relative">
                                                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg group">
                                                    <OptimizedImage
                                                        src={project.featured}
                                                        alt={`${project.title} featured view`}
                                                        className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                                                        onLoad={handleImageLoad}
                                                        optimizationOptions={{ quality: 90 }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="px-8 lg:px-12 pb-8 lg:pb-12">
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {project.images.slice(1).map((image, imageIndex) => (
                                                <div
                                                    key={imageIndex}
                                                    className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                                                >
                                                    <OptimizedImage
                                                        src={image}
                                                        alt={`${project.title} detail ${imageIndex + 1}`}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        onLoad={handleImageLoad}
                                                        optimizationOptions={{ quality: 85 }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className={`inline-block transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: `${300 + (projects.length * 200)}ms` }}>
                        <p className="text-gray-600 mb-6">
                            Ready to transform your space?
                        </p>
                        <button onClick={handleViewContact} className="inline-flex items-center justify-center px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
                            Get In Touch
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;