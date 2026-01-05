# LCP Optimization - Critical Fix

## Problem

LCP got MUCH worse after removing srcSet:
- **Before**: 3.8s (score 0.2)
- **After**: 4.7s (score 0.1) - **WORSE!**

### Root Cause Analysis

From audit metrics:
- `lcpLoadDelay`: 756ms (delay before image starts loading)
- `lcpLoadDuration`: 2745ms (time to load image)
- Total LCP: 4670ms

**The Problem**:
1. `<picture>` element adds overhead even for priority images
2. Browser has to evaluate `<source>` tags before loading
3. `decoding="async"` delays rendering
4. Preload might not match what's actually loaded

## Solution

### 1. Direct `<img>` Tag for Priority Images
**File**: `components/OptimizedImage.tsx`

**Change**:
- For `isPriority={true}` images, use direct `<img>` tag with WebP src
- Skip `<picture>` element entirely for priority images
- Use `decoding="sync"` for immediate decoding
- Add `onError` handler for WebP fallback

**Why**:
- No browser evaluation overhead
- Immediate loading start
- Synchronous decoding = faster rendering

### 2. Simplified Preload
**File**: `index.html`

**Change**:
- Only preload WebP version (not JPG)
- Matches what priority images actually load

**Why**:
- Preload should match actual load
- WebP is smaller and faster

## Expected Results

### LCP
- **Before fix**: 4.7s (score 0.1)
- **After fix**: ~2.5-3.0s (expected score 0.4-0.6)
- **Improvement**: Remove picture element overhead

### Key Changes
- Priority images: Direct `<img>` with WebP
- Non-priority images: Still use `<picture>` for fallback
- Decoding: `sync` for priority, `async` for others

## Files Modified

1. ✅ `components/OptimizedImage.tsx` - Direct img for priority images
2. ✅ `index.html` - Simplified preload

## Testing

After this fix:
- LCP should improve significantly
- Image should start loading immediately (lcpLoadDelay should be < 200ms)
- WebP should load with JPG fallback if needed

