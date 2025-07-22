import { useState, useEffect, useCallback, useRef } from 'react';

// Hook to handle modern image formats and optimization
export const useImageOptimization = (src, options = {}) => {
    const [optimizedSrc, setOptimizedSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { 
        enableWebP = true, 
        enableAVIF = false, // Keep disabled for broader compatibility
        quality = 85,
        fallback = true 
    } = options;

    const checkImageSupport = useCallback(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        
        return {
            webp: canvas.toDataURL('image/webp').indexOf('image/webp') === 5,
            avif: enableAVIF && canvas.toDataURL('image/avif').indexOf('image/avif') === 5
        };
    }, [enableAVIF]);

    const generateOptimizedUrl = useCallback((originalSrc) => {
        // For production, you might want to integrate with a CDN or image optimization service
        // For now, we'll focus on proper loading and caching
        return originalSrc;
    }, []);

    const preloadImage = useCallback((url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
            img.src = url;
        });
    }, []);

    useEffect(() => {
        let isMounted = true;

        const loadOptimizedImage = async () => {
            if (!src) return;

            setIsLoading(true);
            setError(null);

            try {
                const support = checkImageSupport();
                let finalSrc = src;

                // In a production environment, you would generate WebP/AVIF URLs here
                // For now, we'll use the original source with proper preloading
                if (enableWebP && support.webp && (src.includes('.jpg') || src.includes('.png'))) {
                    // Example: finalSrc = src.replace(/\.(jpg|png)$/i, '.webp');
                    finalSrc = generateOptimizedUrl(src);
                }

                const loadedSrc = await preloadImage(finalSrc);
                
                if (isMounted) {
                    setOptimizedSrc(loadedSrc);
                    setIsLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    if (fallback) {
                        // Try fallback to original
                        try {
                            const fallbackSrc = await preloadImage(src);
                            setOptimizedSrc(fallbackSrc);
                            setIsLoading(false);
                        } catch (fallbackErr) {
                            setError(fallbackErr);
                            setIsLoading(false);
                        }
                    } else {
                        setError(err);
                        setIsLoading(false);
                    }
                }
            }
        };

        loadOptimizedImage();

        return () => {
            isMounted = false;
        };
    }, [src, enableWebP, enableAVIF, quality, fallback, checkImageSupport, generateOptimizedUrl, preloadImage]);

    return { src: optimizedSrc, isLoading, error };
};

// Hook for intersection observer (lazy loading)
export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element || !('IntersectionObserver' in window)) {
            setIsIntersecting(true);
            setHasIntersected(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting && !hasIntersected) {
                    setHasIntersected(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
                ...options
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [hasIntersected, options]);

    return [elementRef, isIntersecting, hasIntersected];
};