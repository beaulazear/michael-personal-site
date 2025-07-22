import React, { useState, useEffect, useRef } from 'react';
import { useImageOptimization } from '../hooks/useImageOptimization';

const OptimizedImage = ({ 
    src, 
    alt, 
    className = '', 
    onLoad, 
    placeholder = true,
    blur = true,
    enableLazyLoad = true,
    optimizationOptions = {}
}) => {
    const [isVisible, setIsVisible] = useState(!enableLazyLoad);
    const [hasLoaded, setHasLoaded] = useState(false);
    const imgRef = useRef(null);
    const observerRef = useRef(null);

    // Use our optimization hook
    const { src: optimizedSrc, isLoading, error } = useImageOptimization(
        isVisible ? src : null, 
        optimizationOptions
    );

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!enableLazyLoad || !imgRef.current) return;

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observerRef.current?.unobserve(entry.target);
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        observerRef.current.observe(imgRef.current);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [enableLazyLoad]);

    const handleLoad = () => {
        setHasLoaded(true);
        onLoad?.();
    };

    const handleError = (e) => {
        console.warn('Image failed to load:', src, error);
        setHasLoaded(true);
    };

    // Placeholder/skeleton loader
    const renderPlaceholder = () => {
        if (!placeholder) return null;

        return (
            <div className={`absolute inset-0 ${blur ? 'backdrop-blur-sm' : ''}`}>
                <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-inherit" />
                {blur && (
                    <div className="absolute inset-0 bg-white/30 rounded-inherit" />
                )}
            </div>
        );
    };

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            {/* Show placeholder while loading or if not visible yet */}
            {(!hasLoaded || isLoading) && renderPlaceholder()}
            
            {/* Error state */}
            {error && !isLoading && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                    <div className="text-center">
                        <div className="mb-2">📷</div>
                        <div>Image unavailable</div>
                    </div>
                </div>
            )}

            {/* Actual image */}
            {optimizedSrc && (
                <img
                    src={optimizedSrc}
                    alt={alt}
                    className={`${className} transition-opacity duration-500 ${
                        hasLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={enableLazyLoad ? 'lazy' : 'eager'}
                    decoding="async"
                    style={{
                        contentVisibility: 'auto',
                        containIntrinsicSize: '1px 400px'
                    }}
                />
            )}
        </div>
    );
};

export default OptimizedImage;