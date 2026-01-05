# Specific Implementation Changes

This document contains the exact code changes needed to implement the performance improvements.

---

## 1. Update vite.config.ts

**File**: `vite.config.ts`

```typescript
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['3000-icy05hrjm3itezj3j337a-94580408.sg1.manus.computer'],
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Enable minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: isProduction, // Remove console.log in production
            drop_debugger: isProduction,
          },
        },
        // Code splitting configuration
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Separate vendor chunks
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'vendor-react';
                }
                if (id.includes('react-router')) {
                  return 'vendor-router';
                }
                if (id.includes('lucide-react')) {
                  return 'vendor-icons';
                }
                return 'vendor';
              }
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 1000,
        // Enable source maps for production debugging (optional)
        sourcemap: false,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
      },
    };
});
```

---

## 2. Update App.tsx with Code Splitting

**File**: `App.tsx`

```typescript
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import { trackPageView } from './lib/analytics';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const Gruhp = lazy(() => import('./pages/Gruhp'));
const Partners = lazy(() => import('./pages/Partners'));
const CommonCloud = lazy(() => import('./pages/CommonCloud'));
const About = lazy(() => import('./pages/About'));
const MatchingGifts = lazy(() => import('./pages/MatchingGifts'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Page title mapping for analytics
const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/volunteer': 'Volunteer',
  '/gruhp': 'GRUHP Fund',
  '/corporate-partners': 'Corporate Partners',
  '/common-cloud': 'Common Cloud',
  '/about': 'About',
  '/matching-gifts': 'Matching Gifts',
  '/faq': 'FAQ',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Track page view for GA4
    const pageTitle = pageTitles[pathname] || 'Gifted Dreamers';
    trackPageView(pathname, pageTitle);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        <Breadcrumbs />

        <main id="main-content" className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/gruhp" element={<Gruhp />} />
              <Route path="/corporate-partners" element={<Partners />} />
              <Route path="/common-cloud" element={<CommonCloud />} />
              <Route path="/about" element={<About />} />
              <Route path="/matching-gifts" element={<MatchingGifts />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

---

## 3. Update index.html - Defer Scripts & Add Preloads

**File**: `index.html`

Key changes:
1. Move all third-party scripts to bottom or defer them
2. Add preload for hero image (LCP element)
3. Add dns-prefetch for third-party domains
4. Add font-display: swap

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gifted Dreamers | $380K in Free Nonprofit Tech Tools</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="Gifted Dreamers helps nonprofits and startups access $380K+ in free enterprise tools from Google, Microsoft, Salesforce, and 200+ companies. Tech perks audits, accounting cleanup, and workflow automation." />
    <meta name="keywords" content="nonprofit technology, tech perks, Google Ad Grants, nonprofit accounting, free enterprise tools, 501c3 resources, nonprofit software, TechSoup alternative, free nonprofit tools" />
    <meta name="author" content="Gifted Dreamers" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://gifteddreamers.org" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gifteddreamers.org" />
    <meta property="og:title" content="Gifted Dreamers | $380K in Free Nonprofit Tech Tools" />
    <meta property="og:description" content="We help nonprofits access free enterprise tools from Google, Microsoft, Salesforce, and 200+ companies. Tech perks audits starting at $150." />
    <meta property="og:image" content="https://gifteddreamers.org/logo-200.png" />
    <meta property="og:site_name" content="Gifted Dreamers" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://gifteddreamers.org" />
    <meta name="twitter:title" content="Gifted Dreamers | Free Nonprofit Tech Tools" />
    <meta name="twitter:description" content="Access $380K+ in free enterprise tools. Tech perks audits and accounting cleanup for nonprofits." />
    <meta name="twitter:image" content="https://gifteddreamers.org/logo-200.png" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/logo-200.png">

    <!-- DNS Prefetch for third-party domains -->
    <link rel="dns-prefetch" href="https://www.googletagmanager.com">
    <link rel="dns-prefetch" href="https://js.givebutter.com">
    <link rel="dns-prefetch" href="https://widgets.givebutter.com">
    <link rel="dns-prefetch" href="https://doublethedonation.com">
    <link rel="dns-prefetch" href="https://www.clarity.ms">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">

    <!-- Preconnect to critical resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Preload LCP image (hero background) - HIGH PRIORITY -->
    <link rel="preload" as="image" href="/images/austin-skyline.jpg" fetchpriority="high">
    <!-- Preload logo as fallback -->
    <link rel="preload" as="image" href="/logo-200.png" fetchpriority="high">

    <!-- Google Fonts with font-display: swap -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Structured Data (JSON-LD) for Google Ad Grants -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gifted Dreamers",
      "legalName": "Gifted Dreamers, Inc.",
      "url": "https://gifteddreamers.org",
      "logo": "https://gifteddreamers.org/logo-200.png",
      "foundingDate": "2024",
      "description": "Gifted Dreamers helps nonprofits and startups access $380K+ in free enterprise tools from Google, Microsoft, Salesforce, and 200+ companies through tech perks audits, accounting cleanup, and workflow automation.",
      "email": "services@gifteddreamers.org",
      "taxID": "39-3863796",
      "nonprofitStatus": "Nonprofit501c3",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://gifteddreamers.substack.com",
        "https://www.linkedin.com/in/kristinesocall",
        "https://givebutter.com/gifteddreamers"
      ],
      "founder": {
        "@type": "Person",
        "name": "Kristine Socall",
        "jobTitle": "Executive Director"
      },
      "knowsAbout": [
        "Google Ad Grants",
        "Nonprofit Technology",
        "TechSoup",
        "Microsoft Nonprofit",
        "Salesforce Nonprofit",
        "QuickBooks"
      ]
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.tsx"></script>

    <!-- Deferred Third-Party Scripts - Load after page is interactive -->
    <script>
      // Load analytics and widgets after user interaction or page load
      function loadThirdPartyScripts() {
        // Google Analytics 4 (GA4)
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6X01DRJBC0';
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6X01DRJBC0');
        gtag('config', 'GT-KD7JXRM8');
        gtag('config', 'AW-17711415748');

        // Givebutter Widget Script
        window.Givebutter = window.Givebutter || function() { (Givebutter.q = Givebutter.q || []).push(arguments); };
        Givebutter('setOptions', { accountId: 'PWF9tXFflbTG12rU' });
        
        const givebutterScript1 = document.createElement('script');
        givebutterScript1.async = true;
        givebutterScript1.src = 'https://js.givebutter.com/elements/latest.js';
        document.body.appendChild(givebutterScript1);

        const givebutterScript2 = document.createElement('script');
        givebutterScript2.async = true;
        givebutterScript2.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=PWF9tXFflbTG12rU&p=other';
        document.body.appendChild(givebutterScript2);

        // Double the Donation Widget Script
        window.DDCONF = { API_KEY: "6HMm5sEaYqgnLZmU" };
        const ddScript = document.createElement('script');
        ddScript.src = 'https://doublethedonation.com/api/js/ddplugin.js';
        document.body.appendChild(ddScript);

        // Microsoft Clarity Analytics
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "uk53w4bsjz");
      }

      // Load after page is interactive or on first user interaction
      if (document.readyState === 'complete') {
        setTimeout(loadThirdPartyScripts, 2000); // 2 second delay
      } else {
        window.addEventListener('load', function() {
          setTimeout(loadThirdPartyScripts, 2000);
        });
        
        // Also load on first user interaction (scroll, click, touch)
        let userInteracted = false;
        const loadOnInteraction = () => {
          if (!userInteracted) {
            userInteracted = true;
            loadThirdPartyScripts();
            window.removeEventListener('scroll', loadOnInteraction);
            window.removeEventListener('click', loadOnInteraction);
            window.removeEventListener('touchstart', loadOnInteraction);
          }
        };
        window.addEventListener('scroll', loadOnInteraction, { once: true, passive: true });
        window.addEventListener('click', loadOnInteraction, { once: true });
        window.addEventListener('touchstart', loadOnInteraction, { once: true, passive: true });
      }
    </script>
  </body>
</html>
```

