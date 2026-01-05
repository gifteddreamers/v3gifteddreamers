# Performance Regression Fix

## Issues Identified

After implementing responsive images with srcSet, Lighthouse scores decreased:

### Problems Found:
1. **LCP worsened**: 3.5s → 3.8s (score 0.23 → 0.2)
   - Responsive images (srcSet) add overhead - browser must evaluate which size to load
   - This delay hurts LCP for hero images which are critical above-the-fold content

2. **CLS appeared**: 0.0 → 0.4 (score 1.0 → 0.25)
   - Footer was causing layout shift (not images)
   - Footer height was changing when content loaded

3. **TTI slightly worse**: 3.6s → 3.8s (score 0.69 → 0.64)

## Root Causes

### LCP Issue
- Using `<picture>` with `srcSet` for hero images causes browser to:
  1. Evaluate viewport size
  2. Choose appropriate image size
  3. Start loading selected image
- This adds ~300ms delay for LCP elements
- Hero images should load immediately without evaluation

### CLS Issue
- Footer component had no min-height
- Footer content loads dynamically (social icons, links)
- Footer height changes as content loads, causing layout shift

## Fixes Applied

### 1. ✅ Removed srcSet from Hero Images
**Files Modified**: All page components (Home, About, Services, FAQ, Volunteer, Partners, MatchingGifts, CommonCloud, Gruhp)

**Change**:
- Removed `srcSet` and `srcSetWebP` props from hero images
- Hero images now use direct WebP (via OptimizedImage component)
- Browser loads WebP immediately without size evaluation

**Why**:
- Hero images are LCP elements - they need to load ASAP
- Responsive images are better for below-the-fold content
- Direct WebP is faster for critical above-the-fold images

### 2. ✅ Fixed Footer CLS
**File Modified**: `components/Footer.tsx`

**Change**:
- Added `min-h-[400px]` to footer element
- Reserves space for footer content, preventing layout shift

**Why**:
- Footer content loads dynamically
- Min-height ensures space is reserved upfront
- Prevents footer from "pushing down" content as it loads

### 3. ✅ Updated Preload
**File Modified**: `index.html`

**Change**:
- Updated preload to point to WebP version first
- Added both WebP and JPG preloads for better browser support

**Why**:
- Preload should match what's actually loaded
- WebP loads faster, so preload WebP first

## Expected Results

### LCP
- **Before fix**: 3.8s (score 0.2)
- **After fix**: ~2.5-3.0s (expected score 0.4-0.6)
- **Improvement**: Removed srcSet evaluation delay

### CLS
- **Before fix**: 0.4 (score 0.25)
- **After fix**: ~0.0 (expected score 1.0)
- **Improvement**: Footer min-height prevents shift

### Overall Performance
- **Before fix**: 0.61
- **After fix**: Expected 0.75-0.85

## Key Learnings

1. **Responsive images (srcSet) are NOT always better**
   - Great for below-the-fold images
   - Bad for LCP/hero images (adds delay)
   - Use direct WebP for critical images

2. **Footer CLS is common**
   - Footer content often loads dynamically
   - Always reserve space with min-height
   - Prevents layout shift

3. **Preload must match actual load**
   - Preload should point to what browser actually loads
   - Update preload when changing image strategy

## Files Modified

1. ✅ `pages/Home.tsx` - Removed srcSet from hero
2. ✅ `pages/About.tsx` - Removed srcSet from hero
3. ✅ `pages/Services.tsx` - Removed srcSet from hero
4. ✅ `pages/FAQ.tsx` - Removed srcSet from hero
5. ✅ `pages/Volunteer.tsx` - Removed srcSet from hero
6. ✅ `pages/Partners.tsx` - Removed srcSet from hero
7. ✅ `pages/MatchingGifts.tsx` - Removed srcSet from hero
8. ✅ `pages/CommonCloud.tsx` - Removed srcSet from hero
9. ✅ `pages/Gruhp.tsx` - Removed srcSet from hero
10. ✅ `components/Footer.tsx` - Added min-height
11. ✅ `index.html` - Updated preload to WebP

## Next Steps

1. Test the fixes - Run new Lighthouse audit
2. Verify LCP improved (should be < 3.0s)
3. Verify CLS fixed (should be < 0.1)
4. Consider using responsive images only for below-the-fold images
5. Monitor Core Web Vitals in production

## Notes

- Responsive images (srcSet) are still useful for below-the-fold images
- Hero images should always use direct WebP for fastest LCP
- Footer min-height prevents CLS but may need adjustment based on actual content height

