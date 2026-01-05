# Performance Fixes Implementation Plan

## Current Performance: 0.79 → Target: 0.90+

### Priority 1: Fix CLS (0.401 → < 0.1) - CRITICAL
**Impact**: ~5-7 performance points

**Solution**: Add static footer skeleton in HTML
- Footer renders after React hydration, causing shift
- Need to reserve space BEFORE React loads
- Add static footer HTML that matches React footer structure

### Priority 2: Optimize Hero Image (133KB savings)
**Impact**: ~2-3 performance points

**Current**: 377KB WebP
**Target**: < 250KB (35% reduction)

**Solution**: Re-compress with higher compression
- Use `cwebp -q 75` (current is likely q85)
- Or resize if acceptable
- Test visual quality

### Priority 3: Inline Critical CSS
**Impact**: ~1-2 performance points

**Current**: CSS file blocks render (9997 bytes)
**Solution**: Extract and inline critical CSS

### Priority 4: Optimize Third-Party Scripts
**Impact**: ~1-2 performance points

**Current**: Givebutter/DoubleDonation load immediately
**Solution**: Defer non-critical widget initialization

### Priority 5: Further Image Optimization
**Impact**: ~1 performance point

**Solution**: Audit all images, ensure WebP, proper sizing

## Implementation Order
1. CLS fix (biggest impact)
2. Hero image optimization (quick win)
3. Critical CSS inline (medium effort)
4. Third-party script optimization (medium effort)
5. Additional image optimization (low effort)

