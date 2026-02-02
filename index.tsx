import React from 'react';
import { createRoot } from 'react-dom/client';
// CSS is loaded via Vite's build process - will be extracted and linked automatically
// Import here so Vite processes it, but it won't block JS execution
import './src/index.css';
import App from './App';
import { loadAnalytics } from './lib/analytics-loader';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Givebutter and Double the Donation load only on pages that need them (MatchingGifts, Gruhp, Volunteer)
// This avoids third-party cookies on homepage and improves Lighthouse best-practices score

// DO NOT load analytics automatically - wait for explicit user consent
// Analytics will only load when user clicks "Accept" in cookie banner
// This prevents third-party cookies from being set without consent
// Removed automatic loading to ensure privacy compliance