# Widget Loading Clarification

## Summary
Givebutter and Double the Donation are **NOT analytics** - they're required for site functionality and load immediately without requiring cookie consent.

## Loading Strategy

### Immediate Loading (No Consent Required)
- ✅ **Givebutter** - Required for donation widgets (`<givebutter-widget>` elements)
  - Loads immediately in `index.tsx` on app initialization
  - Used on Gruhp and MatchingGifts pages for donation functionality
  - Not blocked by cookie consent banner

- ✅ **Double the Donation** - Required for matching gifts plugin (`#dd-container`)
  - Loads immediately in `index.tsx` on app initialization
  - Used on MatchingGifts page for matching gifts search functionality
  - Not blocked by cookie consent banner

### Consent-Based Loading (Analytics)
- ⏳ **Google Analytics 4** - Only loads after user accepts cookies

## Code Changes

### `lib/analytics-loader.ts`
- Made `loadGivebutter()` and `loadDoubleDonation()` exportable
- Removed both from `loadAnalytics()` function
- Updated comments to clarify they're functional, not analytics

### `index.tsx`
- Added `loadGivebutter()` and `loadDoubleDonation()` calls to load immediately on app initialization
- Ensures widgets work without waiting for user consent

## Pages Using Widgets
1. **Gruhp.tsx** - `<givebutter-widget id="pnqxbg">`
2. **MatchingGifts.tsx** - `<givebutter-widget id="jNybPp">` and `<div id="dd-container">` (Double the Donation)

## Benefits
- ✅ Donation widgets work immediately (better UX)
- ✅ Matching gifts plugin works immediately (better UX)
- ✅ No cookie consent required for core functionality
- ✅ Analytics still require consent (privacy compliance)
- ✅ Clear separation between functional widgets and analytics

## Testing
- Verify donation widgets appear immediately on Gruhp and MatchingGifts pages
- Verify matching gifts plugin works immediately on MatchingGifts page
- Verify analytics only load after user accepts cookies
- Verify Best Practices score remains high (no unnecessary cookies)

