
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is a workaround to make process.env available in a browser environment
// for the purpose of this exercise, as per prompt assumption.
// In a real build setup, this would be handled by a bundler (Webpack DefinePlugin, Vite import.meta.env).
// @ts-ignore
if (typeof process === 'undefined') {
  // @ts-ignore
  window.process = { env: {} };
} else if (typeof process.env === 'undefined') {
  // @ts-ignore
  process.env = {};
}

// YOU MUST SET YOUR API KEY HERE FOR THE APP TO WORK
// For example: process.env.API_KEY = "YOUR_GEMINI_API_KEY";
// IMPORTANT: Do not commit your actual API key to version control.
// This is set programmatically for this environment as per prompt.
// In a real scenario, this would be configured in the deployment environment.
// e.g. window.process.env.API_KEY = "YOUR_API_KEY";
// For the purpose of this exercise, we'll leave it to be potentially undefined
// and let the app handle it, or the user can set it in their browser console:
// window.process.env.API_KEY = "YOUR_GEMINI_API_KEY" (if you want to test it live)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
