/**
 * Image Hero simplifiée avec WebP support
 * Utilise les variants générés: sm, md, lg
 */
export default function OptimizedHeroImage({
    src,
    srcWebp,
    srcMd,
    srcMdWebp,
    srcLg,
    srcLgWebp,
    alt = 'Hero image',
    className = '',
    width = 1920,
    height = 1080,
    sizes = '100vw',
}) {
    return (
        <picture className="contents">
            {/* WebP responsive */}
            <source
                srcSet={`${srcWebp} 640w, ${srcMdWebp} 1024w, ${srcLgWebp} 1920w`}
                type="image/webp"
                sizes={sizes}
            />
            {/* JPEG fallback */}
            <source
                srcSet={`${src} 640w, ${srcMd} 1024w, ${srcLg} 1920w`}
                sizes={sizes}
            />
            {/* Image */}
            <img
                src={srcLgWebp || srcLg || src}
                alt={alt}
                width={width}
                height={height}
                className={`${className} object-cover`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
        </picture>
    );
}
