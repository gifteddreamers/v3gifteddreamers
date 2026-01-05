import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import App from './App';
import { loadAnalytics, hasConsent } from './lib/analytics-loader';

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

// Load analytics on user interaction ONLY if consent was given
// Don't load analytics automatically - wait for consent
// This prevents third-party cookies from being set without consent
if (hasConsent()) {
  loadAnalytics();
}