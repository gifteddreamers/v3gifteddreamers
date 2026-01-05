# Unused Preconnect Fix - Brandfetch CDN

## Problem
Lighthouse reports unused preconnect for `https://cdn.brandfetch.io/`:
- Preconnect establishes early connection, but Brandfetch logos are lazy loaded
- Logos don't load until user scrolls (below the fold)
- Preconnect is wasted during initial page load

## Root Cause Analysis

### Brandfetch Logo Usage
**File**: `components/LogoCloud.tsx`

- **Loading Strategy**: `loading="lazy"` (lazy loaded)
- **Priority**: `fetchPriority="low"` (low priority)
- **Location**: Below the fold (not immediately visible)
- **Component**: Used in `LogoCloud` section which appears after hero content

### Why Preconnect is Unused
1. **Lazy Loading**: Logos have `loading="lazy"` attribute
2. **Below the Fold**: LogoCloud component is not in initial viewport
3. **Low Priority**: `fetchPriority="low"` means browser won't prioritize these images
4. **Delayed Request**: Browser won't request Brandfetch URLs until user scrolls near them

**Result**: Preconnect establishes connection early, but no requests are made to Brandfetch during initial load, making it unused.

## Solution

### Changed Preconnect to DNS Prefetch
**File**: `index.html`

**Before**:
```html
<!-- Preconnect to Brandfetch CDN for faster logo loading -->
<link rel="preconnect" href="https://cdn.brandfetch.io" crossorigin>
```

**After**:
```html
<!-- DNS Prefetch for Brandfetch CDN (logos are lazy loaded, so preconnect not needed) -->
<link rel="dns-prefetch" href="https://cdn.brandfetch.io">
```

### Why DNS Prefetch is Better Here

| Feature | Preconnect | DNS Prefetch |
|---------|-----------|--------------|
| **DNS Lookup** | ✅ Yes | ✅ Yes |
| **TCP Handshake** | ✅ Yes | ❌ No |
| **TLS Negotiation** | ✅ Yes | ❌ No |
| **Resource Usage** | Higher | Lower |
| **Best For** | Immediate requests | Future requests |

**DNS Prefetch Benefits**:
- ✅ Still resolves DNS early (helps when logos do load)
- ✅ Lower resource usage (no connection overhead)
- ✅ Appropriate for lazy-loaded resources
- ✅ No wasted connection setup

## Brandfetch Compliance

According to [Brandfetch Logo API Usage Guidelines](https://cdn.brandfetch.io/):
- ✅ **Hotlinking**: We're directly embedding logos in `<img>` tags (compliant)
- ✅ **Client ID**: Included in all requests (`?c=1idtlk0flzi7wjMDPI9`)
- ✅ **Referer Header**: Browser automatically includes Referer (compliant)
- ✅ **No Attribution**: Not required (compliant)

## Expected Impact

| Metric | Before | After (Expected) |
|--------|--------|------------------|
| **Unused Preconnects** | 1 | 0 |
| **Resource Usage** | Higher (connection overhead) | Lower (DNS only) |
| **Logo Load Time** | Same (when scrolled) | Same (when scrolled) |
| **Performance Score** | 0.8 | 0.85+ |

## When to Use Preconnect vs DNS Prefetch

### Use Preconnect When:
- ✅ Resource loads immediately (above the fold)
- ✅ Resource is critical for initial render
- ✅ Resource is part of critical request chain
- ✅ Resource loads within first 1-2 seconds

**Examples**: Fonts, critical CSS, LCP images

### Use DNS Prefetch When:
- ✅ Resource loads later (below the fold)
- ✅ Resource is lazy loaded
- ✅ Resource is not critical for initial render
- ✅ Resource loads after user interaction

**Examples**: Lazy-loaded images, third-party widgets, analytics

## Files Modified

1. ✅ `index.html` - Changed preconnect to dns-prefetch for Brandfetch

## Testing

1. Run Lighthouse audit - should show 0 unused preconnects
2. Verify logos still load correctly when scrolling to LogoCloud section
3. Check network tab - DNS should be resolved early, but connection only established when logos load

