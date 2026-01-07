import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  isPriority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
  srcSet?: string; // For responsive images
  srcSetWebP?: string; // WebP version of srcSet
  disableWebP?: boolean; // Force disable WebP conversion (useful if WebP version doesn't exist)
}

/**
 * OptimizedImage component that:
 * - Supports WebP format with JPG fallback
 * - Supports responsive images with srcset
 * - Handles lazy loading for below-the-fold images
 * - Sets fetchpriority for LCP images
 * - Includes width/height to prevent layout shift (CLS)
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  isPriority = false,
  loading = 'lazy',
  sizes,
  style,
  srcSet,
  srcSetWebP,
  disableWebP = false,
}) => {
  // Convert .jpg/.jpeg to .webp if available
  // Only convert if WebP file actually exists (check by avoiding 404s)
  const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');
  const fallbackSrc = src;
  const isWebP = src.match(/\.(jpg|jpeg)$/i);
  // Don't use WebP for images that don't have WebP versions (prevents 404s)
  const shouldUseWebP = isWebP && !disableWebP;

  // For hero/LCP images, use eager loading with high priority
  const imageLoading = isPriority ? 'eager' : loading;
  const fetchPriority = isPriority ? 'high' : 'auto';

  // If responsive images are provided (srcSet)
  if (srcSet || srcSetWebP) {
    return (
      <picture>
        {/* WebP source with srcset if provided */}
        {srcSetWebP && (
          <source srcSet={srcSetWebP} type="image/webp" sizes={sizes} />
        )}
        {/* Fallback source with srcset */}
        {srcSet && (
          <source srcSet={srcSet} sizes={sizes} />
        )}
        {/* Fallback img tag */}
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading={imageLoading}
          fetchPriority={fetchPriority}
          sizes={sizes}
          decoding="async"
          style={style}
        />
      </picture>
    );
  }

  // If WebP is available and this is a priority image, use direct WebP for fastest LCP
  // For priority images, skip picture element to avoid any overhead
  if (shouldUseWebP && isPriority) {
    // Calculate aspect ratio for absolute positioned images to prevent CLS
    const aspectRatio = width && height ? height / width : undefined;
    const imageStyle = {
      ...style,
      // For absolute positioned images, ensure dimensions prevent layout shift
      ...(className?.includes('absolute') && width && height ? {
        aspectRatio: `${width} / ${height}`,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      } : {}),
    };
    
    return (
      <img
        src={webpSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={imageLoading}
        fetchPriority={fetchPriority}
        decoding="sync"
        style={imageStyle}
        onError={(e) => {
          // Fallback to JPG if WebP fails to load
          const target = e.target as HTMLImageElement;
          if (target.src !== fallbackSrc) {
            target.src = fallbackSrc;
          }
        }}
      />
    );
  }

  // If WebP is available (non-priority), use picture element with source
  if (shouldUseWebP) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading={imageLoading}
          fetchPriority={fetchPriority}
          sizes={sizes}
          decoding="async"
          style={style}
        />
      </picture>
    );
  }

  // Fallback for non-JPG images (SVG, PNG, etc.)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={imageLoading}
      fetchPriority={fetchPriority}
      sizes={sizes}
      decoding="async"
      style={style}
    />
  );
};

export default OptimizedImage;

