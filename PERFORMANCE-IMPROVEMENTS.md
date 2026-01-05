# Performance Improvements Proposal
## Based on Desktop Audit (2026-01-05)

### Current Scores (Critical Issues)
- **Largest Contentful Paint (LCP)**: 0.23 (3.5s) - Target: < 1.2s
- **Time to Interactive (TTI)**: 0.69 (3.6s) - Needs improvement
- **Best Practices**: Third-party cookies score 0 (6 cookies found)
- **Unused JavaScript**: 276KB wasted, 240ms potential savings

---

## Priority 1: Fix Largest Contentful Paint (LCP)

### Issue
LCP is 3.5s (score 0.23), well above the 1.2s target. The hero image (`austin-skyline.jpg`) is likely the LCP element and is loading too slowly.

### Solutions

#### 1.1 Optimize Hero Image
- **Action**: Convert `austin-skyline.jpg` to WebP format with multiple sizes
- **Expected Impact**: 50-70% file size reduction
- **Implementation**:
  ```bash
  # Generate WebP versions
  cwebp -q 85 austin-skyline.jpg -o austin-skyline.webp
  # Generate responsive sizes: 640w, 1024w, 1920w
  ```

#### 1.2 Add Image Preloading with Priority
- **Action**: Update `index.html` to preload the hero image with `fetchpriority="high"`
- **Current**: Only logo is preloaded
- **Fix**: Preload the actual LCP image (hero background)

#### 1.3 Use Responsive Images
- **Action**: Implement `<picture>` element or `srcset` for hero image
- **Benefit**: Serve appropriate size based on viewport

#### 1.4 Lazy Load Below-the-Fold Images
- **Action**: Add `loading="lazy"` to all images not in viewport
- **Current**: No lazy loading implemented

---

## Priority 2: Reduce Time to Interactive (TTI)

### Issue
TTI is 3.6s (score 0.69). Multiple third-party scripts are blocking rendering.

### Solutions

#### 2.1 Defer Non-Critical Third-Party Scripts
- **Action**: Move analytics and widget scripts to load after page interaction
- **Scripts to defer**:
  - Google Analytics (GA4)
  - Google Tag Manager
  - Givebutter widgets
  - Double the Donation widget
  - Microsoft Clarity

#### 2.2 Implement Code Splitting
- **Action**: Use React.lazy() for route-based code splitting
- **Expected Impact**: Reduce initial bundle size by 30-50%
- **Implementation**: Lazy load all route components

#### 2.3 Remove Unused JavaScript
- **Action**: Audit and remove unused dependencies
- **Current Waste**: 276KB unused JS
- **Tools**: Use Vite bundle analyzer

#### 2.4 Optimize Vite Build Configuration
- **Action**: Enable minification, tree-shaking, and chunk splitting
- **Add to vite.config.ts**:
  ```typescript
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  }
  ```

---

## Priority 3: Fix Third-Party Cookies Issue

### Issue
Score 0 - 6 third-party cookies detected from:
- Microsoft Clarity (5 cookies)
- Google Ads (1 cookie)

### Solutions

#### 3.1 Implement Cookie Consent
- **Action**: Add cookie consent banner
- **Options**:
  - Use a lightweight solution (e.g., `react-cookie-consent`)
  - Only load analytics after consent

#### 3.2 Use First-Party Analytics Where Possible
- **Action**: Consider self-hosting analytics (Plausible, Umami) or using server-side tracking
- **Alternative**: Use Google Analytics with consent mode v2

#### 3.3 Defer Analytics Until User Interaction
- **Action**: Load analytics scripts only after user scrolls or clicks
- **Benefit**: Improves initial load time and respects privacy

---

## Priority 4: Image Optimization

### Issue
Multiple large images without optimization or lazy loading.

### Solutions

#### 4.1 Convert All Images to WebP
- **Action**: Convert all `.jpg` files to WebP format
- **Expected Savings**: 30-50% file size reduction
- **Fallback**: Keep JPG versions for older browsers

#### 4.2 Implement Responsive Images
- **Action**: Use `srcset` for all hero/background images
- **Sizes**: 640w, 1024w, 1920w, 2560w

#### 4.3 Add Image Dimensions
- **Action**: Specify `width` and `height` attributes on all images
- **Benefit**: Prevents layout shift (CLS)

#### 4.4 Lazy Load Images
- **Action**: Add `loading="lazy"` to all below-the-fold images
- **Exception**: Hero image should use `loading="eager"` with `fetchpriority="high"`

---

## Priority 5: Additional Optimizations

### 5.1 Font Loading Optimization
- **Current**: Google Fonts loaded synchronously
- **Fix**: Use `font-display: swap` and preload critical fonts
- **Action**: Add to CSS:
  ```css
  @font-face {
    font-family: 'Inter';
    font-display: swap;
  }
  ```

### 5.2 Add Resource Hints
- **Action**: Add `dns-prefetch` for third-party domains
- **Current**: Only `preconnect` is used
- **Add**:
  ```html
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://js.givebutter.com">
  ```

### 5.3 Enable Compression
- **Action**: Ensure server has gzip/brotli compression enabled
- **Check**: Verify in nginx.conf or server config

### 5.4 Add Service Worker for Caching
- **Action**: Implement service worker for static asset caching
- **Benefit**: Faster repeat visits

---

## Implementation Checklist

### Immediate (High Impact)
- [ ] Optimize hero image (WebP + responsive sizes)
- [ ] Preload LCP image with `fetchpriority="high"`
- [ ] Defer all third-party scripts
- [ ] Implement code splitting with React.lazy()
- [ ] Add lazy loading to below-the-fold images

### Short Term (Medium Impact)
- [ ] Convert all images to WebP
- [ ] Add image dimensions to prevent CLS
- [ ] Remove unused JavaScript
- [ ] Optimize Vite build configuration
- [ ] Add cookie consent banner

### Long Term (Nice to Have)
- [ ] Implement service worker
- [ ] Self-host analytics
- [ ] Add resource hints (dns-prefetch)
- [ ] Optimize font loading

---

## Expected Results

After implementing Priority 1-3:
- **LCP**: 3.5s → ~1.0-1.2s (score: 0.23 → 0.9+)
- **TTI**: 3.6s → ~2.0-2.5s (score: 0.69 → 0.85+)
- **Best Practices**: 0 → 0.8+ (after cookie consent)
- **Overall Performance**: 60-70 → 85-95

---

## Files to Modify

1. `index.html` - Script loading, preloads, resource hints
2. `vite.config.ts` - Build optimization
3. `pages/Home.tsx` - Hero image optimization
4. `App.tsx` - Code splitting implementation
5. All page components - Lazy loading images
6. `index.css` - Font display optimization

---

## Notes

- Test all changes in staging before production
- Monitor Core Web Vitals after deployment
- Consider A/B testing analytics deferral impact
- Keep fallback images (JPG) for older browsers

