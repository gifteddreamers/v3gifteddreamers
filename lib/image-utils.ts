/**
 * Utility functions for generating responsive image srcSet strings
 */

/**
 * Generate srcSet string for responsive images
 * @param basePath - Base path to image (e.g., '/images/austin-skyline')
 * @param extension - File extension (e.g., 'jpg' or 'webp')
 * @param sizes - Array of widths (e.g., [640, 1024, 1920, 2560])
 * @returns srcSet string (e.g., '/images/austin-skyline-640w.jpg 640w, /images/austin-skyline-1024w.jpg 1024w')
 */
export function generateSrcSet(
  basePath: string,
  extension: string,
  sizes: number[] = [640, 1024, 1920, 2560]
): string {
  return sizes
    .map(size => `${basePath}-${size}w.${extension} ${size}w`)
    .join(', ');
}

/**
 * Generate responsive image props for OptimizedImage component
 * @param imagePath - Full path to image (e.g., '/images/austin-skyline.jpg')
 * @param sizes - Array of widths (default: [640, 1024, 1920, 2560])
 * @returns Object with srcSet and srcSetWebP strings, and sizes attribute
 */
export function getResponsiveImageProps(
  imagePath: string,
  sizes: number[] = [640, 1024, 1920, 2560]
): {
  srcSet: string;
  srcSetWebP: string;
  sizes: string;
} {
  // Extract base path and extension
  const pathMatch = imagePath.match(/^(.+)\/([^/]+)\.(jpg|jpeg|png)$/i);
  if (!pathMatch) {
    throw new Error(`Invalid image path: ${imagePath}`);
  }

  const [, baseDir, baseName, ext] = pathMatch;
  const basePath = `${baseDir}/${baseName}`;

  // Generate srcSet strings
  const srcSet = generateSrcSet(basePath, ext.toLowerCase(), sizes);
  const srcSetWebP = generateSrcSet(basePath, 'webp', sizes);

  // Generate sizes attribute for responsive images
  // Default: full width on mobile, 50vw on tablet, 100vw on desktop
  const sizesAttr = '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px';

  return {
    srcSet,
    srcSetWebP,
    sizes: sizesAttr,
  };
}

/**
 * Get responsive image props specifically for hero/background images
 * These typically need full viewport width
 */
export function getHeroImageProps(imagePath: string): {
  srcSet: string;
  srcSetWebP: string;
  sizes: string;
} {
  return {
    ...getResponsiveImageProps(imagePath),
    sizes: '100vw', // Hero images always use full viewport width
  };
}

