import React, { useState, useEffect } from 'react';
import Michael2 from "../images/Michael2.jpeg";

const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);

        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            <div className="relative z-10 pt-32 pb-20">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="inline-block mb-6">
                        <span className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent font-light">
                            About
                        </span>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-2 mx-auto"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight">
                        Meet Michael
                    </h1>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6">
                    <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">

                            {/* Desktop Layout */}
                            <div className="hidden lg:block">
                                <div className="grid lg:grid-cols-2 items-center">

                                    {/* Image Section */}
                                    <div className="p-8">
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={Michael2}
                                                alt="Michael S. Murray"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="space-y-8">
                                            <div>
                                                <h2 className="text-4xl font-serif text-gray-900 mb-4">
                                                    Michael S. Murray
                                                </h2>
                                                <div className="w-20 h-px bg-gradient-to-r from-gray-400 to-transparent mb-8"></div>

                                                <p className="text-lg text-gray-700 leading-relaxed">
                                                    Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. He combines his passions for architecture, construction, and design to transform residential properties in suburban Chicago, New York City, and the Hamptons into their highest potential while delivering exceptional value for clients.
                                                </p>
                                            </div>

                                            {/* Contact Info */}
                                            <div className="pt-8">
                                                <h3 className="text-xl font-serif text-gray-900 mb-6">Get In Touch</h3>
                                                <div className="bg-gray-50 rounded-lg p-6">
                                                    <p className="flex items-center gap-3 text-gray-700">
                                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="font-medium">mike@ariadesignllc.com</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Decorative Element */}
                                            <div className="pt-8">
                                                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="lg:hidden">
                                <div className="p-8">
                                    {/* Image */}
                                    <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={Michael2}
                                            alt="Michael S. Murray"
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center space-y-6">
                                        <div>
                                            <h2 className="text-3xl font-serif text-gray-900 mb-4">
                                                Michael S. Murray
                                            </h2>
                                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>

                                            <p className="text-gray-700 leading-relaxed text-left">
                                                Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. He combines his passions for architecture, construction, and design to transform residential properties in suburban Chicago, New York City, and the Hamptons into their highest potential while delivering exceptional value for clients.
                                            </p>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="pt-8">
                                            <h3 className="text-lg font-serif text-gray-900 mb-4">Get In Touch</h3>
                                            <div className="bg-gray-50 rounded-lg p-5">
                                                <p className="flex items-center justify-center gap-3 text-gray-700">
                                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="font-medium">mike@ariadesignllc.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative Element */}
                                        <div className="pt-8">
                                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                {/* <div className="text-center mt-16">
                    <div className={`inline-block transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="text-gray-600 mb-6">
                            Ready to start your project?
                        </p>
                        <button className="inline-flex items-center justify-center px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
                            Start a Conversation
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;