---

## 4. Create OptimizedImage Component

**File**: `components/OptimizedImage.tsx` (new file)

```typescript
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = 'lazy',
  sizes,
}) => {
  // Convert .jpg to .webp if available
  const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');
  const fallbackSrc = src;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
```

---

## 5. Update Home.tsx Hero Section

**File**: `pages/Home.tsx` (partial update - hero section only)

Replace the hero section (lines 16-59) with:

```typescript
// At top of file, add:
import OptimizedImage from '../components/OptimizedImage';

// Update hero section:
{/* Hero Section */}
<section
  className="relative text-white overflow-hidden min-h-[85vh] flex items-center bg-slate-900"
>
  {/* Optimized background image */}
  <OptimizedImage
    src="/images/austin-skyline.jpg"
    alt="Austin skyline"
    className="absolute inset-0 w-full h-full object-cover"
    priority={true}
    loading="eager"
    width={1920}
    height={1080}
  />
  
  {/* Gradient box on left for text */}
  <div className="absolute left-0 top-0 bottom-0 w-full lg:w-3/5 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-transparent z-[2]"></div>
  
  {/* Text Content */}
  <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24 md:py-32">
    <Reveal className="max-w-2xl lg:max-w-[55%]">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-white">$380K in Free & Discounted Tools.</span><br/>
          <span style={{ color: '#A22131' }}>We'll Help You Get Them.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-100 mb-6 font-light">
          Google, Microsoft, Salesforce, Datadog, and 200+ companies give away enterprise tools to nonprofits and startups.
        </p>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl">
          Most organizations don't know these programs exist. We do. We activate perks, clean up books, and automate workflows—at prices that make sense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button size="lg" variant="accent" className="px-10">
              Hire Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 transition-all">
              Subscribe on Substack
            </Button>
          </a>
        </div>
      </div>
    </Reveal>
  </div>
</section>
```

---

## 6. Update CSS for Font Display

**File**: `src/index.css`

Add at the top:

```css
/* Font display optimization */
@font-face {
  font-family: 'Inter';
  font-display: swap;
}
```

---

## 7. Image Optimization Script

**File**: `scripts/optimize-images.sh` (new file)

```bash
#!/bin/bash

# Convert all JPG images to WebP format
# Requires: cwebp (install via: brew install webp)

cd public/images

for img in *.jpg; do
  if [ -f "$img" ]; then
    filename="${img%.*}"
    echo "Converting $img to WebP..."
    cwebp -q 85 "$img" -o "${filename}.webp"
  fi
done

echo "Image optimization complete!"
```

Make executable: `chmod +x scripts/optimize-images.sh`

---

## Summary of Changes

1. ✅ **vite.config.ts**: Added build optimizations, code splitting, minification
2. ✅ **App.tsx**: Implemented React.lazy() for all routes
3. ✅ **index.html**: Deferred all third-party scripts, added preloads and dns-prefetch
4. ✅ **components/OptimizedImage.tsx**: New component for WebP with fallback
5. ✅ **pages/Home.tsx**: Updated hero section to use optimized image
6. ✅ **src/index.css**: Added font-display: swap
7. ✅ **scripts/optimize-images.sh**: Script to convert images to WebP

---

## Next Steps

1. Run image optimization script to generate WebP versions
2. Test all changes in development
3. Build and test production bundle
4. Deploy and monitor Core Web Vitals
5. Consider adding cookie consent banner (separate task)

