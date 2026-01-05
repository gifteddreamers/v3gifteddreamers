# Performance Optimization Plan - Target 90%+

## Current Status (Audit 12)
- **Performance Score**: 0.79 (79%)
- **Target**: > 0.9 (90%+)
- **Gap**: Need to improve by 11+ points

## Critical Issues Identified

### 1. CLS (Cumulative Layout Shift) - Score 0.25 ⚠️ CRITICAL
- **Current**: 0.401
- **Target**: < 0.1 (score 1.0)
- **Impact**: High (affects performance score significantly)
- **Issue**: Footer still causing layout shift (score 0.401)
- **Root Cause**: Footer renders after React hydration, causing shift

### 2. Image Delivery - Score 0 ⚠️ HIGH PRIORITY
- **Current**: 261 KiB savings possible
- **Hero Image**: 133 KiB wasted (385KB total, could be 252KB)
- **Impact**: LCP improvement (150ms savings)
- **Issue**: Hero image compression can be improved

### 3. Cache Lifetimes - Score 0 ⚠️ MEDIUM PRIORITY
- **Current**: 264 KiB savings possible
- **Impact**: LCP improvement (100ms savings)
- **Issues**:
  - Double the Donation: 10min cache (should be 1 year)
  - Givebutter widgets: 1hr cache (should be 1 year)
  - Brandfetch icons: 1 day cache (should be 1 year)
- **Note**: These are third-party resources - limited control

### 4. Legacy JavaScript - Score 0 ⚠️ LOW PRIORITY
- **Current**: 18 KiB savings possible
- **Impact**: LCP improvement (50ms savings)
- **Status**: Already configured ES2020+ target, may need rebuild

### 5. Render Blocking - Score 0.5 ⚠️ LOW PRIORITY
- **Current**: CSS file (9997 bytes)
- **Impact**: Minimal (already optimized by Vite)
- **Status**: Vite extracts CSS, so this is less critical

## Optimization Plan

### Priority 1: Fix CLS (Biggest Impact)

#### Option A: Static Footer Skeleton (Recommended)
**Approach**: Add a static footer skeleton in HTML that matches exact footer dimensions

**Implementation**:
1. Add static footer HTML before `#root`
2. Use exact same structure and dimensions as React footer
3. Hide/show based on React hydration state
4. Ensure smooth transition

**Expected Impact**: CLS 0.401 → < 0.1 (score 1.0)
**Performance Gain**: ~5-7 points

#### Option B: CSS Grid/Flexbox Reserve Space
**Approach**: Use CSS Grid to reserve footer space before React renders

**Implementation**:
1. Set up CSS Grid layout in `index.html`
2. Reserve footer row with exact height
3. Footer component fills reserved space

**Expected Impact**: CLS 0.401 → < 0.1 (score 1.0)
**Performance Gain**: ~5-7 points

### Priority 2: Optimize Hero Image (High Impact)

**Current**: 385KB WebP (133KB wasted)
**Target**: < 252KB (reduce by 35%)

**Implementation**:
1. Re-compress hero image with higher compression
2. Use `cwebp -q 75` (instead of current quality)
3. Or resize to smaller dimensions if acceptable
4. Test visual quality vs file size tradeoff

**Expected Impact**: 
- Image delivery: 133KB savings
- LCP: 150ms improvement
**Performance Gain**: ~2-3 points

### Priority 3: Inline Critical CSS (Medium Impact)

**Current**: CSS file blocks render (9997 bytes)
**Target**: Inline critical CSS, defer rest

**Implementation**:
1. Extract critical CSS (above-the-fold styles)
2. Inline critical CSS in `<head>`
3. Load full CSS asynchronously
4. Use Vite plugin or manual extraction

**Expected Impact**: 
- Render blocking: Reduced
- FCP: Slight improvement
**Performance Gain**: ~1-2 points

### Priority 4: Optimize Third-Party Scripts (Medium Impact)

**Current**: Givebutter and Double the Donation load immediately
**Target**: Defer non-critical widget initialization

**Implementation**:
1. Load widget scripts after page load
2. Use `requestIdleCallback` for non-critical widgets
3. Or load on scroll/interaction

**Expected Impact**: 
- TTI: Improvement
- Initial bundle: Smaller
**Performance Gain**: ~1-2 points

### Priority 5: Further Image Optimization (Low Impact)

**Current**: Other images may not be optimized
**Target**: Ensure all images use WebP, proper sizing

**Implementation**:
1. Audit all images
2. Convert to WebP if not already
3. Add proper width/height attributes
4. Use lazy loading for below-the-fold images

**Expected Impact**: 
- Image delivery: Additional savings
- LCP: Minor improvement
**Performance Gain**: ~1 point

## Expected Results After All Fixes

| Metric | Current | After Fixes | Target |
|--------|---------|------------|--------|
| **Performance** | 0.79 | 0.90-0.95 | > 0.9 |
| **CLS** | 0.401 (0.25) | < 0.1 (1.0) | < 0.1 |
| **LCP** | 1.1s (0.92) | < 1.0s (1.0) | < 2.5s |
| **Image Delivery** | 261 KiB | < 50 KiB | Optimized |
| **Cache Lifetimes** | 264 KiB | < 50 KiB | Optimized |

## Implementation Order

1. **Fix CLS** (Priority 1) - Biggest impact, ~5-7 points
2. **Optimize Hero Image** (Priority 2) - High impact, ~2-3 points
3. **Inline Critical CSS** (Priority 3) - Medium impact, ~1-2 points
4. **Optimize Third-Party Scripts** (Priority 4) - Medium impact, ~1-2 points
5. **Further Image Optimization** (Priority 5) - Low impact, ~1 point

**Total Expected Gain**: 10-15 points → Performance score 0.89-0.94 ✅

## Notes

- CLS fix is the highest priority (biggest impact)
- Hero image optimization is quick win (high impact, easy to implement)
- Third-party cache lifetimes are limited (can't control their headers)
- Legacy JavaScript already configured (may need rebuild to take effect)

