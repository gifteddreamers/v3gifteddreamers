import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import App from './App';
import { loadAnalytics, loadGivebutter, loadDoubleDonation } from './lib/analytics-loader';

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

// Register service worker for caching brandfetch icons with longer TTL
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Load functional widgets immediately - required for site functionality (not analytics)
loadGivebutter(); // Required for donation widgets
loadDoubleDonation(); // Required for matching gifts plugin

// DO NOT load analytics automatically - wait for explicit user consent
// Analytics will only load when user clicks "Accept" in cookie banner
// This prevents third-party cookies from being set without consent
// Removed automatic loading to ensure privacy compliance