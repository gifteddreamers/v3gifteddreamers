import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import App from './App';
import { loadAnalyticsOnInteraction } from './lib/analytics-loader';

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

// Load analytics on user interaction (fallback if consent banner isn't shown)
// This ensures analytics load even if user doesn't interact with consent banner
loadAnalyticsOnInteraction();