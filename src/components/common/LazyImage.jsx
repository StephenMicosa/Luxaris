import { useEffect, useRef, useState } from 'react';

/**
 * Hook pour détecter quand un élément devient visible
 */
export const useIntersectionObserver = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) observer.unobserve(ref.current);
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
        });

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [options]);

    return { ref, isVisible };
};

/**
 * Image lazy-loaded simple avec support WebP
 */
export default function LazyImage({
    src,
    srcWebp,
    srcMd,
    srcMdWebp,
    alt,
    className = '',
    width,
    height,
}) {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <div ref={ref}>
            {isVisible ? (
                <picture className="contents">
                    {/* WebP si disponible */}
                    {srcWebp && (
                        <source
                            srcSet={`${srcWebp}${srcMdWebp ? `, ${srcMdWebp} 1024w` : ''}`}
                            type="image/webp"
                        />
                    )}
                    {/* JPEG fallback */}
                    {srcMd && (
                        <source
                            srcSet={`${src}, ${srcMd} 1024w`}
                        />
                    )}
                    <img
                        src={srcWebp || src}
                        alt={alt}
                        width={width}
                        height={height}
                        loading="lazy"
                        decoding="async"
                        className={`transition-opacity duration-300 opacity-100 ${className}`}
                    />
                </picture>
            ) : (
                <div
                    className={`bg-slate-200 animate-pulse ${className}`}
                    style={{ aspectRatio: width && height ? `${width}/${height}` : '1' }}
                />
            )}
        </div>
    );
}
